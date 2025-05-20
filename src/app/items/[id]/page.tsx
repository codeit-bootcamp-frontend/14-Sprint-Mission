'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import ProductDescription from '@/components/productDetail/ProductDescription';
import ProductOverview from '@/components/productDetail/ProductOverview';
import Container from '@/components/layout/Container';
import CommentSection from '@/components/productDetail/comment/CommentSection';
import { useProductsDetails } from '@/hooks/useItems';

function ItemsDetail() {
  
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

export default ItemsDetail;