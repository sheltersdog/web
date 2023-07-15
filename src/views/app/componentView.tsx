import FilterButton from "./components/filterButton"
import Footer from "./components/footer"
import PageHeader from "./components/pageHeader"
import SearchBar from "./components/searchBar"
import SearchInput from "./components/searchInput"
import SheltersDogButton from "./components/sheltersdogButton"
import TopNavigation from "./components/topNavigation"
import TopNavigationMenu from "./components/topNavigationMenu"
import VolunteerCard from "./components/volunteerCard"

const ComponentView = () => {
  return <div style={{ backgroundColor: '#f0f0f0' }}>
    <TopNavigation />
    <PageHeader
      title="모아보기"
      content="유기견 봉사를 한눈에 모아볼 수 있어요."
    />
    <br /><br />
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
    />
    <br /><br />
    <SearchBar
      onChange={(e: any) => { }}
      cancel={(e: any) => { }}
    />
    <br /><br />
    <SearchInput
      onChange={(e: any) => { }}
      placeHolder='어떤 봉사를 찾으시나요?' />
    <br /><br />
    <TopNavigationMenu
      link='/volunteers'
      content={'네비게이션'} />
    <br /><br />
    <TopNavigationMenu
      link='/serviceStory'
      content={'네비게이션'} isActive
    />
    <br /><br />
    <SheltersDogButton onClick={(e: any) => { }} content={'단기'} isActive />
    <br /><br />
    <SheltersDogButton onClick={(e: any) => { }} content={'홍보 봉사'} />
    <br /><br />
    <FilterButton
      onChange={(value: string) => { console.log(value) }}
      list={['지역', '지역1지역1지역1', '지역2', '지역3', '지역4', '지역5']}
    />
    <br /><br />
    <Footer />
  </div>
}

export default ComponentView