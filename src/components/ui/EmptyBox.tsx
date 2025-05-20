import React from 'react';
import Container from '../layout/Container';
import Image from 'next/image';
import { emptyImg } from '@/lib/imageAssets';
import clsx from 'clsx';


interface EmptyBoxProps {
  context?: string;
  className?: string;
  imageName?: string;
  subText?: string;
}

function EmptyBox({context, subText, className , imageName = emptyImg }: EmptyBoxProps) {
  return (
    <Container className={clsx('mt-12 mb-20 text-center',className)}>
      <div className='flex flex-col justify-center items-center h-full  rounded-[8px]'> 
        <Image src={imageName} width={176} unoptimized height={176} className='mx-auto' alt='빈페이지' />
        <span className='text-center mx-auto text-secondary-400'>{context}<br/>{subText}</span>
      </div>
    </Container> 
  );
}
export default EmptyBox;
