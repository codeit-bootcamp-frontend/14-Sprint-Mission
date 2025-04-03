import React from 'react'
import { Link } from 'react-router-dom'

import ItemsNavVar from '../../component/common/ItemsNavVar'
import ItemsDetailDescription from './ItemsDetailDescription'
import ItemsDetailQuestionTextarea from './ItemsDetailQuestionTextarea'
import Button from '../../component/common/Button'

import BackIcon from '../../assets/svg/BackIcon.svg'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const Bone = styled.div`
  width: 75rem;
  margin: 1.5rem auto 4rem;

  @media (max-width: 1199px) {
    width: 43.5rem;
    margin: 1.5rem 1.5rem 2.5rem 1.5rem;
  }
  @media (max-width: 743px) {
    width: 21.437rem;
    margin: 1rem;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 4.6875rem;
`
const ButtonInner = styled.div`
  display: flex;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`
const ButtonText = styled.div`
  ${(props) => textStyle(18, 600)(props)}
  color: ${theme.colors.SecondaryGray[100]};
`
const ItemsDetail = () => {
  return (
    <>
      <ItemsNavVar />
      <Bone>
        <ItemsDetailDescription />
        <ItemsDetailQuestionTextarea />
        <Link to="/items">
          <ButtonWrapper>
            <Button size={48} width={250} paddingHeight={11} paddingWidth={40}>
              <ButtonInner>
                <ButtonText>목록으로 돌아가기</ButtonText>
                <img src={BackIcon} alt="BackIcon" />
              </ButtonInner>
            </Button>
          </ButtonWrapper>
        </Link>
      </Bone>
    </>
  )
}

export default ItemsDetail
