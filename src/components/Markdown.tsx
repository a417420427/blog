import { HTMLAttributes, ReactNode, useMemo } from 'react'
import * as ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism'
import slug from 'remark-slug'
import c from 'remark-comment-config'
import 'github-markdown-css'

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  node: any
  inline?: boolean
  className?: string
  children?: ReactNode & ReactNode[]
}
const code = (codeProps: CodeProps) => {
  const { inline, className, children, ...props } = codeProps
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      style={styles.a11yDark}
      language={match[1]}
      wrapLongLines={true}
      PreTag="div"
      children={String(children).replace(/\n$/, '')}
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

const components = {
  code,
}

export const Markdown = (props: { content: string; onlyTitle?: boolean }) => {
  const titleContent = useMemo(() => {
    const reg = /\#\s+.*\n+.*\n+/
    const match = props.content.match(reg)
    return (match && match[0]) || ''
  }, [props.content])

  return (
    <div className="markdown-container markdown-body">
      <ReactMarkdown
        plugins={[slug as any, c as any]}
        components={components}
        children={props.onlyTitle ? titleContent : props.content}
      ></ReactMarkdown>
    </div>
  )
}
