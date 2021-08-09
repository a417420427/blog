import { SingleArticle } from '../../components/Article'
import menus from '../../menu'
import { join } from '../../utils/path'
import { sortedMenu } from '../../utils/sort'
import styles from './index.module.scss'
export const Articles = () => {
  return (
    <div>
      {sortedMenu(menus).map((menu) => (
        <div key={menu.name} className={styles.StyledArticle}>
          <SingleArticle
            key={menu.name}
            onlyTitle={true}
            path={join(menu.parentPath, menu.name)}
          />
        </div>
      ))}
    </div>
  )
}
