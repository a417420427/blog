import { HTMLAttributes, ReactNode } from 'react'
import * as ReactMarkdown from 'react-markdown'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import slug from 'remark-slug'

//import { Comment } from './Comment'
//import { ReactSyntaxHighlighter } from './ReactSyntaxHighlighter'

import { PrismLight as ReactSyntaxHighlighter } from 'react-syntax-highlighter'
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
    <ReactSyntaxHighlighter
      style={a11yDark}
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

export default (props: {
  content: string
  onlyTitle?: boolean
  title: string
}) => {
  return (
    <div className="markdown-container markdown-body">
      <ReactMarkdown
        plugins={[slug as any]}
        components={components}
        children={props.content}
      ></ReactMarkdown>
      {/* <Comment /> */}
    </div>
  )
}
