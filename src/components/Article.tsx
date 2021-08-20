import {
  Suspense,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ArticleSummary } from './ArticleSummary'
import { Loading } from './Loading'

const Markdown = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Markdown" */
      /* webpackMode: "lazy" */ './Markdown'
    ),
)

export const SingleArticle = (props: { onlyTitle?: boolean; path: string }) => {
  const [content, setContent] = useState('')
  const isCanceled = useRef(false)
  const reg = /<!--[\S\s]*.*[\S\s]*?-->/

  const fetchData = useCallback(() => {
    return fetch(SOURCE_PATH + props.path)
      .then((res) => res.text())
      .then((res) => {
        if (!isCanceled.current) {
          setContent(res)
        }
      })
  }, [props.path])

  useLayoutEffect(() => {
    fetchData()
    return () => {
      isCanceled.current = true
    }
  }, [fetchData])

  const titleContent = useMemo(() => {
    const match = content.match(reg)
    if (!match || !match[0]) {
      return {
        name: '',
        description: '',
      }
    }

    function getMatchedString(name: string, content: string) {
      const reg = new RegExp(name + ':' + '(.*)')
      const matchedName = content.match(reg)
      return ((matchedName && matchedName[0]) || '').replace(name + ':', '')
    }

    const matchedtype = props.path.match(/\/(\w+)\//)
    return {
      name: getMatchedString('name', match[0]),
      description: getMatchedString('description', match[0]),
      type: (matchedtype && matchedtype[1]) || '',
    }
  }, [content, props.path])
  return (
    <div className="single-article">
      {!props.onlyTitle ? (
        <Suspense fallback={<Loading />}>
          <Markdown
            title={titleContent.name}
            content={content.replace(reg, '')}
          ></Markdown>
        </Suspense>
      ) : (
        <ArticleSummary {...titleContent} />
      )}
    </div>
  )
}
