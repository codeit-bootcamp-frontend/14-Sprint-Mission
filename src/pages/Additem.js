
import Button from '../components/Button';
import Container from '../components/Container';
import InputBox from '../components/InputBox';
import Title from '../components/Title';
import styles from './Additem.module.css';

function Additem() {
  return (
    <Container>
      <Title titleTag='h1' text='상품 등록하기'>
        <Button variant="roundedSS" disabled>등록</Button>
      </Title>
      
      <form className={styles.formBox}> 
        <InputBox label='상품 이미지' boxType='imgFile' />
        <InputBox label='상품명' boxType='text' placeholder='상품명을 입력해주세요' />
        <InputBox label='상품 소개' boxType='textarea' height='282px' placeholder='상품 소개를 입력해주세요' />
        <InputBox label='판매가격' boxType='text' placeholder='판매 가격을 입력해주세요' />
        <InputBox label='태그' boxType='text' placeholder='태그를 입력해주세요' />
      </form>
    </Container>
  );
}

export default Additem;