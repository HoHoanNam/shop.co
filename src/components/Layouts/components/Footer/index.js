import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Button from '~/components/Button';
import images from '~/assets/imgs/images';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={classNames(cx('wrapper'), 'py-5')}>
      <div className={classNames('container')}>
        <div className="row g-4">
          {/* Item 1 */}
          <div className="col-12 col-lg-4">
            <p className={classNames(cx('footer-title'), 'navbar-logo')}>
              <Link to="/" className="text-black">
                SHOP.CO
              </Link>
            </p>
            <p className="fw-light text-secondary">
              We have clothes that suits your style and <br /> which you're proud to wear. From <br /> women to men.
            </p>
            {/* Social */}
            <div className={classNames(cx('social-media'), 'd-flex')}>
              <Button leftIcon={<FontAwesomeIcon icon={faTwitter} />} />
              <Button leftIcon={<FontAwesomeIcon icon={faFacebook} />} />
              <Button leftIcon={<FontAwesomeIcon icon={faInstagram} />} />
              <Button leftIcon={<FontAwesomeIcon icon={faYoutube} />} />
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-12 col-sm-6 col-lg-2">
            <p className={classNames(cx('footer-title', 'sub-title'))}>COMPANY</p>
            <a href="">
              <p className="fw-light text-secondary">About</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Features</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Works</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Career</p>
            </a>
          </div>

          {/* Item 3 */}
          <div className="col-12 col-sm-6 col-lg-2">
            <p className={classNames(cx('footer-title', 'sub-title'))}>HELP</p>
            <a href="">
              <p className="fw-light text-secondary">Customer Support</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Delivery Details</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Terms & Conditions</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Privacy Policy</p>
            </a>
          </div>

          {/* Item 4 */}
          <div className="col-12 col-sm-6 col-lg-2">
            <p className={classNames(cx('footer-title', 'sub-title'))}>FAQ</p>
            <a href="">
              <p className="fw-light text-secondary">Account</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Manage Deliveries</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Orders</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Payments</p>
            </a>
          </div>

          {/* Item 5 */}
          <div className="col-12 col-sm-6 col-lg-2">
            <p className={classNames(cx('footer-title', 'sub-title'))}>RESOURCES</p>
            <a href="">
              <p className="fw-light text-secondary">Free eBooks</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Development Tutorial</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">How to - Blog</p>
            </a>
            <a href="">
              <p className="fw-light text-secondary">Youtube Playlist</p>
            </a>
          </div>
        </div>

        <hr className="text-secondary my-5" />

        <div className={cx('footer-ending', 'd-flex', 'align-item-center', 'justify-content-between')}>
          <div className="fw-light text-secondary">
            <span>
              Shop.co <FontAwesomeIcon icon={faCopyright} /> 2000-2025, All Rights Reserved
            </span>
          </div>

          {/* Payment */}
          <div>
            {images.payment.map((payopt, index) => (
              <a key={index} href="">
                <img src={payopt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
