import Button from '../components/Button';
import styles from './HomePage.module.css';
import maincomponents from '../components/mainSection';
import ImgHome1 from '../assets/Img_home_01.png';
import ImgHome2 from '../assets/Img_home_02.png';
import ImgHome3 from '../assets/Img_home_03.png';

const { MainSection, SectionChildren } = maincomponents;

function HomePage() {

  return (
    <>
      <MainSection className="main_title" boxName="text_box">
        <h1 className="font_1">
          일상의 모든 물건을<br />거래해 보세요
        </h1>
        <Button link="items" variant="roundedM">구경하러 가기</Button>
      </MainSection>
      <MainSection className="section" boxName="box">
        <SectionChildren 
          src={ImgHome1} 
          alt="Hot item"
          span="Hot item" 
          h2={['인기 상품을', '확인해 보세요']}
          p={['가장 HOT한 중고거래 물품을', '판다 마켓에서 확인해 보세요']}
        />
      </MainSection>
      <MainSection className="section" boxName="box">
        <SectionChildren 
          src={ImgHome2} 
          alt="Search"
          span="Search" 
          h2={['구매를 원하는', '상품을 검색하세요']}
          p={['구매하고 싶은 물품은 검색해서', '쉽게 찾아보세요']}
        />
      </MainSection>
      <MainSection className="section" boxName="box">
        <SectionChildren 
          src={ImgHome3} 
          alt="Register"
          span="Register" 
          h2={['판매를 원하는', '상품을 등록하세요']}
          p={['어떤 물건이든 판매하고 싶은 상품을', '쉽게 등록하세요']}
        />
      </MainSection>
      <MainSection className="main_title" boxName="text_box">
        <h2 className="font_1">
          믿을 수 있는<br/>
          판다마켓 중고 거래
        </h2>
      </MainSection>
    </>
  );
}

export default HomePage;
