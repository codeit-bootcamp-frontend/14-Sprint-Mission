'use client'

import Image from 'next/image'
import Link from 'next/link'

import Button from '../../common/Button'

import Logo from '../../../../public/assets/image/logo_text.png'
import LogoFace from '../../../../public/assets/image/logo_face.png'

import styles from './HomeNavVar.module.scss'

function HomeNavVar() {
  return (
    <>
      <div className={styles['header-top']}>
        <div className={styles['header-nav']}>
          <div className={styles['header-logo']}>
            <Link href="/">
              <div className={styles['panda-logo']}>
                <Image
                  src={LogoFace}
                  alt="판다마켓 로고 사진"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
            <Link href="/">
              <div className={styles['panda-logo-name']}>
                <Image
                  src={Logo}
                  alt="판다마켓 로고 사진"
                  width={103}
                  height={35}
                />
              </div>
            </Link>
          </div>
          <Button
            to="/login"
            size={48.5}
            style={{ padding: '1.1rem 4.3rem', width: 'fit-content' }}
          >
            로그인
          </Button>
        </div>
      </div>
    </>
  )
}

export default HomeNavVar
