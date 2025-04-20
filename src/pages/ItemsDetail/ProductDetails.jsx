import React from 'react';
import ProductOverview from './ProductOverview';
import ProductDescription from './ProductDescription';
import styles from './ProductDetails.module.css';
import Container from 'components/layout/Container';
import CommentSection from './comment/CommentSection';

function ProductDetails({detailData, setDeleteComment, setShowConfirm,  confirmDelete}) {
  
  return (
    <div className='flex flex-col mt-8'>
      <Container className='flex flex-row w-full gap-6 pb-[40px] mb-[40px] border-b border-b-[var(--Cool_Gray_200)] mobile:flex-col'>
        <ProductOverview img={detailData.images}/>
        <ProductDescription detailData={detailData} />
      </Container>
      <Container>
        <CommentSection  setDeleteComment={setDeleteComment} setShowConfirm={setShowConfirm} confirmDelete={confirmDelete}/>
      </Container>
    </div>
  );
}

export default ProductDetails;