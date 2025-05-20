import Link from 'next/link'
import React from 'react'

import LogoFace from '../../../public/assets/image/LogoFace.png'
import Logo from '../../../public/assets/image/Logo.png'
import ProfileIcon from '../../../public/assets/svg/ProfileIcon.svg'

import styled from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'
import Image from 'next/image'

interface ItemsNavVarProps {
  isItemsPage: boolean
  isBoardsPage: boolean
}

const ItemsNavVar = ({ isItemsPage, isBoardsPage }: ItemsNavVarProps) => {
  return (
    <>
      <Bone>
        <LeftWrapper>
          <HeaderLogo>
            <Link href="/" prefetch={true}>
              <PandaLogoWrapper>
                <Image src={LogoFace} alt="판다마켓 로고 사진" />
              </PandaLogoWrapper>
            </Link>
            <Link href="/" prefetch={true}>
              <PandaTextWrapper>
                <Image src={Logo} alt="판다마켓 로고 사진" />
              </PandaTextWrapper>
            </Link>
          </HeaderLogo>
          <NavContent>
            <Link href="/boards" prefetch={true}>
              <FreeBordLink $isActive={isBoardsPage}>자유게시판</FreeBordLink>
            </Link>
            <Link href="/items" prefetch={true}>
              <MarketLink $isActive={isItemsPage}>중고마켓</MarketLink>
            </Link>
          </NavContent>
        </LeftWrapper>
        <Image src={ProfileIcon} alt="프로필 아이콘" />
      </Bone>
    </>
  )
}

export default ItemsNavVar

const Bone = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rem 0 20rem;
  position: sticky;
  border-bottom: 1px solid #dfdfdf;
  height: 7rem;
  @media (max-width: 1023px) {
    padding: 0 2.4rem;
  }
  @media (max-width: 743px) {
    padding: 0 1.6rem;
  }
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 38.6rem;
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.SecondaryGray[600]};
  @media (max-width: 1023px) {
    width: 23.375rem;
  }
  @media (max-width: 743px) {
    width: 22.4rem;
  }
`
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  @media (max-width: 743px) {
    position: relative;
    left: -8px;
  }
`
const PandaLogoWrapper = styled.div`
  img {
    width: 4rem;
    height: 4rem;
    display: flex;
  }

  @media (max-width: 743px) {
    img {
      display: none;
    }
  }
`
const PandaTextWrapper = styled.div`
  img {
    width: 10.3rem;
    height: 3.5rem;
    display: flex;
  }
  @media (max-width: 1023px) {
  }
  @media (max-width: 743px) {
    img {
      width: 8.1rem;
      height: 2.3rem;
    }
  }
`
const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  @media (max-width: 743px) {
    width: 13.5rem;
    justify-content: space-between;
  }
`
interface LinkProps {
  $isActive: boolean
}
const MarketLink = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 21px 15px;
  ${(props) => textStyle(18, 700)(props)}
  &:hover {
    color: ${({ theme }) => theme.colors.SecondaryGray[600]};
  }
  color: ${({ $isActive, theme }) =>
    $isActive
      ? theme.colors.PrimaryBlue[100]
      : theme.colors.SecondaryGray[600]};
  @media (max-width: 743px) {
    ${(props) => textStyle(16, 700)(props)}
    padding: 21px 0px;
  }
`
const FreeBordLink = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 21px 15px;
  ${(props) => textStyle(18, 700)(props)}
  &:hover {
    color: ${({ theme }) => theme.colors.SecondaryGray[600]};
  }
  color: ${({ $isActive, theme }) =>
    $isActive
      ? theme.colors.PrimaryBlue[100]
      : theme.colors.SecondaryGray[600]};
  @media (max-width: 743px) {
    ${(props) => textStyle(16, 700)(props)}
    padding: 21px 0px;
  }
`
