import React from 'react'
import Delete from '../../public/assets/svg/Delete.svg'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'

interface TagProps {
  tag: string
  onClick?: (tag: string) => void
  showDelete?: boolean
}

const Tag = ({ tag, onClick, showDelete = false }: TagProps) => {
  console.log('Tag 컴포넌트에 전달된 productTags:', tag)
  return (
    <>
      <div>
        <Bone>
          <Text>#{tag}</Text>
          {showDelete && (
            <DeleteIcon
              src={Delete}
              alt="삭제"
              onClick={() => onClick?.(tag)}
            />
          )}
        </Bone>
      </div>
    </>
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
const DeleteIcon = styled.img`
  width: fit-content;
  height: fit-content;
`
