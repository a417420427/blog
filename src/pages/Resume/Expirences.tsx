import styles from './Expirences.module.scss'
import { ExpirenceCard, ExpirenceCardProps } from './Components/ExperienceCard'

export const Expirences = (props: {
  expirences: {
    title: string
    content: ExpirenceCardProps[]
  }[]
}) => {
  return (
    <div className={styles.Expirences}>
      {props.expirences.map((options) => (
        <div key={options.title} className={styles.ExpirencesList}>
          <h3 className="TitleBase">{options.title}</h3>
          {options.content.map((content) => {
            return <ExpirenceCard key={content.title} baseContent={content} />
          })}
        </div>
      ))}
    </div>
  )
}
