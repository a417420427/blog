import styles from './BaseInfoCard.module.scss'
import { ProseMirrorNode } from './ProsemirrorNode'
export interface InfoCardProps {
  title: string
  items: { label: string; content: string }[]
}

export const BaseInfoCard = (props: InfoCardProps) => {
  return (
    <div className={styles.BaseInfoCard}>
      <h3>{props.title}</h3>
      <ul className={styles.InfoCardItems}>
        {props.items.map((item) => (
          <li key={item.label}>
            <span>{item.label + ':'}</span>
            <ProseMirrorNode>{item.content}</ProseMirrorNode>
          </li>
        ))}
      </ul>
    </div>
  )
}
