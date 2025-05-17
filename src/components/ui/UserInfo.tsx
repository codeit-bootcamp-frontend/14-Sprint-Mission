import React from 'react';
import styles from './UserInfo.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import { tempUserImg } from '@/lib/imageAssets';


interface UserInfoProps {
  userImg?: string | null;
  ownerNickname: string;
  createdAtString: string;
  width?: number;
  fontSize?: string;
  childrenClassName?: string;
  className?: string;
  noImage?: boolean;
}

function UserInfo({userImg = '', ownerNickname, createdAtString, width=40, fontSize = "14px", noImage = false, childrenClassName ,className ="gap-[16px]"}: UserInfoProps) {
  const userImageSrc = userImg === '' || userImg === null ? tempUserImg : userImg;
  return (
    <div className={clsx(styles.userInfo, `text-[${fontSize}]`,className)}>
      {noImage === true ? null :
       <span><Image src={userImageSrc} width={width} height={width} alt="작성자이미지"/></span>
       }
      <div className={clsx('flex flex-col gap-1',childrenClassName)}>
        <span>{ownerNickname}</span>
        <span>{createdAtString}</span>
      </div>
    </div>  
  );
}
export default UserInfo;
