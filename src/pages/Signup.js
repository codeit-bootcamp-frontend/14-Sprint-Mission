
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
  const [nickname, setNickname] = useState('user');
  const [password, setPassword] = useState('12345678');
  const [pwdCheck, setPwdCheck] = useState('12345678');
  const [passwordBoxType, setpasswordBoxType] = useState(true);
  const [pwdCheckBoxType, setpwdCheckBoxType] = useState(true);
  const [errorCase, setErrorCase] = useState({ email:'', name:'', password:'',pwdCheck:'' });
 

  // input이 Blur될때 email,password state 변경 및 UserChecked state 표시
  const handleInputBlur = (e) => {
    if(e.target.id === 'login_email') {
      setEmail(e.target.value);
    } else if(e.target.id === 'login_name') {
      setNickname(e.target.value);
    } else if(e.target.id === 'login_pwd') {
      setPassword(e.target.value);
    } else if(e.target.id === 'login_pwd_check') {
      setPwdCheck(e.target.value);
    }
  }

  const idCheck = useMemo(() => memberCheck.EmailChecked(email), [email]);
  const NameCheck = useMemo(() => memberCheck.NameChecked(nickname), [nickname]);
  const passwordCheck = useMemo(() => memberCheck.passwordChecked(password), [password]);
  const pwdCheckCheck = useMemo(() => memberCheck.passwordDoubleChecked(password,pwdCheck), [pwdCheck]);
  
  useEffect(() => {
    setErrorCase({
      email: idCheck,
      name: NameCheck,
      password: passwordCheck,
      pwdCheck: pwdCheckCheck,
    });
  }, [idCheck, NameCheck, passwordCheck, pwdCheckCheck]);

  const handleEyeClick = () => setpasswordBoxType(!passwordBoxType);
  const handleEyepwdCheck = () => setpwdCheckBoxType(!pwdCheckBoxType);

  // const handleJoinSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('https://panda-market-api.vercel.app/auth/signUp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email,
  //         nickname,
  //         password,
  //       }),
  //     });
  
  //     const data = await response.json();
  //     if (response.ok) {
  //       alert('회원가입 성공!');
  //       // 성공 시 로그인 페이지로 이동
  //       window.location.href = '/login';
  //     } else {
  //       alert(`회원가입 실패: ${data.message}`);
  //     }
  //   } catch (error) {
  //     console.error('오류 발생:', error);
  //     alert('회원가입 중 오류가 발생했습니다.');
  //   }
  // };

  return (
    <div className={styles.login_body}>
      <div className={styles.login_wrap}>
        <MembersLogo />
        <div className={styles.login_box}>
          <form onBlur={handleInputBlur} >

            <label htmlFor="login_email" className={errorCase.email === '' ? '' : styles.error_box}>이메일
              <input id='login_email' type='email' placeholder="이메일을 입력해주세요" />
              { errorCase.email === '' ? null : (<span className={styles.error}>{errorCase.email}</span>) }
            </label>

            <label htmlFor="login_name" className={errorCase.name === '' ? '' : styles.error_box}>이메일
              <input id='login_name' type='text' placeholder="닉네임을 입력해주세요" />
              { errorCase.name === '' ? null : (<span className={styles.error}>{errorCase.name}</span>) }
            </label>

            <label htmlFor="login_pwd" className={errorCase.password === '' ? '' : styles.error_box}>비밀번호
              <input id='login_pwd' type={passwordBoxType === true ? 'password':'text'} placeholder="비밀번호를 입력해주세요"  />
              <img src={passwordBoxType? eyeOpen : eyeClose}  onClick={handleEyeClick} alt="password type" className={styles.eye} />
              { errorCase.password === '' ? null : (<span className={styles.error}>{errorCase.password}</span>) }
            </label>

            <label htmlFor="login_pwd_check" className={errorCase.pwdCheck === '' ? '' : styles.error_box}>비밀번호
              <input id='login_pwd_check' type={pwdCheckBoxType === true ? 'password':'text'} placeholder="비밀번호를 다시 입력해주세요"  />
              <img src={pwdCheckBoxType? eyeOpen : eyeClose}  onClick={handleEyepwdCheck} alt="password type" className={styles.eye} />
              { errorCase.pwdCheck === '' ? null : (<span className={styles.error}>{errorCase.pwdCheck}</span>) }
            </label>

            <button type="submit" className={styles.submit} disabled={errorCase.email === '' && errorCase.name === '' && errorCase.password === '' && errorCase.pwdCheck === '' ? false : true}>회원가입</button>
          </form>
        </div>
        <SnsLogin />
        <div className="member_sub_box">
          <span>이미 회원이신가요? <Link to="/login">로그인</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Login;