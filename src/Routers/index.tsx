import { HashRouter as Router, Route } from 'react-router-dom'
import { Articles } from '../pages/Articles'
import { MainContent } from '../pages/MainContent'
export const RouterPaths = {
  Home: '/',
  Articles: '/Articles/:type/:name',
}

export const Routers = () => {
  return (
    <Router>
      <Route path={RouterPaths.Home} component={MainContent} exact />
      <Route exact component={Articles} path={RouterPaths.Articles}></Route>
    </Router>
  )
}
