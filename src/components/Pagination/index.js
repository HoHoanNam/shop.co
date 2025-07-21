import classNames from 'classnames/bind';
import { useState, useEffect, useMemo } from 'react';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ items, itemsPerPage, itemsPerRow, renderItem }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Adjust currentPage when itemsPerPage or items.length changes
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0) {
      setCurrentPage(1);
    }
  }, [itemsPerPage, items.length, currentPage, totalPages]);

  // Get items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = useMemo(
    () => items.slice(startIndex, startIndex + itemsPerPage),
    [items, startIndex, itemsPerPage],
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Scroll to top when currentPage changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  // Determine Bootstrap column classes based on itemsPerRow
  const getColClass = () => {
    switch (itemsPerRow) {
      case 3:
        return 'col-xl-4 col-md-6 col-12';
      case 2:
        return 'col-md-6 col-12';
      case 1:
        return 'col-12';
      default:
        return 'col-xl-4 col-md-6 col-12';
    }
  };

  // Generate pagination buttons
  const renderPaginationButtons = () => {
    const buttons = [];

    // Previous button
    buttons.push(
      <button
        key="prev"
        className={cx('page-btn', { disabled: currentPage === 1 })}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Previous
      </button>,
    );

    // If total pages <= 3, show all page numbers
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={cx('page-btn', { active: currentPage === i })}
            onClick={() => handlePageChange(i)}
            aria-label={`Page ${i}`}
          >
            {i}
          </button>,
        );
      }
    } else {
      // If currentPage is 1 or 2, show pages 1, 2, 3
      if (currentPage <= 2) {
        buttons.push(
          <button
            key={1}
            className={cx('page-btn', { active: currentPage === 1 })}
            onClick={() => handlePageChange(1)}
            aria-label="Page 1"
          >
            1
          </button>,
          <button
            key={2}
            className={cx('page-btn', { active: currentPage === 2 })}
            onClick={() => handlePageChange(2)}
            aria-label="Page 2"
          >
            2
          </button>,
          <button
            key={3}
            className={cx('page-btn', { active: currentPage === 3 })}
            onClick={() => handlePageChange(3)}
            aria-label="Page 3"
          >
            3
          </button>,
        );
      } else {
        // For currentPage >= 3, show page 1, ellipsis, currentPage, and next page (if exists)
        buttons.push(
          <button
            key={1}
            className={cx('page-btn', { active: currentPage === 1 })}
            onClick={() => handlePageChange(1)}
            aria-label="Page 1"
          >
            1
          </button>,
          <span key="ellipsis" className={cx('ellipsis')}>
            ...
          </span>,
          <button
            key={currentPage}
            className={cx('page-btn', { active: true })}
            onClick={() => handlePageChange(currentPage)}
            aria-label={`Page ${currentPage}`}
          >
            {currentPage}
          </button>,
        );
        // Add next page if it exists
        if (currentPage < totalPages) {
          buttons.push(
            <button
              key={currentPage + 1}
              className={cx('page-btn')}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label={`Page ${currentPage + 1}`}
            >
              {currentPage + 1}
            </button>,
          );
        }
      }
    }

    // Next button
    buttons.push(
      <button
        key="next"
        className={cx('page-btn', { disabled: currentPage === totalPages })}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>,
    );

    return buttons;
  };

  return (
    <div className={cx('pagination-wrapper')}>
      {/* Render products */}
      <div className="row gy-5">
        {currentItems.map((item, index) => (
          <div className={getColClass()} key={index}>
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      {totalPages > 1 && (
        <div className={cx('pagination', 'd-flex justify-content-center')}>{renderPaginationButtons()}</div>
      )}
    </div>
  );
}

export default Pagination;
