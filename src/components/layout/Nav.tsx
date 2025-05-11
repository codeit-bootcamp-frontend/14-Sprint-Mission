'use client';

import React from 'react';
import Container from './Container';
import Button from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link'; 
import { useAuth } from '@/contexts/AuthContext';

const logoImg1 = '/assets/logo_01.svg';
const logoImg2 = '/assets/logo_03.svg';

function Nav() {
  const { user, logout } = useAuth();

  console.log('Nav user:', user);
  return (
    <div className='sticky w-full top-0 z-[999] bg-white shadow-soft-xl'>
      <Container className='flex justify-between items-center py-3'>
        <div className='relative flex items-center'>
          <Link href="/" className='gap-2 flex items-center'>
            <span className='relative inline-flex h-[40px] mobile:hidden'>
              <Image src={logoImg1} width={110} height={110} className="w-full h-auto" priority alt="로고이미지" />
            </span>
            <span className='relative inline-flex h-[35px]'>
              <Image src={logoImg2} width={266} height={90}  className="w-full h-auto" priority alt="판다마켓" />
            </span>
          </Link>
        </div>
        {user ? (
          <Button onClick={logout} variant="roundedS">
            로그아웃
          </Button>
        ) : (
          <Button link="/login" variant="roundedS">
            로그인
          </Button>
        )}
      </Container>
    </div>
  );
}

export default Nav;
