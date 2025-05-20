import styled from 'styled-components'
import { theme } from './styles/theme'
import { textStyle } from './styles/textStyle'
import Button from './common/Button'

export const HeaderTop = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #ffffff;
`

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.95rem 0px;
  margin: 0 40rem;
  @media (max-width: 1023px) {
    margin: 0 2.4rem;
  }
  @media (max-width: 743px) {
    margin: 0 1rem;
  }
`
export const PandaLogo = styled.div`
  display: flex;
  @media (max-width: 743px) {
    display: none;
  }
`
export const PandaLogoName = styled.div`
  display: flex;
`
export const HeaderLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.85rem;
`

export const PandaBackground = styled.div`
  width: 74.6rem;
  height: 30.4rem;
  position: relative;
  @media (max-width: 743px) {
    width: 100%;
    height: 20rem;
  }
`

export const HeaderLogoFace = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  display: flex;
  @media (max-width: 743px) {
    width: 0;
  }
`

export const HeaderLogoName = styled.img`
  width: 6.44rem;
  height: 2.19rem;
  display: flex;
`

export const HeaderLogin = styled.a`
  width: 10.16rem;
  height: 3rem;
  background-color: #3692ff;
  border-radius: 8px;
  ${(props) => textStyle(16, 600)(props)}
  color: ${theme.colors.SecondaryGray[50]};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    width: 9.73rem;
  }
  @media (max-width: 743px) {
    width: 9.73rem;
  }
`

export const HeaderMain = styled.div`
  width: 100%;
  background-color: #cfe5ff;
`

export const HeaderMainContainer = styled.div`
  width: max-content;
  display: flex;
  padding: 20rem 0px 0px 0px;
  margin: 0 auto;
  @media (max-width: 1023px) {
    width: 100%;
    height: 771px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
  @media (max-width: 743px) {
    width: 100%;
    height: auto;
    img {
      width: 100%;
    }
  }
`

export const HeaderMainTitle = styled.div`
  width: auto;
  margin: auto 0;
  @media (max-width: 1023px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 743px) {
    width: 24rem;
    margin-bottom: 13.2rem;
  }
`

export const HeaderTitleFont = styled.h1`
  width: 32.5rem;
  ${(props) => textStyle(40, 700)(props)}
  margin: 0 6.2rem 3.2rem 0;
  color: ${theme.colors.SecondaryGray[700]};
  @media (max-width: 1023px) {
    margin-top: 84px;
    width: auto;
    margin: 84px auto 24px;
  }
  @media (max-width: 743px) {
    ${(props) => textStyle(32, 700)(props)}
    width: 26rem;
    margin-bottom: 1.8rem;
    text-align: center;
  }
`

export const ItemsButton = styled(Button)`
  padding: 1.2rem 12.4rem;
  width: max-content;
  @media (max-width: 768px) {
    padding: 1.1rem 7.1rem;
  }
`
export const HeaderItems = styled.a`
  width: 7.25rem;
  background-color: ${theme.colors.PrimaryBlue[100]};
  border-radius: 40px;
  ${(props) => textStyle(20, 600)(props)}
  color: ${theme.colors.SecondaryGray[50]};
  text-decoration: none;
  padding: 0.75rem 7.75rem;
  display: inline-block;
  @media (max-width: 743px) {
    padding: 0.5rem 4rem;
    margin-top: 1.13rem;
  }
`

/* 메인 */

export const MainBasic = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1023px) {
    margin: 2.4rem;
  }
  @media (max-width: 743px) {
    margin: 52px 16px 2.5rem 15px;
  }
`

export const MainTheme = styled.div`
  display: flex;
  background-color: #fcfcfc;
  margin: 13.8rem auto;
  @media (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
  }
`
// 지우셈
export const MainPopularSellImage = styled.div`
  @media (max-width: 1023px) {
    img {
      width: 100%;
      height: 52.5rem;
      border-radius: 1.4rem;
    }
  }
  @media (max-width: 743px) {
    height: 25.9rem;
    img {
      height: 100%;
    }
  }
`

export const MainThemeBasic = styled.div`
  width: 30.8rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fcfcfc;
  flex-direction: column;
  margin: auto 2.3rem auto 6.4rem;
  @media (max-width: 1023px) {
    width: 100%;
    margin: 0;
  }
  @media (max-width: 743px) {
    height: 134px;
    margin: 2.4rem auto 4rem 0;
  }
`

export const MainPopularSellFontTop = styled.p`
  margin: 0 0px 1.2rem 0;
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.PrimaryBlue[100]};
  @media (max-width: 1023px) {
    margin: 2.4rem auto 1.6rem;
  }
  @media (max-width: 743px) {
    margin: 0 auto 0.5rem 0rem;
    ${(props) => textStyle(16, 700)(props)}
  }
