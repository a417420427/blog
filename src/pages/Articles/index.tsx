import { useCallback, useEffect, useState } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import { SingleArticle } from '../../components/Article'
import { RouterPaths } from '../../Routers'
import { findTargetMenuByParams, MenuParams } from '../../sourceMenu'
import menus from '../../sourceMenu/menu'
import { join } from '../../utils/path'
import styles from './index.module.scss'

export const Articles = withRouter(({ history }) => {
  const [targetMenu, setTargetMenu] = useState<Menu>()
  const params = useParams<MenuParams>() || {}

  const initArticle = useCallback(() => {
    const targetMenu = findTargetMenuByParams(menus, params)
    if (!targetMenu) {
      history.push(RouterPaths.Home)
    } else {
      setTargetMenu(targetMenu)
    }
  }, [history])

  useEffect(() => {
    initArticle()
  }, [initArticle])
  return (
    <div className={styles.Articles}>
      {targetMenu ? (
        <SingleArticle
          onlyTitle={false}
          path={join(targetMenu.parentPath, targetMenu.name)}
        />
      ) : null}
    </div>
  )
})
