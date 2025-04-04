import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../component/common/Button'

import Logo from '../../assets/image/Logo.png'
import LogoFace from '../../assets/image/LogoFace.png'
import HomeTop from '../../assets/image/home_top.png'
import HomeBottom from '../../assets/image/home_bottom.png'
import HomeHotItems from '../../assets/image/home_hot_items.png'
import HomeSearch from '../../assets/image/home_search.png'
import HomeRegister from '../../assets/image/home_register.png'
import Facebook from '../../assets/svg/facebook.svg'
import Instagram from '../../assets/svg/instagram.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Youtube from '../../assets/svg/youtube.svg'

import * as S from './Home.style'

function Home() {
  const [buttonStyle, setButtonStyle] = useState({
    width: '364',
    paddingWidth: '43',
  })

  const handleResize = () => {
    if (window.innerWidth < 375) {
      setButtonStyle({ width: '258', paddingWidth: '71' })
    } else {
      setButtonStyle({ width: '364', paddingWidth: '124' })
    }
  }

  // placeholder useEffect 적용
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <S.HeaderTop>
        <S.HeaderNav>
          <S.HeaderLogo>
            <Link to="/">
              <S.HeaderLogoFace src={LogoFace} alt="판다마켓 로고 사진" />
            </Link>
            <Link to="/">
              <S.HeaderLogoName src={Logo} alt="판다마켓 로고 사진" />
            </Link>
          </S.HeaderLogo>
          <Button
            as={Link}
            to="/login"
            variant="primary"
            size={48.5}
            paddingHeight={11}
            paddingWidth={43}
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
            <Button
              as={Link}
              to="/items"
              variant="primary"
              paddingHeight={12}
              paddingWidth={buttonStyle.paddingWidth}
            >
              구경하러 가기
            </Button>
          </S.HeaderMainTitle>
          <img src={HomeTop} alt="판다마켓 백그라운드사진" />
        </S.HeaderMainContainer>
      </S.HeaderMain>
      <S.MainBasic>
        <S.MainTheme>
          <S.MainPopularSellImage>
            <img src={HomeHotItems} alt="판다마켓 인기 상품 사진" />
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
                구매하고 싶은 물품은 검색해서&nbsp;쉽게 찾아보세요
              </S.MainPopularSellFontBottom>
            </div>
          </S.MainThemeBasicMiddle>
          <S.MainSearchImage>
            <img src={HomeSearch} alt="판다마켓 상품 검색 사진" />
          </S.MainSearchImage>
        </S.MainThemeCenter>
        <S.MainTheme>
          <S.MainPopularSellImage>
            <img src={HomeRegister} alt="판다마켓 인기 상품 등록" />
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
                어떤 물건이든 판매하고 싶은&nbsp; 상품을 쉽게 등록하세요
              </S.MainPopularSellFontBottom>
            </div>
          </S.MainThemeBasic>
        </S.MainTheme>
      </S.MainBasic>
      <S.FooterMainContainer>
        <S.FooterEmpty></S.FooterEmpty>
        <S.FooterContainer>
          <S.FooterBackground>
            <div>
              <S.FooterFont>믿을 수 있는 판다마켓 중고 거래</S.FooterFont>
            </div>
            <S.FooterImage>
              <img src={HomeBottom} alt="판다마켓 백그라운드사진" />
            </S.FooterImage>
          </S.FooterBackground>
        </S.FooterContainer>
        <S.FooterNav>
          <S.FooterNavMain>
            <S.Codeit>©codeit - 2024</S.Codeit>
            <S.PrivacyFaq>
              <Link to="/privacy">
                <S.Privacy>Privacy Policy</S.Privacy>
              </Link>
              <Link to="/faq">
                <S.Faq>FAQ</S.Faq>
              </Link>
            </S.PrivacyFaq>
            <S.Social>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={Facebook} alt="페이스북 로고 사진" />
              </a>
              <a href="https://x.com/" target="_blank">
                <img src={Twitter} alt="트위터 로고 사진" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={Youtube} alt="유튜브 로고 사진" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={Instagram} alt="인스타그램 로고 사진" />
              </a>
            </S.Social>
          </S.FooterNavMain>
        </S.FooterNav>
      </S.FooterMainContainer>
    </>
  )
}

export default Home
