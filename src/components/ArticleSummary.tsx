import styles from './Article.module.scss'

export const ArticleSummary = (props: {
  name: string
  description: string
}) => {
  return (
    <div className="title">
      <h3 className={styles.ArticleSummaryTitle}>{props.name}</h3>
      <p className={styles.ArticleSummarySubtitle}>{props.description}</p>
    </div>
  )
}
