import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Search } from '../../../assets/components/search.svg'
import { ReactComponent as Logo } from '../../../assets/logo/Logo.svg'
import { useAppDispatch } from '../../../redux/app/hooks'
import { coreStates } from '../../../redux/app/reduxModels'
import * as coreRedux from '../../../redux/coreRedux'
import * as mail from '../../../utils/mail'
import { BodyOut } from './bodyOut'
import styles from './components.module.scss'
import SearchBar from './searchBar'
import SizedBox from './sizedBox'
import TopNavigationMenu from './topNavigationMenu'

const TopNavigation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  return <>
    <div className={styles.navigationWrapper}>
      <div className={styles.navigation}>
        <Link to={'/'}>
          <span>
            <Logo className={styles.logo} />
          </span>
        </Link>
        <div>
          <TopNavigationMenu
            link='/volunteers'
            content={'모아보기'}
          />
          <SizedBox width='4.375vw' />
          <TopNavigationMenu
            link='/serviceStory'
            content={'스토리'}
          />
          <SizedBox width='4.375vw' />
          <TopNavigationMenu
            link={mail.inquiryLink()}
            content={'문의하기'}
          />
        </div>
        <span onClick={() => {
          setIsVisible(true)
          if (location.pathname !== '/volunteers') navigate('/volunteers', { replace: true, })
        }} className={styles.search}><Search /></span>
      </div>
      {isVisible ? <>
        <div className={styles.navigationSearchBar}>
          <SearchBar
            onChange={(keyword: string) => {
              setIsVisible(false)
              dispatch(coreRedux.changeState({ key: coreStates.keyword, state: keyword }))
            }}
            cancel={() => setIsVisible(false)}
          />
        </div>
        <BodyOut setIsVisible={setIsVisible} color={'rgba(23, 23, 26, 0.50)'} />
      </> : ''
      }
    </div >
    <TopNavigationSizedBox />
  </>
}

const TopNavigationSizedBox = () => {
  return <SizedBox className={styles.topNavigationSizedBox} />
}

export default TopNavigation