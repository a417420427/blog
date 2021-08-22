import { useCallback, useRef, useState } from 'react'
import { join } from '../../utils/path'
import styles from './index.module.scss'
import { useFileDrag } from './useFileDrag'

export default () => {
  const [isInDragZoom, setIsInDragZoom] = useState(false)
  const dragRef = useRef<HTMLDivElement>(null)

  const onDrop = useCallback((e: DragEvent) => {
    if (!dragRef.current) {
      return
    }
    //const target = e.target as HTMLElement
  }, [])

  const onDragover = useCallback((e: DragEvent) => {
    if (!dragRef.current) {
      return
    }
    const isInDragZoom = () => {
      if (!dragRef.current) {
        return false
      }
      const target = e.target as HTMLElement
      return dragRef.current === target, dragRef.current.contains(target)
    }
    setIsInDragZoom(isInDragZoom())
  }, [])
  const { dropFiles } = useFileDrag({
    onDrop,
    onDragover,
  })

  return (
    <div className={styles.FileDrag}>
      <div ref={dragRef} className={styles.DragZoom}>
        拖拽上传
        {isInDragZoom ? <div className={styles.DragZoomMask}></div> : null}
      </div>
      <div className={styles.DragInfo}>
        {dropFiles.map((dropFile) => {
          const filePath = join(dropFile.fullPath, dropFile.file.name)
          return <div key={filePath}>{filePath}</div>
        })}
      </div>
    </div>
  )
}
