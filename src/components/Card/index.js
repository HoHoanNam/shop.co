import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import images from '~/assets/imgs/images';

const cx = classNames.bind(styles);

// Logic chọn ảnh rating dựa trên giá trị rating
const getRatingImage = (rating) => {
  const ratingMap = {
    3.0: images.rating.rating3,
    3.5: images.rating.rating3dot5,
    4.0: images.rating.rating4,
    4.5: images.rating.rating4dot5,
    5.0: images.rating.rating5,
  };
  // Làm tròn rating về số thập phân gần nhất (0.5) để khớp với key trong ratingMap
  const roundedRating = Math.round(rating * 2) / 2;
  return ratingMap[roundedRating] || images.rating.rating3; // Mặc định là rating3 nếu không khớp
};

function Card({ product }) {
  const [hasDiscount, setHasDiscount] = useState(!!product.discount);
  console.log(!!product.discount);

  return (
    <div className={cx('wrapper')}>
      {/* Image URL */}
      <img src={product.imageUrl} alt={product.title} />

      {/* Title */}
      <h4>{product.title}</h4>

      {/* Description */}
      <p className="m-0">{product.description}</p>

      {/* Rating */}
      <div className="d-flex align-items-center gap-3 py-3">
        <div>
          <img className={cx('rating-img')} src={getRatingImage(product.rating)} alt={`Rating ${product.rating}`} />
        </div>
        <div className={cx('rating-number')}>{product.rating.toFixed(1)}</div>
      </div>

      {/* Price */}
      <p>
        {hasDiscount && product.discount ? (
          <>
            <span style={{ color: 'green' }}>{product.price}$</span>
            <span style={{ textDecoration: 'line-through', marginLeft: '10px' }}>
              {product.discount.originalPrice}$
            </span>
            <span
              style={{
                background: '#ff4444',
                color: 'white',
                padding: '2px 5px',
                borderRadius: '5px',
                marginLeft: '10px',
              }}
            >
              -{product.discount.percentage}%
            </span>
          </>
        ) : (
          `${product.price}$`
        )}
      </p>
    </div>
  );
}

export default Card;
