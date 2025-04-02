import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import LogoFace from '../../assets/image/LogoFace.png'
import Logo from '../../assets/image/Logo.png'
import ProfileIcon from '../../assets/svg/ProfileIcon.svg'

const Bone = styled.div`
  height: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 12.5rem auto 12.5rem;
  position: sticky;
  @media (max-width: 1199px) {
    margin: auto 1.5rem;
  }
  @media (max-width: 743px) {
    margin: auto 1rem;
  }
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24.125rem;
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.SecondaryGray[600]};
  @media (max-width: 1199px) {
    width: 23.375rem;
  }
  @media (max-width: 743px) {
    width: 14rem;
  }
`
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 743px) {
    position: relative;
    left: -8px;
  }
`
const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 12.438rem;
  @media (max-width: 743px) {
    width: 8.4375rem;
    justify-content: space-between;
  }
`
const MarketButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 21px 15px;
  ${(props) => textStyle(18, 700)(props)}
  &:hover {
    color: ${({ theme }) => theme.colors.SecondaryGray[600]};
  }
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.PrimaryBlue[100] : theme.colors.SecondaryGray[600]};
  @media (max-width: 743px) {
    ${(props) => textStyle(16, 700)(props)}
    padding: 21px 0px;
  }
`
const FreeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 21px 15px;
  ${(props) => textStyle(18, 700)(props)}
  &:hover {
    color: ${({ theme }) => theme.colors.SecondaryGray[600]};
  }
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.PrimaryBlue[100] : theme.colors.SecondaryGray[600]};
  @media (max-width: 743px) {
    ${(props) => textStyle(16, 700)(props)}
    padding: 21px 0px;
  }
`
const LogoFaceImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.537rem;
  @media (max-width: 743px) {
    width: 0;
    height: 0;
  }
`
const LogoImage = styled.img`
  width: 6.438rem;
  height: 2.188rem;
  @media (max-width: 743px) {
    width: 5.062rem;
    height: 1.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const ProfileIconImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`

const ItemsNavVar = ({ isItemsPage, isBoardsPage }) => {
  return (
    <>
      <Bone>
        <LeftWrapper>
          <HeaderLogo>
            <Link to="/">
              <LogoFaceImage src={LogoFace} alt="판다마켓 로고 사진" />
            </Link>
            <Link to="/">
              <LogoImage src={Logo} alt="판다마켓 로고 사진" />
            </Link>
          </HeaderLogo>
          <NavContent>
            <FreeButton isActive={isBoardsPage}>자유게시판</FreeButton>
            <MarketButton isActive={isItemsPage}>중고마켓</MarketButton>
          </NavContent>
        </LeftWrapper>
        <ProfileIconImage src={ProfileIcon} alt="프로필 아이콘" />
      </Bone>
    </>
  )
}

export default ItemsNavVar
