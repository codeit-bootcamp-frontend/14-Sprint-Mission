'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps {
  link?: string; // Made optional
  variant: string;
  children: React.ReactNode;
  className?: string;
  heightError?: any;
  disabled?: boolean;
  onClick?: () => void; 
}
function Button({ variant, className, link, children,heightError,disabled, ...restProps } : ButtonProps) {
  let combinedClassName = clsx(styles.btn, styles[variant], className, 'flex gap-2');

  if(heightError) combinedClassName = clsx(styles.btn, styles._2, styles[variant], className, 'flex gap-2');
  
  if (link) {
    return (
      <Link
        {...restProps}
        href={link}
        className={combinedClassName}
        >
          <span className={clsx(styles.top, 'flex gap-2')}>{children}</span>
          <span className={clsx(styles.front, 'flex gap-2')}>{children}</span>
      </Link>
    );
  }
  return (
    <button
      {...restProps}
      className={combinedClassName}
      disabled={disabled}
      >
      <span className={clsx(styles.top, 'flex gap-2')}>{children}</span>
      <span className={clsx(styles.front, 'flex gap-2')}>{children}</span>
    </button>
  );
}

export default Button;
