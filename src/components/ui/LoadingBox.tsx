import React from 'react';
import styles from './LoadingBox.module.css';
import Container from '../layout/Container';


interface LoadingBoxProps {
  className?: string;
}

function LoadingBox({className}: LoadingBoxProps) {
  return (
    <Container className={className}>
      <div className='flex justify-center items-center h-full bg-[var(--Cool_Gray_100)] rounded-[8px]'> 페이지 로딩중입니다. </div>
    </Container> 
  );
}
export default LoadingBox;
