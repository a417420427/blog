import { withRouter } from 'react-router-dom'
import { RouterPaths } from '../../services/routerService'
import styles from './index.module.scss'

const IntroductionDetail = withRouter(({ history }) => {
  return (
    <span
      style={{
        cursor: 'pointer',
      }}
      onClick={() => history.push(RouterPaths.Resume)}
    >
      点击查看
    </span>
  )
})
const info = [
  {
    title: '职业',
    content: '前端开发工程师',
  },
  {
    title: '介绍',
    content:
      '目前是一名前端工程师,主要负责前端项目的架构， 日常bug修复， 代码review, 以及部分项目的性能优化',
  },
  {
    title: '掌握技能',
    content: '主流框架(react, vue, jq等), 小程序, prosemirror,',
  },
  {
    title: '详情',
    content: <IntroductionDetail />,
  },
]
export const Introduction = withRouter(() => {
  return (
    <div className={styles.Introduction}>
      <div className={styles.IntroductionTitle}>关于我</div>
      {info.map((i) => (
        <div className={styles.IntroductionList} key={i.title}>
          {i.title}&nbsp;{i.content}
        </div>
      ))}
    </div>
  )
})
