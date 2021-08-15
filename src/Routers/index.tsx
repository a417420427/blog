import { HashRouter as Router, Route } from 'react-router-dom'
import { Articles } from '../pages/Articles'
import { MainContent } from '../pages/MainContent'
import { Marks } from '../pages/Marks'
import { PdfPreview } from '../pages/PdfPreview'
export const RouterPaths = {
  Home: '/',
  Articles: '/Articles/:type/:name',
  Marks: '/Marks',
  PdfPreview: '/PdfPreview',
}

export const Routers = () => {
  return (
    <Router>
      <Route path={RouterPaths.Home} component={MainContent} exact />
      <Route exact component={Articles} path={RouterPaths.Articles}></Route>
      <Route component={Marks} path={RouterPaths.Marks}></Route>

      <Route component={PdfPreview} path={RouterPaths.PdfPreview}></Route>
    </Router>
  )
}
