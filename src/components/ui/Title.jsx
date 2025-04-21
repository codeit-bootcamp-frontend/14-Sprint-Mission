
import React from 'react';
import styles from './Title.module.css';

function Title ({ titleTag = 'h1', text , children, ...rest }) {
  const TitleComponent = titleTag;
 return (
  <div className={styles.title} {...rest} >
    <div className={styles.left}>
      <TitleComponent className={styles.titleTag}>{text}</TitleComponent>
    </div>
    <div className={styles.right}>
      {children}
    </div>
  </div>
 )
}
export default Title;