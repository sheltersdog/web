import { Link } from 'react-router-dom'
import styles from './components.module.scss'
import SizedBox from './sizedBox'
import * as mail from '../../../utils/mail'

const Footer = () => {

  return <div className={styles.footerWrapper}>
    <div className={styles.footer}>
      <span className={styles.title}>© 2023 유반</span>
      <div className={styles.contents}>
        유반은 유기견에서부터 반려견까지라는 뜻으로 이 땅에 모든 강아지들이 행복한 사회를 꿈꾸는 작은 스타트업이에요.
      </div>
      <SizedBox height='12px' />
      <div className={styles.links}>
        <Link to={'/'}>서비스 이용약관</Link>
        <SizedBox width='12px' />
        <Link to={mail.inquiryLink()}>이메일로 문의하기</Link>
      </div>
    </div>

  </div>
}

export default Footer