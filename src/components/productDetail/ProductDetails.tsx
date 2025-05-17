'use client';

import React from 'react';
import ProductOverview from './ProductOverview';
import ProductDescription from './ProductDescription';
import Container from 'components/layout/Container';
import CommentSection from './comment/CommentSection';
import { useProductsDetails } from '@/hooks/useProductsDetail';
import { useParams } from 'next/navigation';


function ProductDetails( ) {
  
  const { id } = useParams(); // URL에서 [id] 추출
  const productId = Number(id);

  const { data } = useProductsDetails(productId);

  return (
    <div className='flex flex-col mt-8'>
      <Container className='flex flex-row w-full gap-6 pb-[40px] mb-[40px] border-b border-b-[var(--Cool_Gray_200)] mobile:flex-col'>
        { data && (
          <>
            <ProductOverview img={data?.images}/>
            <ProductDescription {...data} />
          </>
        )}
      </Container>
      <Container>
        <CommentSection productId={productId} />
      </Container>
    </div>
  );
}

export default ProductDetails;