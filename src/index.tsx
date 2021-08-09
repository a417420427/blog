import 'react-hot-loader'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { css } from 'astroturf'
import './styles/index.scss'
import { BlogHeader } from './components/BlogHeader/index'
import { Routers } from './Routers'
console.log(SOURCE_PATH, 'xxx')
const App = () => {
  return (
    <div className="app">
      <BlogHeader />
      <Routers />
    </div>
  )
}
function renderApp() {
  ReactDOM.render(<App />, document.getElementById('app')!)
}

renderApp()
;(module as any).hot.accept(renderApp)

css`
  p {
  }
  h1 {
    font-size: 32px;
  }
`
