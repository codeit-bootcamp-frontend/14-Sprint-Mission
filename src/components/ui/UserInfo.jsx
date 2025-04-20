import React from 'react';
import styles from './UserInfo.module.css';
import tempUserImg from 'assets/ic_3_01.png';
import clsx from 'clsx';


function UserInfo({UserImg ='', ownerNickname, createdAtString, fontSize='14px'}) {
  if(UserImg === '' || UserImg === null) UserImg = tempUserImg;
  return (
    <div className={clsx(styles.userInfo, `text-[${fontSize}]`)}>
      <img src={UserImg} alt="작성자이미지"/>
      <div>
        <span>{ownerNickname}</span>
        <span>{createdAtString}</span>
      </div>
    </div>
  );
}
export default UserInfo;
