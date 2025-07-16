import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Newsletter.module.scss';

const cx = classNames.bind(styles);

function Newsletter() {
  return (
    <div className={classNames(cx('wrapper'))}>
      <div className={cx('newsletter-content')}>
        <div className={cx('newsletter-title')}>
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </div>

        {/* Subscription section */}
        <div className="d-inline-flex flex-column gap-3">
          {/* Email */}
          <div className={cx('email')}>
            <span className={cx('email-icon')}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" className={cx('email-input')} placeholder="Enter your email address" />
          </div>

          {/* Subscribe button */}
          <Button pill className={cx('subscribe-btn')}>
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
