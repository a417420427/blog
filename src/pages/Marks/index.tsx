import { useCallback, useMemo } from 'react'
import { withRouter } from 'react-router-dom'
import { RouterPaths } from '../../services/routerService'

import { getMarksByMenu } from '../../sourceMenu'
import menu from '../../sourceMenu/menu'
import styles from './index.module.scss'

const MarkTag = (props: {
  tagName: string
  tagCount: number
  onEnterMark: (mark: string) => void
}) => {
  const onMarkClick = useCallback(() => {
    props.onEnterMark(props.tagName)
  }, [props.tagName])

  return (
    <div onClick={onMarkClick} className={styles.MarkTag}>
      <span>{props.tagName}</span>
      <span className={styles.MarkTagCount}>{props.tagCount}</span>
    </div>
  )
}

export const Marks = withRouter(({ history }) => {
  const marks = getMarksByMenu(menu)
  const onEnterMark = useCallback((mark: string) => {
    history.push(RouterPaths.Home + '?mark=' + mark)
  }, [])

  const marksWidthCount = useMemo(() => {
    const noRepeatMarks = Array.from(new Set(marks))

    return noRepeatMarks.map((mark) => {
      return {
        count: marks.filter((m) => m === mark).length,
        mark,
      }
    })
  }, [])
  return (
    <div className={styles.Marks}>
      {marksWidthCount.map((markInfo) => (
        <MarkTag
          onEnterMark={onEnterMark}
          tagCount={markInfo.count}
          key={markInfo.mark}
          tagName={markInfo.mark}
        />
      ))}
    </div>
  )
})
