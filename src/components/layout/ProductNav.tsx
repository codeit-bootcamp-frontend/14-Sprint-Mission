'use client';

import React from 'react';
import styles from './ProductNav.module.css';
import Image from 'next/image';
import Container from './Container';
import Button from '../ui/Button';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { logoImg1, logoImg2 } from '@/lib/imageAssets';
import ConfirmModal from '../ui/ConfirmModal';
import { useConfirmModal, useModal } from '@/hooks/useModal';

function ProductNav() {
  const segments = useSelectedLayoutSegments();
  const isItems = segments[0] === 'items' ;
  const isBoards = segments[0] === 'boards';
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    openConfirmModal('로그아웃 되었습니다.');
  }; 
  

  return (
    <div className='sticky w-full top-0 z-[999] bg-white shadow-soft-xl'>
      <Container className='flex justify-between items-center py-3 max-w-[1570px]'>
        <div className='relative flex items-center'>
          <Link href="/" className='gap-2 flex items-center'>
            <span className='relative inline-flex h-[40px] mobile:hidden'>
              <Image src={logoImg1} width={110} height={110} className="w-full h-auto" priority alt="로고이미지" />
            </span>
            <span className='relative inline-flex h-[35px]'>
              <Image src={logoImg2} width={266} height={90}  className="w-full h-auto" priority alt="판다마켓" />
            </span>
          </Link>
          <div className='ml-12 flex gap-7 text-lg tablet:ml-8 mobile:ml-4 mobile:gap-2 mobile:text-base'>
            <Link href="/boards" className={isBoards ? 'text-primary-100 font-bold' : undefined}>자유게시판</Link>
            <Link href="/items" className={isItems ? 'text-primary-100 font-bold' : undefined}>중고마켓</Link>
          </div>
        </div>
        {user ? (
          <Button onClick={handleLogout} variant="roundedS">
            로그아웃
          </Button>
        ) : (
          <Button link="/login" variant="roundedS">
            로그인
          </Button>
        )}
      </Container>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </div>
  );
}

export default ProductNav;
