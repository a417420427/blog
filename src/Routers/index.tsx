import { HashRouter as Router } from 'react-router-dom'
import { MainContent } from '../pages/MainContent'
export const RouterPaths = {
  Home: '/',
}

export const Routers = () => {
  return (
    <Router basename={RouterPaths.Home}>
      <MainContent />
    </Router>
  )
}
