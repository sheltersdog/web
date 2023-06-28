import Footer from "../app/components/footer"
import PageHeader from "../app/components/pageHeader"
import SizedBox from "../app/components/sizedBox"
import TopNavigation, { TopNavigationSizedBox } from "../app/components/topNavigation"
import styles from './serviceIntroduction.module.scss'

const ServiceIntroduction = () => {
  return <>
    <TopNavigation />
    <TopNavigationSizedBox />
    <div className={styles.body}>
      <div className={styles.serviceIntroduction}>
        <PageHeader
          title="스토리"
          content="유반의 스토리를 볼 수 있어요"
        />
        <SizedBox height="76px" />
        <div className={styles.contents}>
          <span className={styles.title}>유반이란?</span>
          <SizedBox height="6px" />
          <span className={styles.content}>
            유반은 ‘유기견에서 반려견까지’의 줄임말로 유기견에서 반려견이되는 모든 여정을 함께한다는 의미를 가지고 있어요.
            유반은 이 땅에 모든 강아지들이 행복한 사회를 꿈꾸는 작은 스타트업이에요.
          </span>
          <SizedBox height="46px" />
          <span className={styles.title}>유기견 봉사, 좀 더 가까이</span><br />
          <SizedBox height="6px" />
          <span className={styles.content}>
            유기견 봉사는 하고 싶은데 어디서 어떻게 시작해야할지 몰랐던 경험 있으신가요?<br />
            아마 그랬기 때문에 유반을 찾아오셨을거라 생각해요. <br /><br />
            우리가 유기견 봉사를 접하기 어려운 이유는 현재 유기견 봉사활동은 비공식적인 채널에서 주로 모집되고 있고, 또는 모임이나 단체 활동을 통해서만 참여할 수 있는 구조이기 때문인데요. 이는 보호소의 인력부족 문제로 인해 직접 모집하고 관리하기 힘든 현실과 보호소의 위치가 노출되면 발생되는 또 다른 문제등의 이유로 인해 나타난 현상이라고 볼 수 있어요. <br /><br />
            이러한 어려움에도 불구하고 전국의 보호소와 쉼터는 한 아이라도 더 케어하기 위해 근무 시간을 초과하며 또는 홍보 봉사자를 모집해서라도 각종 커뮤니티 또는 SNS를 통해 봉사자를 모집하고 있어요. 하지만 이 또한 채널 분산으로 인해 봉사를 원하는 사람들에게 널리 닿지 않는 게 현실이에요. <br /><br />
            유반은 이러한 현실의 문제점을 해결하고자 봉사자가 필요한 보호소들의 노력이, 봉사를 찾고있는 사람들에게 더욱 까가이 다가갈 수 있도록 전국의 다양한 봉사들을 유반만의 방식으로 보여주고 보호소의 게시물과 연결해주고 있어요. <br /><br />
          </span>
          <SizedBox height="46px" />
          <span className={styles.title}>유반과 함께 만드는 미래</span><br />
          <SizedBox height="6px" />
          <span className={styles.content}>
            {
              `작년 9월부터 가까운 쉼터에서 평일 두 타임 산책 봉사를 하며 겪었던 개인의 인식 변화가, 유반을 통해 유기견 봉사를 접하는 모든 사람들로 이어져, 개인의 변화가 결국 유기견 아이들과 보호소와 쉼터의 환경을 바꾸고, 더 나아가서 유기견 문화를 바꿀 수 있다고 믿고있어요. 유기견 문화가 바뀌면 유기견에서 반려견까지 결국 모든 강아지들이 행복한 사회를 만들 수 있겠죠?
                유반과 함께 작지만 크고 의미있는 것부터 하나하나 만들어가요 :)`
            }
          </span>
        </div>

      </div>


    </div>
    <Footer />
  </>
}

export default ServiceIntroduction