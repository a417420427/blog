import { useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { SingleArticle } from '../../components/Article'
import { getMenuParamsByMenu } from '../../sourceMenu'
import menus from '../../sourceMenu/menu'
import { join } from '../../utils/path'
import { sortedMenu } from '../../utils/sort'
import styles from './index.module.scss'
export const ArticleSummarys = withRouter(({ history }) => {
  const onSummaryClick = useCallback(
    (menu: Menu) => {
      const params = getMenuParamsByMenu(menu)
      history.push('/Articles/' + params.type + '/' + params.name)
    },
    [history],
  )
  return (
    <div>
      {sortedMenu(menus).map((menu) => (
        <div
          onClick={() => onSummaryClick(menu)}
          key={menu.name}
          className={styles.StyledArticle}
        >
          <SingleArticle
            key={menu.name}
            onlyTitle={true}
            path={join(menu.parentPath, menu.name)}
          />
        </div>
      ))}
    </div>
  )
})
