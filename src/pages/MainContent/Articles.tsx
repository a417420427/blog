import { SingleArticle } from '../../components/Article'
import menus from '../../menu'
import { sortedMenu } from '../../utils/sort'
import styles from './index.module.scss'
export const Articles = () => {
  return (
    <div>
      {sortedMenu(menus).map((menu) => (
        <div className={styles.StyledArticle}>
          <SingleArticle
            key={menu.name}
            onlyTitle={true}
            path={'/source' + menu.parentPath + '/' + menu.name}
          />
        </div>
      ))}
    </div>
  )
}
