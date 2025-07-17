import { useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeartPulse, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './WishlistItem.module.scss';

const cx = classNames.bind(styles);

function WishlistItem({ product }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDotClick = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className={cx('wishlist-item')}
      onClick={handleCardClick}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      {/* Heart button */}
      <Button className={cx('heart-btn')} leftIcon={<FontAwesomeIcon icon={faHeartPulse} />} />

      {/* 3-dot button */}
      {showMenu && (
        <Button className={cx('dot-btn')} leftIcon={<FontAwesomeIcon icon={faEllipsis} />} onClick={handleDotClick} />
      )}

      {/* Product image */}
      <div className={cx('img-wrapper')}>
        <img src={product.imageUrl} alt={product.title} className={cx('wishlist-img')} />
      </div>

      {/* Basic info */}
      <div className={cx('info')}>
        <div className={cx('title')}>{product.title}</div>
        <div className={cx('desc')}>{product.description}</div>
        <div className={cx('price')}>
          {product.discount ? (
            <>
              <span className={cx('new-price')}>${product.discount.newPrice.toLocaleString()}</span>
              <span className={cx('original-price')}>${product.discount.originalPrice.toLocaleString()}</span>
              <span className={cx('discount-percent')}>${product.discount.percentage.toLocaleString()}</span>
            </>
          ) : (
            <span className={cx('new-price')}>${product.price.toLocaleString()}</span>
          )}
        </div>
      </div>

      {/* Modal for full info */}
      {showModal && (
        <div className={cx('modal-bg')} onClick={() => setShowModal(false)}>
          <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <Button
              className={cx('close-btn')}
              leftIcon={<FontAwesomeIcon icon={faXmark} />}
              onClick={() => setShowModal(false)}
            />

            {/* Modal title */}
            <div className={cx('modal-title')}>{product.title}</div>

            {/* Modal price */}
            <div className={cx('modal-row')}>
              <b>Price:</b> $
              {product.discount ? product.discount.newPrice.toLocaleString() : product.price.toLocaleString()}
            </div>

            {/* Modal description */}
            <div className={cx('modal-row')}>
              <b>Description:</b> {product.description}
            </div>

            {/* Modal rating */}
            <div className={cx('modal-row')}>
              <b>Rating:</b> {product.rating}/5.0
            </div>

            {/* Modal color set */}
            <div className={cx('modal-row')}>
              <b>Colors:</b> {product.colors && product.colors.join(', ')}
            </div>

            {/* Modal size */}
            <div className={cx('modal-row')}>
              <b>Sizes:</b> {product.sizes && product.sizes.join(', ')}
            </div>

            {/* Modal discount */}
            {product.discount && (
              <div className={cx('modal-row')}>
                <b>Discount:</b> {product.discount.percentage}% off (was $
                {product.discount.originalPrice.toLocaleString()})
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistItem;
