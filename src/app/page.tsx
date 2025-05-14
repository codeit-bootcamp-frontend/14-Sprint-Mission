'use client'

import Image from 'next/image'
import Link from 'next/link'

import * as S from './page.style'
import Button from './common/Button'

import Logo from '../../public/assets/image/Logo.png'
import LogoFace from '../../public/assets/image/LogoFace.png'
import HomeTop from '../../public/assets/image/home_top.png'
import HomeBottom from '../../public/assets/image/home_bottom.png'
import HomeHotItems from '../../public/assets/image/home_hot_items.png'
import HomeSearch from '../../public/assets/image/home_search.png'
import HomeRegister from '../../public/assets/image/home_register.png'
import Facebook from '../../public/assets/svg/facebook.svg'
import Instagram from '../../public/assets/svg/instagram.svg'
import Twitter from '../../public/assets/svg/twitter.svg'
import Youtube from '../../public/assets/svg/youtube.svg'

function Home() {
  return (
    <>
      <S.HeaderTop>
        <S.HeaderNav>
          <S.HeaderLogo>
            <Link href="/">
              <S.PandaLogo>
                <Image
                  src={LogoFace}
                  alt="판다마켓 로고 사진"
                  width={40}
                  height={40}
                />
              </S.PandaLogo>
            </Link>
            <Link href="/">
              <S.PandaLogoName>
                <Image
                  src={Logo}
                  alt="판다마켓 로고 사진"
                  width={103}
                  height={35}
                />
              </S.PandaLogoName>
            </Link>
          </S.HeaderLogo>

          <Button
            to="/login"
            as={Link}
            size={48.5}
            style={{ padding: '1.1rem 4.3rem' }}
          >
            로그인
          </Button>
        </S.HeaderNav>
      </S.HeaderTop>
      <S.HeaderMain>
        <S.HeaderMainContainer>
          <S.HeaderMainTitle>
            <S.HeaderTitleFont>
              일상의 모든 물건을 거래해 보세요
            </S.HeaderTitleFont>

            <S.ItemsButton to="/items" size={56}>
              구경하러 가기
            </S.ItemsButton>
          </S.HeaderMainTitle>
          <S.PandaBackground>
            <Image src={HomeTop} alt="판다마켓 백그라운드사진" fill />
          </S.PandaBackground>
        </S.HeaderMainContainer>
      </S.HeaderMain>
      <S.MainBasic>
        <S.MainTheme>
          <S.MainPopularSellImage>
            <Image src={HomeHotItems} alt="판다마켓 인기 상품 사진" />
          </S.MainPopularSellImage>
          <S.MainThemeBasic>
            <div>
              <S.MainPopularSellFontTop>Hot item</S.MainPopularSellFontTop>
            </div>
            <div>
              <S.MainPopularSellFontMiddle>
                인기 상품을 확인해 보세요
              </S.MainPopularSellFontMiddle>
            </div>
            <div>
              <S.MainPopularSellFontBottom>
                가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
              </S.MainPopularSellFontBottom>
            </div>
          </S.MainThemeBasic>
        </S.MainTheme>
        <S.MainThemeCenter>
          <S.MainThemeBasicMiddle>
            <div>
              <S.MainPopularSellFontTop>Search</S.MainPopularSellFontTop>
            </div>
            <div>
              <S.MainPopularSellFontMiddle>
                구매를 원하는 상품을 검색하세요
              </S.MainPopularSellFontMiddle>
            </div>
            <div>
              <S.MainPopularSellFontBottom>
                구매하고 싶은 물품은 검색해서 쉽게 찾아보세요
              </S.MainPopularSellFontBottom>
            </div>
          </S.MainThemeBasicMiddle>
          <S.MainSearchImage>
            <Image src={HomeSearch} alt="판다마켓 상품 검색 사진" />
          </S.MainSearchImage>
        </S.MainThemeCenter>
        <S.MainTheme>
          <S.MainPopularSellImage>
            <Image src={HomeRegister} alt="판다마켓 인기 상품 등록" />
          </S.MainPopularSellImage>
          <S.MainThemeBasic>
            <div>
              <S.MainPopularSellFontTop>Register</S.MainPopularSellFontTop>
            </div>
            <div>
              <S.MainPopularSellFontMiddle>
                판매를 원하는 상품을 등록하세요
              </S.MainPopularSellFontMiddle>
            </div>
            <div>
              <S.MainPopularSellFontBottom>
                어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
              </S.MainPopularSellFontBottom>
            </div>
          </S.MainThemeBasic>
        </S.MainTheme>
      </S.MainBasic>
      <S.FooterMainContainer>
        <S.FooterEmpty></S.FooterEmpty>
        <S.FooterContainer>
          <S.FooterBackground>
            <S.FooterFont>믿을 수 있는 판다마켓 중고 거래</S.FooterFont>
            <S.FooterImage>
              <Image src={HomeBottom} alt="판다마켓 백그라운드사진" />
            </S.FooterImage>
          </S.FooterBackground>
        </S.FooterContainer>
        <S.FooterNav>
          <S.FooterNavMain>
            <S.Codeit>©codeit - 2024</S.Codeit>
            <S.PrivacyFaq>
              <Link href="/privacy">
                <S.Privacy>Privacy Policy</S.Privacy>
              </Link>
              <Link href="/faq">
                <S.Faq>FAQ</S.Faq>
              </Link>
            </S.PrivacyFaq>
            <S.Social>
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
            </S.Social>
          </S.FooterNavMain>
        </S.FooterNav>
      </S.FooterMainContainer>
    </>
  )
}

export default Home
