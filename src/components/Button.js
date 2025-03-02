import classNames from 'classnames';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

function Button({ variant, className, link, ...restProps }) {
  if (link) {
    return (
      <Link
        {...restProps}
        to={link}
        className={classNames(styles.btn, styles[variant], className)}
      />
    );
  }
  return (
    <button
      {...restProps}
      className={classNames(styles.btn, styles[variant], className,)}
    />
  );
}

export default Button;
