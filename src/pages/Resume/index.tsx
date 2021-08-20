import { baseInfo, expirences } from './options'
import { Expirences } from './Expirences'
import { BaseInfo } from './BaseInfo'
import styles from './index.module.scss'
import { useLayoutEffect } from 'react'

export const Resume = () => {
  useLayoutEffect(() => {
    const title = document.title
    document.title = '张帆的个人简历'
    return () => {
      document.title = title
    }
  }, [])
  return (
    <div className={styles.Resume}>
      <BaseInfo baseInfo={baseInfo} />
      <Expirences expirences={expirences} />
    </div>
  )
}
