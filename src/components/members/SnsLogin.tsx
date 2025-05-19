import React from 'react';
import Link from 'next/link';
import styles from './SnsLogin.module.css';
import Image from 'next/image';
import { sns_google, sns_kakao } from '@/lib/imageAssets';

function SnsLogin() {
  return (
    <div className={styles.sns_login}>
      <div className="sns_txt">간편 로그인하기</div>
      <div className={styles.sns_icon}>
        <Link href="https://www.google.com/" className="sns_gg" target="_blank" rel="noopener noreferrer">
          <Image src={sns_google} width={42} height={42} unoptimized alt="sns_login_google" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/" className="sns_kt" target="_blank" rel="noopener noreferrer">
          <Image src={sns_kakao} width={42} height={42} unoptimized alt="sns_login_kakao" />
        </Link>
      </div>
    </div>
  );
}

export default SnsLogin;