'use client'

import React from 'react'
import ItemsNavVar from '../../../components/domain/Nav/ItemsNavVar'

import ItemsDetailDescription from './ItemsDetailDescription'
import ItemsDetailQuestionTextarea from './ItemsDetailQuestionTextarea'
import Button from '../../../components/common/Button'

import BackIcon from '../../../../public/assets/svg/back_icon.svg'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { textStyle } from '../../../styles/textStyle'
import Image from 'next/image'

const ItemsDetail = () => {
  return (
    <>
      <ItemsNavVar isItemsPage={true} isBoardsPage={false} />
      <Bone>
        <ItemsDetailDescription />
        <ItemsDetailQuestionTextarea />

        <ButtonWrapper>
          <ListButton
            to="/items"
            size={48}
            suffix={<Image src={BackIcon} alt="뒤로가기 아이콘" />}
          >
            목록으로 돌아가기
          </ListButton>
        </ButtonWrapper>
      </Bone>
    </>
  )
}

export default ItemsDetail

const Bone = styled.div`
  width: 120rem;
  margin: 1.5rem auto 22.2rem;

  @media (max-width: 1023px) {
    width: 69.6rem;
    margin: 1.5rem auto 24.3rem auto;
  }
  @media (max-width: 743px) {
    width: 34.4rem;
    margin: 1rem auto 6.5rem auto;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 4.6875rem auto;
  width: max-content;
  ${(props) => textStyle(18, 600)(props)}
  color: ${theme.colors.SecondaryGray[100]};
  @media (max-width: 1023px) {
    margin: 3.5rem auto 10.4375rem auto;
  }
  @media (max-width: 743px) {
    margin: 4rem auto 2.5rem auto;
  }
`
const ListButton = styled(Button)`
  padding: 1.1rem 3.9rem;
  width: max-content;
`
