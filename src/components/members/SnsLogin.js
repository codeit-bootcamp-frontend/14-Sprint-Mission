import { Link } from 'react-router-dom';
import styles from './SnsLogin.module.css';
import sns_google from '../../assets/gg_icon.png';
import sns_kakao from '../../assets/kakao_icon.png';

function SnsLogin() {
  return (
    <div className={styles.sns_login}>
      <div className="sns_txt">간편 로그인하기</div>
      <div className="sns_icon">
        <Link to="https://www.google.com/" className="sns_gg" target="_blank" rel="noopener noreferrer">
          <img src={sns_google} alt="sns_login_google" />
        </Link>
        <Link to="https://www.kakaocorp.com/page/" className="sns_kt" target="_blank" rel="noopener noreferrer">
          <img src={sns_kakao} alt="sns_login_kakao" />
        </Link>
      </div>
    </div>
  );
}

export default SnsLogin;