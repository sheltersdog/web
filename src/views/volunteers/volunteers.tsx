import FilterButton from "../app/components/filterButton"
import Footer from "../app/components/footer"
import PageHeader from "../app/components/pageHeader"
import SizedBox from "../app/components/sizedBox"
import TopNavigation from "../app/components/topNavigation"
import VolunteerCard from "../app/components/volunteerCard"
import styles from './volunteers.module.scss'

const Volunteers = () => {
  return <>
    <TopNavigation />
    <div className={styles.body}>
      <div className={styles.volunteers}>
        <PageHeader
          title="모아보기"
          content="유기견 봉사를 한눈에 모아볼 수 있어요"
        />
        <SizedBox height="76px" />
        <div className={styles.filterButtons}>
          <FilterButton
            list={[
              "지역지역지역지역지역지역", "지역", "지역", "지역",
              "지역", "지역", "지역지역지역지역지역지역", "지역",
              "지역", "지역", "지역", "지역",
              "지역", "지역", "지역", "지역",
              "지역", "지역", "지역", "지역",
              "지역", "지역", "지역", "지역",
              "지역", "지역", "지역", "지역",
              "지역", "지역", "지역", "지역",
            ]}
            onChange={(content: string) => { }}
          />
          <FilterButton
            list={["동네"]}
            onChange={(content: string) => { }}
          />
          <FilterButton
            list={["기간"]}
            onChange={(content: string) => { }}
          />
          <FilterButton
            list={["카테고리"]}
            onChange={(content: string) => { }}
          />
        </div>
        <SizedBox height="32px" />
        <div>
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
          <SizedBox height="24px" />
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
          <SizedBox height="24px" />
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
          <SizedBox height="24px" />
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
          <SizedBox height="24px" />
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
        </div>

      </div>


    </div>
    <Footer />
  </>
}

export default Volunteers