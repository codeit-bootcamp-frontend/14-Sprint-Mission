'use client';
import React, { Suspense } from 'react';
import Container from 'components/layout/Container';
import Title from 'components/ui/Title';
import { BestItems } from '@/components/Product/BestItems';
import { AllItems } from '@/components/Product/AllItems';


function ItemsBox() {

  return (
    <>
      <Suspense>
        <Container>
          <Title titleTag='h1' text='베스트 상품' />
        </Container>
        <BestItems /> 
        <AllItems /> 
      </Suspense>
    </>
  );
}

export default ItemsBox;