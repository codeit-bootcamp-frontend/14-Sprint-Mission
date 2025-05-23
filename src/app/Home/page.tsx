'use client'
import React from 'react'
import Link from 'next/link'

import styles from './home.module.scss'
import Button from '../../components/common/Button'

import Logo from '../../../public/assets/image/Logo.png'
import LogoFace from '../../../public/assets/image/LogoFace.png'
import HomeTop from '../../../public/assets/image/home_top.png'
import HomeBottom from '../../../public/assets/image/home_bottom.png'
import HomeHotItems from '../../../public/assets/image/home_hot_items.png'
import HomeSearch from '../../../public/assets/image/home_search.png'
import HomeRegister from '../../../public/assets/image/home_register.png'
import Facebook from '../../../public/assets/svg/facebook.svg'
import Instagram from '../../../public/assets/svg/instagram.svg'
import Twitter from '../../../public/assets/svg/twitter.svg'
import Youtube from '../../../public/ assets/svg/youtube.svg'
import Image from 'next/image'

function Home() {
  return (
    <>
      <header className={styles['header-top']}>
        <nav className={styles['header-nav']}>
          <div className={styles['header-logo']}>
            <Link href="/" prefetch={true}>
              <Image src={LogoFace} alt="판다마켓 로고 사진" />
            </Link>
            <Link href="/" prefetch={true}>
              <Image src={Logo} alt="판다마켓 로고 사진" />
            </Link>
          </div>
          <div className={styles['button-wrapper']}>
            <Button as={Link} to="/login" size={48.5}>
              로그인
            </Button>
          </div>
        </nav>
      </header>
      <main className={styles['header-main']}>
        <div className={styles['header-main-container']}>
          <div className={styles['header-main-title']}>
            <h1 className={styles['header-title-font']}>
              일상의 모든 물건을 거래해 보세요
            </h1>
            <div className={styles['button-wrapper']}>
              <Button as={Link} to="/items" size={56}>
                구경하러 가기
              </Button>
            </div>
          </div>
          <Image src={HomeTop} alt="판다마켓 백그라운드사진" />
        </div>
      </main>
      <div className={styles['main-basic']}>
        <div className={styles['main-theme']}>
          <div className={styles['main-popular-sell-image']}>
            <Image src={HomeHotItems} alt="판다마켓 인기 상품 사진" />
          </div>
          <div className={styles['main-theme-basic']}>
            <div>
              <div className={styles['main-popular-sell-font-top']}>
                Hot item
              </div>
            </div>
            <div>
              <div className={styles['main-popular-sell-font-middle']}>
                인기 상품을 확인해 보세요
              </div>
            </div>
            <div>
              <div className={styles['main-popular-sell-font-bottom']}>
                가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
              </div>
            </div>
          </div>
        </div>
        <div className={styles['main-theme-center']}>
          <div className={styles['main-theme-basic-middle']}>
            <div>
              <div className={styles['main-popular-sell-font-top']}>Search</div>
            </div>
            <div>
              <div className={styles['main-popular-sell-font-middle']}>
                구매를 원하는 상품을 검색하세요
              </div>
            </div>
            <div>
              <div className={styles['main-popular-sell-font-bottom']}>
                구매하고 싶은 물품은 검색해서&nbsp;쉽게 찾아보세요
              </div>
            </div>
          </div>
          <div className={styles['main-search-image']}>
            <Image src={HomeSearch} alt="판다마켓 상품 검색 사진" />
          </div>
        </div>
        <div className={styles['main-theme']}>
          <div className={styles['main-popular-sell-image']}>
            <Image src={HomeRegister} alt="판다마켓 인기 상품 등록" />
          </div>
          <div className={styles['main-theme-basic']}>
            <div>
              <div className={styles['main-popular-sell-font-top']}>
                Register
              </div>
            </div>
            <div>
              <div className={styles['main-popular-sell-font-middle']}>
                판매를 원하는 상품을 등록하세요
              </div>
            </div>
            <div>
              <div className={styles['main-popular-sell-font-bottom']}>
                어떤 물건이든 판매하고 싶은&nbsp; 상품을 쉽게 등록하세요
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer-main-container']}>
        <div className={styles['footer-empty']} />
        <div className={styles['footer-container']}>
          <div className={styles['footer-background']}>
            <div>
              <div className={styles['footer-font']}>
                믿을 수 있는 판다마켓 중고 거래
              </div>
            </div>
            <div className={styles['footer-image']}>
              <Image src={HomeBottom} alt="판다마켓 백그라운드사진" />
            </div>
          </div>
        </div>
        <div className={styles['footer-nav']}>
          <div className={styles['footer-nav-main']}>
            <div className={styles['codeit']}>©codeit - 2024</div>
            <div className={styles['privacyFaq']}>
              <Link href="/privacy" prefetch={true}>
                <div className={styles['privacy']}>Privacy Policy</div>
              </Link>
              <Link href="/faq" prefetch={true}>
                <div className={styles['faq']}>FAQ</div>
              </Link>
            </div>
            <div className={styles['social']}>
              <a href="https://www.facebook.com/" target="_blank">
                <Image src={Facebook} alt="페이스북 로고 사진" />
              </a>
              <a href="https://x.com/" target="_blank">
                <Image src={Twitter} alt="트위터 로고 사진" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <Image src={Youtube} alt="유튜브 로고 사진" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Image src={Instagram} alt="인스타그램 로고 사진" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
