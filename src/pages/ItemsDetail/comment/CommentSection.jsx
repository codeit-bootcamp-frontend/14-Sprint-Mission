import React, { useState } from 'react';
import styles from './CommentSection.module.css';
import Button from 'components/ui/Button';
import Icon from 'components/ui/Icon';
import emptyImg from 'assets/img/Img_inquiry_empty_2x.png';
import { useNavigate, useParams } from 'react-router-dom';
import useProductsComments from 'hooks/useProductsComments';
import CommentList from './CommentList';
import CommentForm from './CommentForm';



function CommentSection() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    loading,
    data,
    nextCursor
  } = useProductsComments(id);

  const handleGoBack = () => {
    navigate(-1); // ← 이전 페이지로 이동
  };

  return (
    <>
        <CommentForm prodId={id} />
        {data.length > 0 ? (
          <CommentList items={data} prodId={id} className='w-full'/>
        ):(
          <div className='mt-12 mb-20 text-center'>
            <img src={emptyImg} className='w-[174px] mx-auto' alt='빈페이지' />
            <span className='text-center mx-auto text-cool-gray-400'>아직 문의가 없어요</span>
          </div>
        )}
        <div className='flex justify-center align-middle w-full '>
          <Button onClick={handleGoBack} variant="roundedL">
            <span>목록으로 돌아가기</span>
            <Icon iconName='back'  alt='back icon'/>
          </Button>
        </div>

    </>
  );
}
export default CommentSection;
