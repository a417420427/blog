import styles from './Article.module.scss'

export const ArticleSummary = (props: {
  name: string
  description: string
  type?: string
}) => {
  return (
    <div className="title">
      <h3 className={styles.ArticleSummaryTitle}>{props.name}</h3>
      <span className="type">分类: {props.type}</span>
      <p className={styles.ArticleSummarySubtitle}>{props.description}</p>
    </div>
  )
}
