import { HashRouter as Router, Route } from 'react-router-dom'
import { BlogHeader } from '../components/BlogHeader'
import { Articles } from '../pages/Articles'
import { MainContent } from '../pages/MainContent'
import { Marks } from '../pages/Marks'
import { PdfPreview } from '../pages/PdfPreview'
import { RouterPaths } from '../services/routerService'

export const Routers = () => {
  return (
    <Router>
      {/* <BlogHeader /> */}
      <Route path={RouterPaths.Home} component={MainContent} exact />
      <Route exact component={Articles} path={RouterPaths.Articles}></Route>
      <Route component={Marks} path={RouterPaths.Marks}></Route>

      <Route component={PdfPreview} path={RouterPaths.PdfPreview}></Route>
    </Router>
  )
}
