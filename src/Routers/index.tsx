import { HashRouter as Router, Route } from 'react-router-dom'
import { BlogHeader } from '../components/BlogHeader'
import { Articles } from '../pages/Articles'
import { MainContent } from '../pages/MainContent'
import { Marks } from '../pages/Marks'
import { PdfPreview } from '../pages/PdfPreview'
import { Resume } from '../pages/Resume'
import { Sample } from '../pages/Sample'
import { RouterPaths } from '../services/routerService'

export const Routers = () => {
  return (
    <Router>
      <BlogHeader />
      <Route path={'/'} component={MainContent} exact></Route>
      <Route exact component={Articles} path={RouterPaths.Articles}></Route>
      <Route component={Marks} path={RouterPaths.Marks}></Route>

      <Route component={PdfPreview} path={RouterPaths.PdfPreview}></Route>

      <Route component={Resume} path={RouterPaths.Resume}></Route>
      <Route component={Sample} path={RouterPaths.Sample}></Route>
    </Router>
  )
}
