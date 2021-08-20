import styles from './BaseInfo.module.scss'
import { AboutMe } from './Components/AboutMe'
import { BaseInfoCard, InfoCardProps } from './Components/BaseInfoCard'

export const BaseInfo = (props: { baseInfo: InfoCardProps[] }) => {
  return (
    <div className={styles.BaseInfo}>
      <AboutMe />
      {props.baseInfo.map((info) => (
        <BaseInfoCard key={info.title} {...info} />
      ))}
    </div>
  )
}
