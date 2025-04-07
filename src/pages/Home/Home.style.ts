import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

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
  padding: 0.6rem 0px;
  margin: 0 13rem;
  @media (max-width: 744px) {
    margin: 0 1.5rem;
  }
  @media (max-width: 375px) {
    margin: 0 1rem;
  }
`

export const HeaderLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  width: auto;
  height: auto;
  @media (max-width: 744px) {
    width: max-content;
  }
`

export const HeaderLogoFace = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  display: flex;
  @media (max-width: 375px) {
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
  @media (max-width: 744px) {
    width: 9.73rem;
  }
  @media (max-width: 375px) {
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
  padding: 12.5rem 0px 0px 0px;
  margin: 0 auto;
  @media (max-width: 744px) {
    width: 100%;
    height: 771px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
  @media (max-width: 375px) {
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
  @media (max-width: 744px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 375px) {
    width: 15rem;
    margin-bottom: 8.25rem;
  }
`

export const HeaderTitleFont = styled.h1`
  width: 20rem;
  ${(props) => textStyle(40, 700)(props)}
  margin: 0 4rem 2rem 0;
  color: ${theme.colors.SecondaryGray[700]};
  @media (max-width: 744px) {
    margin-top: 84px;
    width: auto;
    margin: 84px auto 24px;
  }
  @media (max-width: 375px) {
    margin-bottom: 1.125rem;
    text-align: center;
    ${(props) => textStyle(32, 700)(props)}
    width: 254px;
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
  @media (max-width: 375px) {
    padding: 0.5rem 4rem;
    margin-top: 1.13rem;
  }
`

/* 메인 */

export const MainBasic = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 744px) {
    margin: 24px;
  }
  @media (max-width: 375px) {
    margin: 52px 16px 2.5rem 15px;
    width: 344px;
  }
`

export const MainTheme = styled.div`
  display: flex;
  background-color: #fcfcfc;
  margin: 8.63rem auto;
  @media (max-width: 744px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
  }
`

export const MainPopularSellImage = styled.picture`
  width: auto;
  height: 27.75rem;

  @media (max-width: 744px) {
    img {
      width: 100%;
      height: 32.813rem;
    }
  }
  @media (max-width: 375px) {
    height: 16.187rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const MainThemeBasic = styled.div`
  width: 18.625rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fcfcfc;
  flex-direction: column;
  margin: auto 4rem;
  @media (max-width: 744px) {
    width: 100%;
    margin: 0;
  }
  @media (max-width: 375px) {
    height: 134px;
    margin: 1.5rem auto 2.69rem 0;
  }
`

export const MainPopularSellFontTop = styled.p`
  margin: 0 0px 0.75rem 0;
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.PrimaryBlue[100]};
  @media (max-width: 744px) {
    margin: 1.5rem auto 1rem;
  }
  @media (max-width: 375px) {
    margin: 0 auto 0.5rem 0rem;
    ${(props) => textStyle(16, 700)(props)}
  }
`

export const MainPopularSellFontMiddle = styled.h2`
  width: 306px;
  margin: 0 auto 1.5rem 0;
  ${(props) => textStyle(40, 700)(props)}
  color: ${theme.colors.SecondaryGray[700]};
  @media (max-width: 744px) {
    ${(props) => textStyle(32, 700)(props)}
    width:100%;
  }
  @media (max-width: 375px) {
    ${(props) => textStyle(24, 700)(props)}
    margin-bottom: 1rem;
    line-height: 2rem;
  }
`

export const MainPopularSellFontBottom = styled.p`
  ${(props) => textStyle(24, 500)(props)}
  color: ${theme.colors.SecondaryGray[700]};
  width: 100%;
  @media (max-width: 744px) {
    ${(props) => textStyle(18, 500)(props)}
    width:100%;
    width: 15.75rem;
    margin-bottom: 3.25rem;
  }
  @media (max-width: 375px) {
    margin: 0;
    ${(props) => textStyle(16, 500)(props)}
    width: 205px;
  }
`

export const MainThemeCenter = styled.div`
  display: flex;
  background-color: #fcfcfc;
  margin: 8.63rem auto;
  @media (max-width: 744px) {
    width: 100%;
    flex-direction: column-reverse;
    margin: 0;
  }
  @media (max-width: 375px) {
    flex-wrap: wrap-reverse;
  }
`

export const MainThemeBasicMiddle = styled(MainThemeBasic)`
  align-items: flex-end;
  text-align: right;
  @media (max-width: 375px) {
    width: 330px;
    margin-right: 0;
  }
`

export const MainSearchImage = styled.picture`
  width: 579px;
  height: 444px;
  @media (max-width: 744px) {
    width: 100%;
    height: 100%;
    margin: 0;
    img {
      width: 100%;
      height: 32.5rem;
    }
  }
  @media (max-width: 375px) {
    height: 16.187rem;
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
  height: 138px;
  background-color: #fcfcfc;
  @media (max-width: 744px) {
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
  @media (max-width: 744px) {
  }
  @media (max-width: 375px) {
    height: 33.75rem;
  }
`
export const FooterBackground = styled.div`
  display: flex;
  align-items: center;
  height: 397px;
  margin-top: 9rem;
  width: 69.375rem;
  @media (max-width: 744px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-top: 0;
    height: 100%;
  }
`

export const FooterFont = styled.h2`
  ${(props) => textStyle(40, 700)(props)}
  @media (max-width: 744px) {
    margin: 12.562rem auto 13.562rem;
    width: 20.438rem;
    text-align: center;
    line-height: 56px;
  }
  @media (max-width: 375px) {
    ${(props) => textStyle(32, 700)(props)}
    margin: 121px auto 131px;
    width: 254px;
    height: 90px;
    text-align: center;
  }
`

export const FooterImage = styled.picture`
  width: 46.63rem;
  height: 24.81rem;
  @media (max-width: 375px) {
    width: 100%;
    img {
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
  height: 1.25rem;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 6.75rem 0;
  @media (max-width: 744px) {
    width: 33.5rem;
    margin: 2rem 8rem 6.75rem 8rem;
  }
  @media (max-width: 375px) {
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
  @media (max-width: 744px) {
    ${(props) => textStyle(16, 400)(props)}
  }
  @media (max-width: 375px) {
    grid-area: ct;
    font-weight: 400;
    font-size: 16px;
    width: 6.88rem;
    height: 1rem;
    font-size: 1rem;
    line-height: 18.4px;
    text-align: center;
  }
`

export const PrivacyFaq = styled.div`
  margin-right: 13px;
  @media (max-width: 375px) {
    grid-area: hd;
    align-items: center;
    justify-items: center;
    margin: 0;
    width: 12.32rem;
  }
`

export const Social = styled.div`
  width: 7.25rem;
  height: 20px;
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
  @media (max-width: 375px) {
    margin: 0 30px 0 0;
  }
`

export const Faq = styled.div`
  color: ${theme.colors.SecondaryGray[200]};
  text-decoration: none;
  margin: auto 0;
  @media (max-width: 375px) {
    margin-right: 2rem;
  }
`
