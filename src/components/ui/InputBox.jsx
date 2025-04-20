
import React from 'react';
import styles from './InputBox.module.css';
import clsx from 'clsx';


export function InputBox({ boxType='text', placeholder, ...rest }) {
  return (
    <input 
      className={clsx(styles.input,'w-full h-20 text-sm')} 
      type={boxType} 
      placeholder={placeholder}  
      {...rest}
    />
  );
}

export function InputField({ label, boxType, placeholder, ...rest }) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input 
        className={styles.input} 
        type={boxType} 
        placeholder={placeholder}  
        {...rest}
      />
    </label>
  );
}

export function TextAreaBox({ placeholder, height, ...rest }) {
  return (
    <textarea 
      className={clsx(styles.input,'w-full h-20 text-sm')} 
      placeholder={placeholder}  
      {...rest}
    />
  );
}

export function TextAreaField({ label, placeholder, height, ...rest }) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <textarea 
        className={styles.textarea} 
        placeholder={placeholder} 
        style={{ height: 'auto', minHeight: `${height}`}} 
        {...rest}
      />
    </label>
  );
}
