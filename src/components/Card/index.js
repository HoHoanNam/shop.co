import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Card.module.scss';
import Button from '~/components/Button';
import { getRatingImage } from '~/assets/imgs/images';

const cx = classNames.bind(styles);

function Card({ product }) {
  const hasDiscount = !!product.discount;

  return (
    <div className={cx('wrapper')}>
      {/* Image URL */}
      <div className="mb-4">
        <img className={cx('product-img')} src={product.imageUrl} alt={product.title} />
      </div>

      {/* Title */}
      <h4 className={classNames(cx('product-title'), 'mb-3', 'fs-2', 'fw-bold')}>{product.title}</h4>

      {/* Description */}
      <p className={classNames(cx('product-decs'), 'pe-4', 'mb-3')}>{product.description}</p>

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

      {/* Buy button */}
      <Button square blackStyle leftIcon={<FontAwesomeIcon icon={faCartPlus} />}>
        Buy now
      </Button>
    </div>
  );
}

export default Card;
