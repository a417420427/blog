import { withRouter } from 'react-router-dom'
import { getQueryString } from '../../utils/path'
import styles from './index.module.scss'
export const PdfPreview = withRouter(({ history }) => {
  const name = getQueryString('name', history.location.search)
  console.log(name)
  return (
    <div className={styles.PdfPreview}>
      <iframe src="/source/个人简历(张帆).pdf"></iframe>
    </div>
  )
})
