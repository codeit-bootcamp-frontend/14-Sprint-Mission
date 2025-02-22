
import styles from './Login.module.css';
import { useState ,useEffect,useMemo } from 'react';
import { memberCheck } from '../utils/auth';
import { Link } from 'react-router-dom';
import MembersLogo from '../components/members/MembersLogo';
import SnsLogin from '../components/members/SnsLogin';
import eyeOpen from '../assets/eye_1.svg';
import eyeClose from '../assets/eye_2.svg';

function Login() {
  const [email, setEmail] = useState('user@mail.com');
  const [password, setPassword] = useState('12345678');
  const [passwordBoxType, setpasswordBoxType] = useState(true);
  const [errorCase, setErrorCase] = useState({ email:'', password:'' });


  // input이 Blur될때 email,password state 변경 및 UserChecked state 표시
  const handleInputBlur = (e) => {
    if(e.target.id === 'login_email') {
      setEmail(e.target.value);
    } else if(e.target.id === 'login_pwd') {
      setPassword(e.target.value);
    }
  }

  const idCheck = useMemo(() => memberCheck.EmailChecked(email), [email]);
  const passwordCheck = useMemo(() => memberCheck.passwordChecked(password), [password]);
  
  useEffect(() => {
    setErrorCase({
      email: idCheck,
      password: passwordCheck,
    });
  }, [idCheck, passwordCheck]);

  const handleEyeClick = () => setpasswordBoxType(!passwordBoxType);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const response = await fetch('https://panda-market-api.vercel.app/auth/signIn', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });
  
  //   const data = await response.json();
  //   if (response.ok) {
  //     alert('로그인 성공!');
  //   } else {
  //     alert(`로그인 실패: ${data.message}`);
  //   }
  // };

  return (
    <div className={styles.login_body}>
      <div className={styles.login_wrap}>
        <MembersLogo />
        <div className={styles.login_box}>
          <form onBlur={handleInputBlur}> 
            <label htmlFor="login_email" className={errorCase.email === '' ? '' : styles.error_box}>이메일
              <input id='login_email' type='email' placeholder="이메일을 입력해주세요" />
              { errorCase.email === '' ? null : (<span className={styles.error}>{errorCase.email}</span>) }
            </label>

            <label htmlFor="login_pwd" className={errorCase.password === '' ? '' : styles.error_box}>비밀번호
              <input id='login_pwd' type={passwordBoxType === true ? 'password':'text'} placeholder="비밀번호를 입력해주세요"  />
              <img src={passwordBoxType? eyeOpen : eyeClose}  onClick={handleEyeClick} alt="password type" className={styles.eye} />
              { errorCase.password === '' ? null : (<span className={styles.error}>{errorCase.password}</span>) }
            </label>

            <button type="submit" className={styles.submit} disabled={errorCase.email === '' && errorCase.password === '' ? false : true}>로그인</button>
          </form>
        </div>
        <SnsLogin />
        <div className="member_sub_box">
          <span>판다마켓은 처음이신가요? <Link to="/Signup">회원가입</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Login;