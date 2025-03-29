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
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24.125rem;
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 12.438rem;
`
const LogoFaceImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.537rem;
`
const LogoImage = styled.img`
  width: 6.438rem;
  height: 2.188rem;
`
const ProfileIconImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`

const ItemsNavVar = () => {
  return (
    <>
      <Bone>
        <LeftWrapper>
          <div>
            <LogoFaceImage src={LogoFace} alt="판다마켓 로고 사진" />
            <LogoImage src={Logo} alt="판다마켓 로고 사진" />
          </div>
          <NavContent>
            <div>자유게시판</div>
            <div>중고마켓</div>
          </NavContent>
        </LeftWrapper>
        <ProfileIconImage src={ProfileIcon} alt="프로필 아이콘" />
      </Bone>
    </>
  )
}

export default ItemsNavVar
