import classNames from 'classnames/bind';
import ToastMessage from '../ToastMessage';
import styles from '../Toast.module.scss';

const cx = classNames.bind(styles);

function ToastWrapper({ toasts, onClose }) {
  return (
    <div className={cx('toast-wrapper')}>
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
}

export default ToastWrapper;
