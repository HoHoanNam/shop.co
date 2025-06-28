import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, leftIcon, rightIcon, pill, square, large, long, black }) {
  return (
    <button className={cx('btn', { pill, square, large, long, black })}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      {children && <span className={cx('content')}>{children}</span>}
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
