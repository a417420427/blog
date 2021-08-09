import { Articles } from './Articles'
import styles from './index.module.scss'
import { Introduction } from './Introduction'
export const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <Introduction />
      <div>
        <Articles />
      </div>
    </div>
  )
}
