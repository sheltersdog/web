import { useState } from 'react'
import { ReactComponent as Search } from '../../../assets/components/search.svg'
import { BodyOut } from './bodyOut'
import styles from './components.module.scss'
import SearchBar from './searchBar'
import SizedBox from './sizedBox'
import TopNavigationMenu from './topNavigationMenu'
import * as mail from '../../../utils/mail'

const TopNavigation = () => {
  const [isVisible, setIsVisible] = useState(false)


  return <>
    <div className={styles.navigation}>
      <span>LOGO</span>
      <SizedBox width='6.25vw' />
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
      <SizedBox width='8.6458vw' />
      <span onClick={() => setIsVisible(true)} className={styles.search}><Search /></span>
    </div>
    {isVisible ? <>
      <div className={styles.navigationSearchBar}>
        <SearchBar
          onChange={(keyword: string) => {
            console.log(keyword)
            setIsVisible(false)
          }}
          cancel={() => setIsVisible(false)}
        />
      </div>
      <BodyOut setIsVisible={setIsVisible} color={'rgba(23, 23, 26, 0.50)'} />
    </> : ''
    }
  </>
}

export const TopNavigationSizedBox = () => {
  return <SizedBox className={styles.topNavigationSizedBox} />
}

export default TopNavigation