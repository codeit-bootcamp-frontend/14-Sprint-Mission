import React from 'react'
import Delete from '../../assets/svg/Delete.svg'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

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

const Tag = ({ tags, handleDeleteTag }) => {
  const handleDeleteTag = (tag) => {
    setTags(tags.filter((tag) => tag !== tagToDelete))
  }
  return (
    <>
      {tags && tags.length > 0 && (
        <div>
          {tags.map((tag, index) => (
            <Bone key={index}>
              <Text>#{tag}</Text>
              <DeleteIcon
                src={Delete}
                alt="삭제"
                onClick={() => handleDeleteTag(tag)}
              />
            </Bone>
          ))}
        </div>
      )}
    </>
  )
}

export default Tag
