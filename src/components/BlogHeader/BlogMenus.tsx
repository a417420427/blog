import styles from './index.module.scss'
const menus = [
  {
    title: '首页',
  },
  {
    title: '归档',
  },
  {
    title: '标签',
  },
]

export const Menu = (props: { menu: typeof menus[0] }) => {
  return <div className={styles.blogHeaderMenu}>{props.menu.title}</div>
}

export const BlogMenu = () => {
  return (
    <div className={styles.blogHeaderMenus}>
      {menus.map((menu) => (
        <Menu key={menu.title} menu={menu} />
      ))}
    </div>
  )
}
