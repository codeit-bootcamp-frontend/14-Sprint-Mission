import React from 'react';
import styles from './UserInfo.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import { tempUserImg } from '@/lib/imageAssets';


interface UserInfoProps {
  userImg?: string | null;
  ownerNickname: string;
  createdAtString: string;
  fontSize?: string;
}

function UserInfo({userImg = '', ownerNickname, createdAtString, fontSize = '14px'}: UserInfoProps) {
  const userImageSrc = userImg === '' || userImg === null ? tempUserImg : userImg;
  return (
    <div className={clsx(styles.userInfo, `text-[${fontSize}]`)}>
      <span><Image src={userImageSrc} fill alt="작성자이미지"/></span>
      <div>
        <span>{ownerNickname}</span>
        <span>{createdAtString}</span>
      </div>
    </div>  
  );
}
export default UserInfo;
