import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import styles from './ProductNav.module.css';
import logoImg1 from 'assets/logo_01.svg';
import logoImg2 from 'assets/logo_03.png';
import Container from 'components/layout/Container';
import Button from 'components/ui/Button';

function ProductNav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo_top} >
            <img src={logoImg1} alt="logo img" />
            <img src={logoImg2} alt="logo text" />
          </Link>
          <div className={styles.category}>
            <NavLink to="/Boards" className={({ isActive }) => isActive ? [styles.active] : ''}>자유게시판</NavLink>
            <NavLink to="/ItemsBox" className={({ isActive }) => isActive ? [styles.active] : ''}>중고마켓</NavLink>
          </div>
        </div>
        <Button link="login" variant="roundedS" className={styles.button}>로그인</Button>
      </Container>
    </div>
  );
}

export default ProductNav;
