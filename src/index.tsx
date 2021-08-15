import 'react-hot-loader'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { css } from 'astroturf'
import './styles/index.scss'
import { Routers } from './Routers'

const App = () => {
  return (
    <div className="app">
      <Routers />
    </div>
  )
}
function renderApp() {
  ReactDOM.render(<App />, document.getElementById('app')!)
}

renderApp()

css`
  p {
  }
  h1 {
    font-size: 32px;
  }
`
