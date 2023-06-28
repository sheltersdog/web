import SizedBox from "./sizedBox"
import styles from './components.module.scss'

const PageHeader = ({ title, content }: PageHeaderParam) => {
  return <div className={styles.pageHeader}>
    <span className={styles.title}>{title}</span>
    {
      content ? <>
        <SizedBox height="4px" />
        <span className={styles.content}>{content}</span>
      </> : ''
    }
  </div>
}

export default PageHeader

class PageHeaderParam {
  readonly title: string = '';
  readonly content?: string
}