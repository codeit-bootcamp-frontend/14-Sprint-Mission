'use client';

import React from 'react';
import styles from './Footer.module.css';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';

const facebookIcon = '/assets/ic_facebook.svg';
const twitterIcon = '/assets/ic_twitter.svg';
const instagramIcon = '/assets/ic_instagram.svg';
const youtubeIcon = '/assets/ic_youtube.svg';

function Footer() {
  return (
    <div className='bg-secondary-900'>
      <Container className='relative flex justify-between pt-[32px] pb-[108px]'>
        <div className='text-secondary-400  mobile:absolute mobile:top-[76px] '>
          <span>©codeit - 2024</span>
        </div>

        <div className='flex gap-8 text-secondary-400'>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        <div className='flex gap-3'>
          {/* 외부링크는 a로? */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <span><Image src={facebookIcon} width={20} height={20} alt="페이스북 바로가기" /></span>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <span><Image src={twitterIcon} width={20} height={20} alt="트위터 바로가기" /></span>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <span><Image src={youtubeIcon} width={20} height={20} alt="유튜브 바로가기" /></span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <span><Image src={instagramIcon} width={20} height={20} alt="인스타그램 바로가기" /></span>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
