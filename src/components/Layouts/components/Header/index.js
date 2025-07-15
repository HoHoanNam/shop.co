import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHeartCircleCheck, faIdCardClip, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <nav className={classNames('navbar', 'navbar-expand-xl', 'fixed-top', cx('wrapper'))}>
      <div className="container">
        <Link className={classNames('navbar-brand', 'navbar-logo')} to="/">
          SHOP.CO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classNames('collapse', 'navbar-collapse', cx('navbar-content'))} id="navbarSupportedContent">
          {/* Nav list */}
          <ul className={classNames('navbar-nav', 'mb-2', 'mb-lg-0', 'fs-4', cx('navbar-list'))}>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Top selling
              </a>
            </li>
          </ul>

          {/* Search */}
          <div className={cx('search')}>
            <input placeholder="Search new products..." spellCheck={false} />
            <button className={cx('search-btn')}>
              <svg
                width="2.4rem"
                height="2.4rem"
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Actions */}
          <div className={classNames('d-flex mt-3 mt-lg-0', cx('actions'))}>
            <Link to="/wishlist">
              <Button leftIcon={<FontAwesomeIcon icon={faHeartCircleCheck} />} />
            </Link>
            <Link to="/cart" className="mx-3">
              <Button leftIcon={<FontAwesomeIcon icon={faCartArrowDown} />} />
            </Link>
            <Link to="/auth">
              <Button leftIcon={<FontAwesomeIcon icon={faUser} />} />
            </Link>
            <Link to="/profile" className="ms-3">
              <Button leftIcon={<FontAwesomeIcon icon={faIdCardClip} />} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
