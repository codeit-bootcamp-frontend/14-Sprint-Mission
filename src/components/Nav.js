import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from './Container';
import logoImg1 from '../assets/logo_01.svg';
import logoImg2 from '../assets/logo_03.png';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.nav}>
      <Container>
        <Link to="/" className={styles.logo_top} >
          <img src={logoImg1} alt="logo img" />
          <img src={logoImg2} alt="logo text" />
        </Link>
        <Button link="login" variant="roundedS">로그인</Button>
      </Container>
    </div>
  );
}

export default Nav;
