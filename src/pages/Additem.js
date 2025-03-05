
import { useState } from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import InputBox from '../components/InputBox';
import Title from '../components/Title';
import styles from './Additem.module.css';
import ImageFileBox from '../components/ImageFileBox';
import TagBox from '../components/TagBox';

function Additem() {

  const INITIAL_PRODUCT = {
    images: [],
    name: '',
    description: '',
    price: '',
    tags: [],
  }
  const [product, setProduct] = useState(INITIAL_PRODUCT);

  function handleInputBlur(e){
    const value = e.target.value;
    if( e.target.id === 'name') {
    setProduct((prev) => ({...prev, name: value}));
    } else if( e.target.id === 'description') {
      setProduct((prev) => ({...prev, description: value}));
    } else if( e.target.id === 'price') {
      setProduct((prev) => ({...prev, price: value}));
    }
  }

  return (
    <Container>
      <Title titleTag='h1' text='상품 등록하기'>
        <Button 
          variant="roundedSS" 
          disabled = {
            product.images.length === 0 || 
            product.name === '' ||
            product.description === '' ||
            product.price === ''
            ? 
            true : false
          }
        >등록</Button>
      </Title>
    
      <form className={styles.formBox} onBlur={handleInputBlur}> 
        <ImageFileBox product={product} set={setProduct}/>
        <InputBox id='name' label='상품명' boxType='text' placeholder='상품명을 입력해주세요' />
        <InputBox id='description' label='상품 소개' boxType='textarea' height='282px' placeholder='상품 소개를 입력해주세요' />
        <InputBox id='price' label='판매가격' boxType='number' placeholder='판매 가격을 입력해주세요' />
        <TagBox product={product} set={setProduct}/>
      </form>
    </Container>
  );
}

export default Additem;