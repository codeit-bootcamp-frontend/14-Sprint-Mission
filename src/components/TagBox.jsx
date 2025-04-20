import React from 'react';
import { useState } from "react";
import styles from './TagBox.module.css';
import { InputField } from './ui/InputBox';
import Icon from './ui/Icon';

function TagList({tags, onClickDelete, num}){
  const handleClick = () => onClickDelete(num);
 return (
  <>
    <span>#{tags}</span>
    <div className={styles.tagDeleteBtn} onClick={handleClick}><Icon iconName='X' alt='delete product tag' /></div>
  </>
 )
}

function TagBox({product , setProduct}){
  const [inputValue, setInputValue] = useState('');

  // 엔터를 KeyDown 했을때 
  // inputValue 값을 product.tags 에 추가하고 input 박스 리셋
  const handleKeyDown =(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue) { 
        setProduct((prev) => ({...prev, tags: [...prev.tags, e.target.value]}));
        setInputValue('');
      }
    }
  }

  // 태그 미리보기 삭제
  function handleClickTagDelete(index){
    const updatedtag = [...product.tags];
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
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      />
      {product.tags.length === 0 ? null :
        <ul className={styles.tagList}>
        {product.tags.map((tag ,index) => (
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