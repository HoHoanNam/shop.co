import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCircleExclamation,
  faCircleInfo,
  faCircleXmark,
  faFaceKissWinkHeart,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../Toast.module.scss';

const cx = classNames.bind(styles);

function ToastMessage({ toast, onClose }) {
  const getToastIcon = () => {
    switch (toast.type) {
      case 'success':
        return <FontAwesomeIcon icon={faCheckCircle} />;
      case 'error':
        return <FontAwesomeIcon icon={faCircleExclamation} />;
      case 'warning':
        return <FontAwesomeIcon icon={faTriangleExclamation} />;
      case 'info':
        return <FontAwesomeIcon icon={faCircleInfo} />;
      case 'wishlist':
        return <FontAwesomeIcon icon={faFaceKissWinkHeart} />;
      default:
        return null;
    }
  };

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'toast-success';
      case 'error':
        return 'toast-error';
      case 'warning':
        return 'toast-warning';
      case 'info':
        return 'toast-info';
      case 'wishlist':
        return 'toast-wishlist';
      default:
        return null;
    }
  };

  return (
    <div className={cx('toast-message', { [getToastStyles()]: getToastStyles(), 'fade-out': toast.isFading })}>
      {/* Header */}
      <div className={classNames(cx('toast-header'), 'row align-items-center mb-3')}>
        {/* Icon */}
        <div className="col-2">{getToastIcon()}</div>
        {/* Type */}
        <div className="col-8 fw-semibold text-capitalize">{toast.type}</div>
        {/* Close button */}
        <div className="col-2 d-inline-flex justify-content-end">
          <span className={cx('close-btn')} onClick={() => onClose(toast.id)}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 fs-2">{toast.content}</div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default ToastMessage;
