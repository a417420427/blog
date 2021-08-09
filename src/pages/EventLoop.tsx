import { css } from 'astroturf'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Markdown } from '../components/Markdown'

export const EventLoop = (props: { onlyTitle: boolean }) => {
  const [content, setContent] = useState('')
  const fetchData = useCallback(() => {
    fetch('/source/javascript/eventLoop.md')
      .then((res) => res.text())
      .then((res) => {
        setContent(res)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const titleContent = useMemo(() => {
    const reg = /\#\s+.*\n+.*\n+/
    const match = content.match(reg)
    return (match && match[0]) || ''
  }, [content])
  return (
    <div className="event-loop">
      {!props.onlyTitle ? (
        <Markdown content={content}></Markdown>
      ) : (
        <Markdown content={titleContent} />
      )}
    </div>
  )
}

css`
  .event-loop {
    padding: 0 100px;
  }
`
