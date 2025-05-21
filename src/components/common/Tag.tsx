import React from 'react'

import Delete from '../../../public/assets/svg/delete_tag.svg'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import Image from 'next/image'

interface TagProps {
  tag: string
  onClick?: (tag: string) => void
  showDelete?: boolean
}

const Tag = ({ tag, onClick, showDelete = false }: TagProps) => {
  console.log('Tag 컴포넌트에 전달된 productTags:', tag)
  return (
    <div>
      <Bone>
        <Text>#{tag}</Text>
        {showDelete && (
          <Image src={Delete} alt="삭제" onClick={() => onClick?.(tag)} />
        )}
      </Bone>
    </div>
  )
}

export default Tag

const Bone = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 12px 5px 16px;
  background-color: ${theme.colors.SecondaryGray[100]};
  border-radius: 26px;
`
const Text = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  margin-right: 0.5rem;
`
