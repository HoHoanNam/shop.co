import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

const cx = classNames.bind(styles);

function Breadcrumb() {
  const { pathname } = useLocation();

  // Không hiển thị breadcrumb trên trang Home
  if (pathname === '/') {
    return null;
  }

  // Xác định tên trang hiện tại dựa trên path
  let currentPage = '';
  if (pathname.startsWith('/product/')) {
    currentPage = 'Product Detail';
  } else {
    // Lấy tên từ path, ví dụ: '/cart' -> 'Cart', '/category' -> 'Category'
    currentPage = pathname
      .split('/')[1]
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <nav style={{ '--bs-breadcrumb-divider': "'>'" }} aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb m-0">
        <li className="breadcrumb-item">
          <Link to="/" className={classNames(cx('home-link'), 'fs-2', 'fw-semibold')}>
            Home
          </Link>
        </li>
        <li className="breadcrumb-item fs-2 fw-semibold text-primary" aria-current="page">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
