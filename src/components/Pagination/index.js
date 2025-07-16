import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ items, itemsPerPage, itemsPerRow, renderItem }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán tổng số trang
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Lấy các sản phẩm cho trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  // Xử lý chuyển trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Cuộn lên đầu trang khi currentPage thay đổi
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt mà
    });
  }, [currentPage]);

  return (
    <div className={cx('pagination-wrapper')}>
      {/* Hiển thị sản phẩm */}
      <div className="row gy-5">
        {currentItems.map((item, index) => (
          <div className={`col-md-6 col-xxl-${12 / itemsPerRow}`} key={index}>
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* Nút phân trang */}
      {totalPages > 1 && (
        <div className={cx('pagination', 'd-flex justify-content-center')}>
          <button
            className={cx('page-btn', { disabled: currentPage === 1 })}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {/* Tạo một mảng gồm n (dựa trên tổng số trang) phần tử giống nhau */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={cx('page-btn', { active: currentPage === index + 1 })}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={cx('page-btn', { disabled: currentPage === totalPages })}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
