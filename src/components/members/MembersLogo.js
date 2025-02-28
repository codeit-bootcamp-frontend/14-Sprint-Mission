
import { Link } from 'react-router-dom';
import styles from './MembersLogo.module.css';
import logoImg1 from '../../assets/logo_01.svg';
import logoImg2 from '../../assets/logo_03.png';

function MembersLogo() {
  return (
    <div className={styles.logo}>
      <Link to="/" className="logo_top">
        <img src={logoImg1} alt="logo icon" />
        <img src={logoImg2} alt="logo text" />
      </Link>
    </div>
  );
}

export default MembersLogo;
