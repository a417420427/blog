import styles from './index.module.scss'
import { BlogMenu } from './BlogMenus'

const BlogLogo = '一苇'

export const BlogHeader = (props: {}) => {
  return (
    <header className={styles.blogHeader}>
      <div className={styles.blogHeaderLogo}>{BlogLogo}</div>
      <div className="blog-header-menu">
        <BlogMenu />
      </div>
    </header>
  )
}
