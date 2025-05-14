import React from 'react'
import { Link } from 'react-router-dom'

import ItemsDetailDescription from './ItemsDetailDescription'
import ItemsDetailQuestionTextarea from './ItemsDetailQuestionTextarea'
import Button from '../common/Button'

import BackIcon from '../../../public/assets/svg/BackIcon.svg'

import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { textStyle } from '../../../styles/textStyle'

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
  margin: 4.6875rem auto;
  width: max-content;
  ${(props) => textStyle(18, 600)(props)}
  color: ${theme.colors.SecondaryGray[100]};
  @media (max-width: 1199px) {
    margin: 3.5rem auto 10.4375rem auto;
  }
  @media (max-width: 743px) {
    margin: 2.5rem auto 2.5rem auto;
  }
`

const ItemsDetail = () => {
  return (
    <>
      <Bone>
        <ItemsDetailDescription />
        <ItemsDetailQuestionTextarea />

        <ButtonWrapper>
          <Button
            as={Link}
            to="/items"
            size={48}
            paddingHeight={11}
            paddingWidth={40}
            suffix={<img src={BackIcon} alt="뒤로가기 아이콘" />}
          >
            목록으로 돌아가기
          </Button>
        </ButtonWrapper>
      </Bone>
    </>
  )
}

export default ItemsDetail
