import { useEffect } from 'react'
//import { ArticleSummarys } from './ArticleSummarys'
import styles from './index.module.scss'
//import { Introduction } from './Introduction'
export const MainContent = () => {
  useEffect(() => {
    location.href = 'http://blogs.zxueping.com/'
  })
  return (
    <div className={styles.MainContent}>
      {/* <Introduction />
      <ArticleSummarys /> */}
    </div>
  )
}
