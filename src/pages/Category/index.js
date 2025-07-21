import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Sidebar from './Sidebar';
import { products } from '~/data';
import Card from '~/components/Card';
import Toast from '~/components/Toast';
import Breadcrumb from '~/components/Breadcrumb';
import Pagination from '~/components/Pagination';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Hàm xử lý responsive
  const handleResize = () => {
    if (window.innerWidth >= 1400) {
      setItemsPerRow(3);
      setItemsPerPage(9);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1400) {
      setItemsPerRow(2);
      setItemsPerPage(8);
    } else if (window.innerWidth < 768) {
      setItemsPerRow(1);
      setItemsPerPage(6);
    }
  };

  function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  const debouncedHandleResize = debounce(handleResize, 100);

  // Thêm và dọn dẹp event listener
  useEffect(() => {
    // Gọi hàm ngay khi mount để set giá trị ban đầu
    handleResize();

    // Thêm event listener cho resize
    window.addEventListener('resize', debouncedHandleResize);

    // Dọn dẹp event listener khi component unmount
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return (
    <Toast>
      <div className={classNames(cx('wrapper'), 'pt-5')}>
        <div className="container">
          {/* Breadcrumb */}
          <Breadcrumb />

          <div className="row g-5">
            {/* Sidebar */}
            <div className="col-md-4 col-xl-3">
              <Sidebar />
            </div>

            {/* Product list with Pagination */}
            <div className="col-md-8 col-xl-9">
              <div className={cx('category-list')}>
                <h1 className="display-3 fw-bold text-center text-primary-emphasis mb-5">ALL PRODUCTS</h1>
                <Pagination
                  items={products.all}
                  itemsPerRow={itemsPerRow}
                  itemsPerPage={itemsPerPage}
                  renderItem={(product) => <Card className={cx('custom-card')} product={product} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Toast>
  );
}

export default Category;
