import { css } from 'astroturf'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Markdown } from './Markdown'

export const SingleArticle = (props: { onlyTitle?: boolean; path: string }) => {
  const [content, setContent] = useState('')
  console.log(props.path, 'xx')
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
    const reg = /<!--[\S\s]*.*[\S\s]*?-->/
    const match = content.match(reg)
    if (!match || !match[0]) {
      return
    }

    function getMatchedString(name: string, content: string) {
      const reg = new RegExp(name + ':' + '(.*)')
      const matchedName = content.match(reg)
      return (matchedName && matchedName[0]) || ''
    }
    return {
      name: getMatchedString('name', match[0]),
      description: getMatchedString('description', match[0]),
    }
  }, [content])
  return (
    <div className="single-article">
      {!props.onlyTitle ? (
        <Markdown content={content}></Markdown>
      ) : titleContent ? (
        <div className="title">
          <h3
            style={{
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            {titleContent.name}
          </h3>
          <p>{titleContent.description}</p>
        </div>
      ) : null}
    </div>
  )
}

css`
  .single-article {
    padding: 20px 0;
  }
`
