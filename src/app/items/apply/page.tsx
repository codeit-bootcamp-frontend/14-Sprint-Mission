'use client';
import React from 'react';
import { useState } from 'react';
import styles from './Additem.module.css';
import Container from 'components/layout/Container';
import Button from 'components/ui/Button';
import Title from 'components/ui/Title';
import { InputField, TextAreaField } from '@/components/ui/form/InputBox';
import TagBox from '@/components/ui/TagBox';
import { CreateProductRequest, usePostProduct } from '@/hooks/useItems';
import ImageFileBox from '@/components/ui/form/ImageFileBox';
import { useConfirmModal } from '@/hooks/useModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { useRouter } from 'next/navigation';

const INITIAL_PRODUCT: CreateProductRequest = {
  images: [],
  name: '',
  description: '',
  price: 0,
  tags: [],
};


function Additem() {
  const router = useRouter();
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const [addProduct, setAddProduct] = useState(INITIAL_PRODUCT);

  const { mutate: postProduct} = usePostProduct(openConfirmModal,router);

  function handleInputBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>){
    const value = e.target.value;
    setAddProduct((prev) => ({
      ...prev,
      [e.target.id]: value
    }));
  }

  const handleCreateProduct = () => {
    postProduct(addProduct);
  }

  return (
    <Container>
      <Title titleTag='h1' text='상품 등록하기'>
        <Button 
          onClick={handleCreateProduct}
          variant="roundedSS" 
          disabled = { !addProduct.name || !addProduct.description || !addProduct.price }
        >등록</Button>
      </Title>
    
      <form className={styles.formBox}> 
        <ImageFileBox<CreateProductRequest> setForm={setAddProduct} />
        <InputField id='name' label='상품명' inputBoxType='text' placeholder='상품명을 입력해주세요' onBlur={handleInputBlur} />
        <TextAreaField id='description' label='상품 소개' height='282px' placeholder='상품 소개를 입력해주세요' onBlur={handleInputBlur} />
        <InputField id='price' label='판매가격' inputBoxType='number' placeholder='판매 가격을 입력해주세요' onBlur={handleInputBlur} />
        <TagBox product={addProduct} setProduct={setAddProduct}/>
      </form>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </Container>
  );
}

export default Additem;