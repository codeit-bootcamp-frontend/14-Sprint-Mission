'use client';

import React from 'react';
import { useState } from 'react';
import styles from './Additem.module.css';
import Container from 'components/layout/Container';
import Button from 'components/ui/Button';
import Title from 'components/ui/Title';
import { InputField, TextAreaField } from 'components/ui/InputBox';
import ImageFileBox from '@/components/ui/ImageFileBox';
import TagBox from '@/components/ui/TagBox';
import { ProductSummary } from '@/hooks/useItems';


const INITIAL_PRODUCT: ProductSummary = {
  images: [],
  name: '',
  description: '',
  price: 0,
  tags: [],
};

function Additem() {

  const [addProduct, setAddProduct] = useState(INITIAL_PRODUCT);

  function handleInputBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>){
    const value = e.target.value;
    setAddProduct((prev) => ({
      ...prev,
      [e.target.id]: value
    }));
  }

  return (
    <Container>
      <Title titleTag='h1' text='상품 등록하기'>
        <Button 
          variant="roundedSS" 
          disabled = { !addProduct.name || !addProduct.description || !addProduct.price }
          heightError='true'
        >등록</Button>
      </Title>
    
      <form className={styles.formBox}> 
        <ImageFileBox product={addProduct} setProduct={setAddProduct}/>
        <InputField id='name' label='상품명' boxType='text' placeholder='상품명을 입력해주세요' onBlur={handleInputBlur} />
        <TextAreaField id='description' label='상품 소개' boxType='textarea' height='282px' placeholder='상품 소개를 입력해주세요' onBlur={handleInputBlur} />
        <InputField id='price' label='판매가격' boxType='number' placeholder='판매 가격을 입력해주세요' onBlur={handleInputBlur} />
        <TagBox product={addProduct} setProduct={setAddProduct}/>
      </form>
    </Container>
  );
}

export default Additem;