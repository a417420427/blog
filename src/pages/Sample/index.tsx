import { Suspense } from 'react'
import styles from './index.module.scss'

const FileDrag = React.lazy(() => import('./FileDrag'))

export const Sample = () => {
  return (
    <div className={styles.Sample}>
      <h3>测试页面</h3>
      <div className={styles.SampleList}>
        <div>图片拖拽上传</div>
        <Suspense fallback={<div>loading</div>}>
          <FileDrag />
        </Suspense>
      </div>
    </div>
  )
}
