import { Link } from 'react-router-dom'
import styles from './components.module.scss'
import SizedBox from './sizedBox'
import * as mail from '../../../utils/mail'

const Footer = () => {

  return <div className={styles.footerWrapper}>
    <div className={styles.footer}>
      <span className={styles.title}>© 2023 유반</span>
      <div className={styles.contents}>
        유반은 유기견에서부터 반려견까지의 모든 여정을 함께라는 뜻으로 모든 강아지들이 행복한 사회를 추구해요.
      </div>
      <SizedBox height='12px' />
      <div className={styles.links}>
        <Link to={'https://star-concrete-ce7.notion.site/e857f16ba9a94f3595114492827a0774?pvs=4'} target='_blank'>서비스 이용약관</Link>
        <SizedBox width='12px' />
        <Link to={mail.inquiryLink()}>이메일로 문의하기</Link>
      </div>
    </div>

  </div>
}

export default Footer