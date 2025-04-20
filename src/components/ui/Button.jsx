import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import clsx from 'clsx';

function Button({ variant, className, link, children, ...restProps }) {
  const combinedClassName = clsx(styles.btn, styles[variant], className, 'flex gap-2');
  if (link) {
    return (
      <Link
        {...restProps}
        to={link}
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
      >
      <span className={clsx(styles.top, 'flex gap-2')}>{children}</span>
      <span className={clsx(styles.front, 'flex gap-2')}>{children}</span>
    </button>
  );
}

export default Button;
