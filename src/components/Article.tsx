import { css } from 'astroturf'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArticleSummary } from './ArticleSummary'
import { Markdown } from './Markdown'

export const SingleArticle = (props: { onlyTitle?: boolean; path: string }) => {
  const [content, setContent] = useState('')
  const reg = /<!--[\S\s]*.*[\S\s]*?-->/
  const fetchData = useCallback(() => {
    fetch(SOURCE_PATH + props.path)
      .then((res) => res.text())
      .then((res) => {
        setContent(res)
      })
  }, [])

  useEffect(() => {
    fetchData()
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
    return {
      name: getMatchedString('name', match[0]),
      description: getMatchedString('description', match[0]),
    }
  }, [content])
  return (
    <div className="single-article">
      {!props.onlyTitle ? (
        <Markdown
          title={titleContent.name}
          content={content.replace(reg, '')}
        ></Markdown>
      ) : (
        <ArticleSummary {...titleContent} />
      )}
    </div>
  )
}

css`
  .single-article {
    padding: 20px 0;
  }
`
