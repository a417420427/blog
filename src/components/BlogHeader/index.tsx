import styles from './index.module.scss'
import { BlogMenu } from './BlogMenus'
import { withRouter } from 'react-router-dom'

const BlogLogo = '一苇'

export const BlogHeader = withRouter(({ history }) => {
  return (
    <header className={styles.blogHeader}>
      <div className={styles.blogHeaderLogo}>{BlogLogo}</div>
      <div className="blog-header-menu">
        <BlogMenu />
      </div>
    </header>
  )
})
