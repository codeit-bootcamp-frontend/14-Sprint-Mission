'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { MotionSelection, VisualSelection } from '@/components/ui/mainSelection';
import { imgHome1, imgHome2, imgHome3, imgHome_bottom, imgHome_top } from '@/lib/imageAssets';

function HomePage() {

  return (
    <>  
      <VisualSelection>
        <div className="
          absolute bottom-0 right-0  w-[745px]
          tablet:right-[50%] tablet:translate-x-[50%] tablet:w-[100%]
          mobile:w-[110%] ">
          <Image src={imgHome_top} width={745} height={345} className="w-full h-auto" alt="인트로 이미지" />
        </div>
        <div  className="absolute left-0 top-[240px] tablet:left-[50%] tablet:top-[84px] tablet:-translate-x-[50%] tablet:text-center  mobile:top-[68px]">
          <h1 className="font-bold text-4xl mobile:text-3xl">
            일상의 모든 물건을&nbsp;<br className="tablet:hidden mobile:block"/>거래해 보세요
          </h1>
          <Button link="/items" variant="roundedXL" className="mt-8" heightError={false}>구경하러 가기</Button>
        </div>
      </VisualSelection>
      <MotionSelection>
        <div className="relative w-[579px] tablet:w-[100%] ">
          <Image src={imgHome1} width={579} height={444} className="w-full h-auto" alt='인기상품' />
        </div>
        <div className="tablet:w-[100%]">
          <span className='font-bold text-primary-100 mb-3 text-lg mobile:text-base'>Hot item</span>
          <h2 className='font-bold mb-6 text-3xl tablet:mb-4 mobile:text-2xl'>인기 상품을&nbsp;<br className="tablet:hidden"/>확인해 보세요</h2>
          <p className='desktop:text-xl'>가장 HOT한 중고거래 물품을<br/>판다 마켓에서 확인해 보세요</p>
        </div>
      </MotionSelection>
      <MotionSelection className="flex-row-reverse">
        <div className="relative w-[579px] tablet:w-[100%] ">
          <Image src={imgHome2} width={579} height={444} className="w-full h-auto" alt='상품검색' />
        </div>
        <div className="tablet:w-[100%] text-end">
          <span className='font-bold text-primary-100 mb-3 text-lg mobile:text-base'>Search</span>
          <h2 className='font-bold mb-6 text-3xl tablet:mb-4 mobile:text-2xl'>구매를 원하는<br className="tablet:hidden"/>&nbsp;상품을 검색하세요</h2>
          <p className='desktop:text-xl'>구매하고 싶은 물품은 검색해서<br/>쉽게 찾아보세요</p>
        </div>
      </MotionSelection>
      <MotionSelection>
        <div className="relative w-[579px] tablet:w-[100%] ">
          <Image src={imgHome3} width={579} height={444} className="w-full h-auto" alt='상품등록' />
        </div>
        <div className="tablet:w-[100%]">
          <span className='font-bold text-primary-100 mb-3 text-lg mobile:text-base'>Register</span>
          <h2 className='font-bold mb-6 text-3xl tablet:mb-4 mobile:text-2xl'>판매를 원하는&nbsp;<br className="tablet:hidden"/>상품을 등록하세요</h2>
          <p className='desktop:text-xl'>어떤 물건이든 판매하고 싶은 상품을<br/>쉽게 등록하세요</p>
        </div>
      </MotionSelection>
      <VisualSelection>
        <div className="
          absolute bottom-0 right-0 w-[745px]
          tablet:right-[50%] tablet:translate-x-[50%] tablet:w-[100%] ">
          <Image src={imgHome_bottom}  width={746} height={397} className="w-full h-auto" alt="아웃트로 이미지" />
        </div>
        <div className="
          absolute left-0 top-[240px] 
          tablet:left-[50%] tablet:top-[201px] tablet:-translate-x-[50%] tablet:text-center 
          mobile:top-[120px]">
          <h3 className="font-bold text-4xl mobile:text-3xl">
            믿을 수 있는<br/>
            판다마켓 중고 거래
          </h3>
        </div>
      </VisualSelection>
    </>
  );
}

export default HomePage;
