import classNames from 'classnames';
import styles from './Button.module.css';

function Button({ variant, className, link, ...restProps }) {
  if (link) {
    return (
      <a
        {...restProps}
        href={link}
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
