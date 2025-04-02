import React from 'react'

import ItemsNavVar from '../../component/common/ItemsNavVar'
import ItemsDetailDescription from './ItemsDetailDescription'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const Bone = styled.div`
  width: 75rem;
  margin: 1.5rem auto;
  @media (max-width: 1199px) {
    width: 43.5rem;
    margin: 1.5rem 1.5rem 2.5rem 1.5rem;
  }
  @media (max-width: 743px) {
    width: 21.437rem;
    margin: 1rem;
  }
`

const ItemsDetail = () => {
  return (
    <>
      <ItemsNavVar />
      <Bone>
        <div>
          <ItemsDetailDescription />
        </div>
      </Bone>
    </>
  )
}

export default ItemsDetail
