import styles from './AboutMe.module.scss'
import { ProseMirrorNode } from './ProsemirrorNode'

export const AboutMe = () => {
  return (
    <div className={styles.AboutMe}>
      <h3>自我介绍</h3>
      <ProseMirrorNode>
        本人从事前端开发5年，具备完整的大型项目开发能力，从选型，项目架构，具体业务代码编写。熟悉前端主流框架(vue,
        react)并有多个项目的实际开发经历。熟练并规范的使用代码管理工具(git+svn),
        具备良好的团队协作精神，能利用自身技术能力提升团队整体研发效率,对前端技术有持续的热情,乐于探索。
      </ProseMirrorNode>
    </div>
  )
}
