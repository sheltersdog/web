import Footer from "./components/footer"
import PageHeader from "./components/pageHeader"
import SearchBar from "./components/searchBar"
import SearchInput from "./components/searchInput"
import { MultiSelectButton, SingleSelectButton } from "./components/selectButton"
import SheltersdogButton from "./components/sheltersdogButton"
import SheltersDogTag from "./components/sheltersdogTag"
import TopNavigation from "./components/topNavigation"
import TopNavigationMenu from "./components/topNavigationMenu"
import VolunteerCard from "./components/volunteerCard"

const ComponentView = () => {
  return <div style={{ backgroundColor: '#f0f0f0' }}>
    <TopNavigation />
    <TopNavigation isAdmin />
    <PageHeader
      title="모아보기"
      content="유기견 봉사를 한눈에 모아볼 수 있어요."
    />&nbsp;&nbsp;
    <VolunteerCard
      onClick={() => { }}
      entity={{
        term: '단기',
        types: ['홍보 봉사', '놀이 봉사', '청소 봉사', '목욕 봉사'],
        location: '경기도',
        duration: '23년 7월 1일 ~ 23년 7월 31일',
        day: '월요일, 수요일, 금요일',
        time: '오후 1:30 ~ 4:30',
        content: '아이들과 만나서 산책과 함께 성향을 알아보고, 사진을 찍어 블로그에 아이들 프로필을 올려주세요.',
        shelter: {
          name: '경기도 반려동물 입양센터'
        }
      }}
    />&nbsp;&nbsp;
    <SearchBar
      onChange={(e: any) => { }}
      cancel={(e: any) => { }}
    />&nbsp;&nbsp;
    <SearchInput
      onChange={(e: any) => { }}
      placeHolder='어떤 봉사를 찾으시나요?' />&nbsp;&nbsp;
    <TopNavigationMenu
      link='/volunteers'
      content={'네비게이션'} />&nbsp;&nbsp;
    <TopNavigationMenu
      link='/serviceStory'
      content={'네비게이션'} isActive
    />&nbsp;&nbsp;
    <SheltersDogTag onClick={(e: any) => { }} content={'단기'} isActive />&nbsp;&nbsp;
    <SheltersDogTag onClick={(e: any) => { }} content={'홍보 봉사'} />&nbsp;&nbsp;
    <SingleSelectButton
      onChange={(value: string) => { console.log(value) }}
      list={['지역', '지역1지역1지역1', '지역2', '지역3', '지역4', '지역5']}
      selectedIndex={0}
    />&nbsp;&nbsp;
    <MultiSelectButton
      title={'필터'}
      list={['필터1', '필터2', '필터3', '필터4', '필터5', '필터6']}
      onChange={() => { }}
      selectedIndexes={[0, 1]} />&nbsp;&nbsp;
    <SheltersdogButton />&nbsp;&nbsp;
    <SheltersdogButton
      status={'INACTIVE'}
      size={'BIG'}
    />&nbsp;&nbsp;
    <SheltersdogButton
      status={'DISEMPHASIS'}
      size={'BIG'}
    />&nbsp;&nbsp;
    <SheltersdogButton size={'SMALL'} />&nbsp;&nbsp;
    <SheltersdogButton
      status={'INACTIVE'}
      size={'SMALL'}
    />&nbsp;&nbsp;
    <SheltersdogButton
      status={'DISEMPHASIS'}
      size={'SMALL'}
    />&nbsp;&nbsp;

    <Footer />
  </div>
}

export default ComponentView