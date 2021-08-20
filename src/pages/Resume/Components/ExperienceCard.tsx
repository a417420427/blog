import styles from './ExperienceCard.module.scss'
import { ProseMirrorNode } from './ProsemirrorNode'
export interface ExpirenceCardProps {
  title: string
  titleContent?: string
  cards: ExpirenceItemProps[]
}

type ExpirenceItem =
  | string
  | {
      title: string
      content: string[]
    }
export interface ExpirenceItemProps {
  title: string
  titleContent?: string
  items: ExpirenceItem[]
}

export const ExpirenceCard = (props: { baseContent: ExpirenceCardProps }) => {
  return (
    <div className={styles.ExpirenceCard}>
      <div className={styles.ExpirenceCardTitle}>
        <h3>
          <span>{props.baseContent.title}</span>
          <span>{props.baseContent.titleContent}</span>
        </h3>
      </div>
      {props.baseContent.cards &&
        props.baseContent.cards.map((card) => (
          <ExpirenceItem key={card.title} card={card}></ExpirenceItem>
        ))}
    </div>
  )
}

export const ExpirenceItem = (props: { card: ExpirenceItemProps }) => {
  return (
    <div className={styles.ExpirenceItem}>
      <h3>
        <ProseMirrorNode>{props.card.title}</ProseMirrorNode>
        <ProseMirrorNode>{props.card.titleContent || ''}</ProseMirrorNode>
      </h3>
      <ul>
        {props.card.items.map((item, index) => {
          if (typeof item === 'string') {
            return (
              <li key={item}>
                <ProseMirrorNode>{index + 1 + '.' + item}</ProseMirrorNode>
              </li>
            )
          }
          return (
            <li key={item.title}>
              <ProseMirrorNode>{index + 1 + '.' + item.title}</ProseMirrorNode>
              {item.content.map((content) => (
                <div key={content}>
                  <ProseMirrorNode>{content}</ProseMirrorNode>
                </div>
              ))}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
