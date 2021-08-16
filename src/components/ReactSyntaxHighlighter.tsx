import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css'
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import yml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml'

export const ReactSyntaxHighlighter = React.lazy(
  () =>
    new Promise((resolve, reject) => {
      import('react-syntax-highlighter').then((mod) => {
        const { PrismLight } = mod
        PrismLight.registerLanguage('javascript', js)
        PrismLight.registerLanguage('typescript', ts)
        PrismLight.registerLanguage('jsx', jsx)
        PrismLight.registerLanguage('bash', bash)
        PrismLight.registerLanguage('css', css)
        PrismLight.registerLanguage('html', html)
        PrismLight.registerLanguage('tsx', tsx)
        PrismLight.registerLanguage('yaml', yml)
        resolve({ default: PrismLight } as any)
      })
    }),
)
