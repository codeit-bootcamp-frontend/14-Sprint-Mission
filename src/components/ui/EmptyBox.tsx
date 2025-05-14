import React from 'react';
import Container from '../layout/Container';
import Image from 'next/image';
import { emptyImg } from '@/lib/imageAssets';
import clsx from 'clsx';


interface EmptyBoxProps {
  context?: string;
  className?: string;
}

function EmptyBox({context, className}: EmptyBoxProps) {
  return (
    <Container className={clsx('mt-12 mb-20 text-center',className)}>
      <div className='flex flex-col justify-center items-center h-full  rounded-[8px]'> 
        <Image src={emptyImg} width={176} height={176} className='mx-auto' alt='빈페이지' />
        <span className='text-center mx-auto text-cool-gray-400'>{context}</span>
      </div>
    </Container> 
  );
}
export default EmptyBox;
