import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, leftIcon, rightIcon }) {
  return (
    <button className={cx('btn')}>
      <span className={cx('left-icon')}>{leftIcon}</span>
      <span className={cx('content')}>{children}</span>
      <span className={cx('right-icon')}>{rightIcon}</span>
    </button>
  );
}

export default Button;
