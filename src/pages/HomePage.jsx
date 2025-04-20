import React from 'react';
import ImgHome1 from 'assets/Img_home_01.png';
import ImgHome2 from 'assets/Img_home_02.png';
import ImgHome3 from 'assets/Img_home_03.png';
import Button from 'components/ui/Button';
import { MainSelection } from 'components/mainSelection';

function HomePage() {

  return (
    <>
        <MainSelection className="main_title" boxName="text_box">
          <h1 className='desktop:text-4xl mobile:text-3xl'>
            일상의 모든 물건을<br />거래해 보세요
          </h1>
          <Button link="ItemsBox" variant="roundedXL">구경하러 가기</Button>
        </MainSelection>
      <MainSelection className="selection" boxName="box">
          <img src={ImgHome1} alt='Hot item' />
          <div>
            <span className='desktop:text-lg mobile:text-base'>Hot item</span>
            <h2 className='desktop:text-4xl tablet:text-3xl mobile:text-2xl'>인기 상품을<br/>확인해 보세요</h2>
            <p className='desktop:text-2xl'>가장 HOT한 중고거래 물품을<br/>판다 마켓에서 확인해 보세요</p>
          </div>
      </MainSelection>
      <MainSelection className="selection" boxName="box">
          <img src={ImgHome2} alt='Search' />
          <div>
            <span className='desktop:text-lg mobile:text-base'>Search</span>
            <h2 className='desktop:text-4xl tablet:text-3xl mobile:text-2xl'>구매를 원하는<br/>상품을 검색하세요</h2>
            <p className='desktop:text-2xl'>구매하고 싶은 물품은 검색해서<br/>쉽게 찾아보세요</p>
          </div>
      </MainSelection>
      <MainSelection className="selection" boxName="box">
        <img src={ImgHome3} alt='Register' />
        <div>
          <span className='desktop:text-lg mobile:text-base'>Search</span>
          <h2 className='desktop:text-4xl tablet:text-3xl mobile:text-2xl'>판매를 원하는<br/>상품을 등록하세요</h2>
          <p className='desktop:text-2xl'>어떤 물건이든 판매하고 싶은 상품을<br/>쉽게 등록하세요</p>
        </div>
      </MainSelection>
      <MainSelection className="main_title" boxName="text_box">
        <h3 className='desktop:text-4xl mobile:text-3xl'>
          믿을 수 있는<br/>
          판다마켓 중고 거래
        </h3>
      </MainSelection>
    </>
  );
}

export default HomePage;
