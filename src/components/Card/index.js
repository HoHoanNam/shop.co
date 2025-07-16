import { Fragment, useContext } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Card.module.scss';
import Button from '~/components/Button';
import { ToastContext } from '~/components/Toast';
import { getRatingImage } from '~/assets/imgs/images';

const cx = classNames.bind(styles);

function Card({ className, product }) {
  const hasDiscount = !!product.discount;
  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);

  const classes = classNames(cx('card-wrapper'), className);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBuyNow = () => {
    addToast({
      type: 'success',
      content: 'Product has been added to cart!',
      duration: 3000, // Có thể tùy chỉnh duration tại đây
    });
  };

  return (
    <Fragment>
      <div className={classes} onClick={handleCardClick}>
        {/* Image URL */}
        <div className="mb-4">
          <div className={cx('img-wrapper')}>
            <img className={cx('product-img')} src={product.imageUrl} alt={product.title} />
          </div>
        </div>

        {/* Title */}
        <h4 className={classNames(cx('product-title'), 'mb-3', 'fs-2', 'fw-bold')}>{product.title}</h4>

        {/* Description */}
        <p className={classNames(cx('product-desc'), 'pe-4', 'mb-3')}>{product.description}</p>

        {/* Rating */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <div>
            <img className={cx('rating-img')} src={getRatingImage(product.rating)} alt={`Rating ${product.rating}`} />
          </div>
          <div className={cx('rating-number')}>{product.rating.toFixed(1)}/5.0</div>
        </div>

        {/* Price */}
        <div className="mb-4">
          {hasDiscount ? (
            <div className="d-flex align-items-center gap-3">
              <span className={cx('new-price')}>{product.price}$</span>
              <span className={cx('original-price')}>{product.discount.originalPrice}$</span>
              <span className={cx('discount-percent')}>-{product.discount.percentage}%</span>
            </div>
          ) : (
            <span className={cx('new-price')}>{`${product.price}$`}</span>
          )}
        </div>
      </div>

      {/* Buy button */}
      <div className="d-inline-block" onClick={handleBuyNow}>
        <Button square blackStyle leftIcon={<FontAwesomeIcon icon={faCartPlus} />}>
          Buy now
        </Button>
      </div>
    </Fragment>
  );
}

export default Card;
