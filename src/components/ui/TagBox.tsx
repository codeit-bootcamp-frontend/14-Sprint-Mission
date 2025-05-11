import React from 'react';
import { useState } from "react";
import styles from './TagBox.module.css';
import Icon from './Icon';
import { InputField } from './InputBox';
import { ProductSummary } from '@/hooks/useItems';


interface TagListProps {
  tags: string; 
  onClickDelete: (index: number) => void; 
  num: number
}
function TagList({tags, onClickDelete, num}: TagListProps){
  const handleClick = () => onClickDelete(num);
 return (
  <>
    <span>#{tags}</span>
    <div className={styles.tagDeleteBtn} onClick={handleClick}><Icon iconName='X'  width="12" height="12"  alt='delete product tag' /></div>
  </>
 )
}

interface TagBoxProps {
  product: ProductSummary;
  setProduct: React.Dispatch<React.SetStateAction<ProductSummary>>;
}

function TagBox({product, setProduct}: TagBoxProps){
  const [inputValue, setInputValue] = useState('');

  // 엔터를 KeyDown 했을때 
  // inputValue 값을 product.tags 에 추가하고 input 박스 리셋
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim()) {   // 공백 입력
        setProduct((prev) => ({
          ...prev,
          tags: Array.from(new Set([...prev.tags || [], inputValue.trim()])),   // 중복 제거
        }));
        setInputValue('');
      }
    }
  }

  // 태그 미리보기 삭제
  function handleClickTagDelete(index: number){
    const updatedtag = [...product.tags || []];
    updatedtag.splice(index, 1);
  
    setProduct((prev) => ({
      ...prev,
      tags: updatedtag,
    }));
  }

  return (
    <div className={styles.tagBox}>
      <InputField
      label='태그' 
      boxType='text' 
      placeholder='태그를 입력해주세요' 
      value={inputValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      />
      {product.tags?.length === 0 ? null :
        <ul className={styles.tagList}>
        {product.tags?.map((tag ,index) => (
          <li key={index}>
            <TagList tags={tag} onClickDelete={handleClickTagDelete} num={index}/>
          </li>
        ))}
        </ul>
      }
    </div>
  )
}
export default TagBox; 