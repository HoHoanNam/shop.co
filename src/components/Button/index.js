import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

// Danh sách màu và viền tương ứng (đậm hơn 20%)
const colorStyles = {
  '#00c12b': { backgroundClass: 'green', borderClass: 'border-green' },
  '#f50606': { backgroundClass: 'red', borderClass: 'border-red' },
  '#f5dd06': { backgroundClass: 'yellow', borderClass: 'border-yellow' },
  '#f57906': { backgroundClass: 'orange', borderClass: 'border-orange' },
  '#06caf5': { backgroundClass: 'cyan', borderClass: 'border-cyan' },
  '#063af5': { backgroundClass: 'blue', borderClass: 'border-blue' },
  '#7d06f5': { backgroundClass: 'purple', borderClass: 'border-purple' },
  '#f506a4': { backgroundClass: 'pink', borderClass: 'border-pink' },
  '#7b4019': { backgroundClass: 'brown', borderClass: 'border-brown' },
  '#ffffff': { backgroundClass: 'white', borderClass: 'border-white' },
  '#000000': { backgroundClass: 'black', borderClass: 'border-black' },
  '#404693': { backgroundClass: 'navy', borderClass: 'border-navy' },
};

function Button({ className, children, leftIcon, rightIcon, pill, square, large, long, grayStyle, blackStyle, color }) {
  // Lấy class màu và viền từ colorStyles, nếu không truyền thì dùng CSS mặc định của btn
  const { backgroundClass, borderClass } = colorStyles[color] || {};

  const classes = classNames(
    cx('btn', backgroundClass, borderClass, {
      pill,
      square,
      long,
      large,
      grayStyle,
      blackStyle,
    }),
    className,
  );

  return (
    <button className={classes}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      {children && <span className={cx('content')}>{children}</span>}
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