`

export const MainPopularSellFontMiddle = styled.h2`
  margin: 0 auto 2.4rem 0;
  ${(props) => textStyle(40, 700)(props)}
  color: ${theme.colors.SecondaryGray[700]};
  @media (max-width: 1023px) {
    ${(props) => textStyle(32, 700)(props)}
    width:100%;
  }
  @media (max-width: 743px) {
    ${(props) => textStyle(24, 700)(props)}
    margin-bottom: 1rem;
  }
`

export const MainPopularSellFontBottom = styled.p`
  ${(props) => textStyle(24, 500)(props)}
  color: ${theme.colors.SecondaryGray[700]};

  @media (max-width: 1023px) {
    ${(props) => textStyle(18, 500)(props)}
    width: 23.6rem;
    margin-bottom: 5.2rem;
  }
  @media (max-width: 743px) {
    margin: 0;
    ${(props) => textStyle(16, 500)(props)}
    width: 205px;
  }
`

export const MainThemeCenter = styled.div`
  display: flex;
  background-color: #fcfcfc;
  margin: 13.8rem auto;
  @media (max-width: 1023px) {
    width: 100%;
    flex-direction: column-reverse;
    margin: 0;
  }
  @media (max-width: 743px) {
    flex-wrap: wrap-reverse;
  }
`

export const MainThemeBasicMiddle = styled(MainThemeBasic)`
  align-items: flex-end;
  text-align: right;

  margin: auto 6.4rem auto 1.3rem;
  @media (max-width: 1023px) {
    margin: 0;
  }
  @media (max-width: 743px) {
    width: 330px;
    margin: 2.4rem auto 4rem auto;
  }
`

export const MainSearchImage = styled.picture`
  height: 44.4rem;
  @media (max-width: 1023px) {
    width: 100%;
    height: 100%;
    margin: 0;
    img {
      width: 100%;
      height: 52rem;
      border-radius: 1.4rem;
    }
  }
  @media (max-width: 743px) {
    height: 25.9rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`
/* footer */

export const FooterMainContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterEmpty = styled.div`
  width: 100%;
  height: 13.8rem;
  background-color: #fcfcfc;
  @media (max-width: 1023px) {
    width: 0;
    height: 0;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #cfe5ff;
`
export const FooterBackground = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14.3rem;
  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-top: 0;
    height: 100%;
  }
`

export const FooterFont = styled.div`
  ${(props) => textStyle(40, 700)(props)}
  width: 32.5rem;
  height: 17.2rem;
  margin-right: 6.5rem;
  @media (max-width: 1023px) {
    margin: 20.1rem auto 21.7rem;
    width: 32.5rem;
    text-align: center;
    line-height: 56px;
  }
  @media (max-width: 743px) {
    ${(props) => textStyle(32, 700)(props)}
    margin: 12rem auto 13rem;
    width: 254px;
    height: fit-content;
    text-align: center;
  }
`

export const FooterImage = styled.picture`
  width: 74.6rem;
  height: 39rem;
  @media (max-width: 743px) {
    width: 100%;
    height: 19.8rem;
    img {
      height: 19.8rem;
      width: 100%;
    }
  }
`

export const FooterNav = styled.div`
  width: 100%;
  background-color: ${theme.colors.SecondaryGray[900]};
  display: flex;
  justify-content: center;
`

export const FooterNavMain = styled.div`
  height: 2rem;
  width: 112rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.2rem 0 10.8rem 0;
  @media (max-width: 1023px) {
    width: 53.6rem;
    margin: 3.2rem auto 10.8rem auto;
  }
  @media (max-width: 743px) {
    margin: 2rem;
    display: grid;
    grid-template-areas:
      'hd hdt'
      'ct ctt';
    width: 100%;
    height: 98px;
  }
`

export const Codeit = styled.p`
  color: ${theme.colors.SecondaryGray[400]};
  @media (max-width: 1023px) {
    ${(props) => textStyle(16, 400)(props)}
  }
  @media (max-width: 743px) {
    grid-area: ct;
    line-height: 18.4px;
  }
`

export const PrivacyFaq = styled.div`
  display: flex;
  margin-right: 13px;
  @media (max-width: 743px) {
    grid-area: hd;
    align-items: center;
    justify-items: center;
    margin: 0;
    width: 12.32rem;
  }
`

export const Social = styled.div`
  width: 11.6rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  @image {
    width: 18px;
    height: 18px;
  }
`

export const Privacy = styled.div`
  margin: auto 2rem auto 0;
  color: ${theme.colors.SecondaryGray[200]};
  text-decoration: none;
  @media (max-width: 743px) {
    ${(props) => textStyle(16, 400)(props)}
    margin: 0 3rem 0 0;
    width: max-content;
  }
`

export const Faq = styled.div`
  color: ${theme.colors.SecondaryGray[200]};
  text-decoration: none;
  margin: auto 0;
  @media (max-width: 743px) {
    margin-right: 2rem;
  }
`
