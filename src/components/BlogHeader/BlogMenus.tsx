import { withRouter } from 'react-router-dom'
import { RouterPaths } from '../../services/routerService'

import styles from './index.module.scss'
const menus = [
  {
    title: '首页',
    path: RouterPaths.Home,
  },
  {
    title: '归档',
    path: RouterPaths.Marks,
  },
  {
    title: '标签',
    path: RouterPaths.Marks,
  },
]

const SingleMenu = (props: {
  menu: typeof menus[0]
  onMenuClick: (path: string) => void
}) => {
  return (
    <div
      onClick={() => props.onMenuClick(props.menu.path)}
      className={styles.blogHeaderMenu}
    >
      {props.menu.title}
    </div>
  )
}

export const BlogMenu = withRouter(({ history }) => {
  const onMenuClick = (path: string) => {
    history.push(path)
  }
  return (
    <div className={styles.blogHeaderMenus}>
      {menus.map((menu) => (
        <SingleMenu onMenuClick={onMenuClick} key={menu.title} menu={menu} />
      ))}
    </div>
  )
})
