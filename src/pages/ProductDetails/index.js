import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { products } from '~/data';
import Button from '~/components/Button';
import { getRatingImage } from '~/assets/imgs/images';
import styles from './ProductDetails.module.scss';

const cx = classNames.bind(styles);

const colors = [
  { name: 'green', code: '#00c12b' },
  { name: 'red', code: '#f50606' },
  { name: 'yellow', code: '#f5dd06' },
  { name: 'orange', code: '#f57906' },
  { name: 'cyan', code: '#06caf5' },
  { name: 'blue', code: '#063af5' },
  { name: 'purple', code: '#7d06f5' },
  { name: 'pink', code: '#f506a4' },
  { name: 'brown', code: '#7b4019' },
  { name: 'white', code: '#ffffff' },
  { name: 'black', code: '#000000' },
  { name: 'navy', code: '#404693' },
];

const randomizeNumber = (num) => {
  const randomNum = Math.round(Math.random() * num);
  return randomNum;
};

const randomItem = products.newArrivals[randomizeNumber(products.newArrivals.length - 1)];
const hasDiscount = !!randomItem.discount;

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    if (quantity < 100) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className={classNames(cx('wrapper'), 'py-5')}>
      <div className="container">
        <div className="row gx-5">
          {/* Product image */}
          <div className="col-md-4">
            <img className={cx('product-img')} src={randomItem.imageUrl} />
          </div>

          {/* Product details */}
          <div className="col-md-8">
            <div className={cx('product-details')}>
              {/* Title */}
              <div className="fw-bold display-3 mb-3">{randomItem.title}</div>

              {/* Rating */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 fw-bold">Rating:</span>
                <div>
                  <img
                    className={cx('rating-img')}
                    src={getRatingImage(randomItem.rating)}
                    alt={`Rating ${randomItem.rating}`}
                  />
                </div>
                <span className="display-5">-</span>
                <div className={cx('rating-number')}>{randomItem.rating.toFixed(1)}/5.0</div>
              </div>

              {/* Price */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 fw-bold">Price:</span>

                {hasDiscount ? (
                  <div className="d-flex align-items-center gap-3">
                    <span className={cx('new-price')}>{randomItem.price}$</span>
                    <span className={cx('original-price')}>{randomItem.discount.originalPrice}$</span>
                    <span className={cx('discount-percent')}>-{randomItem.discount.percentage}%</span>
                  </div>
                ) : (
                  <span className={cx('new-price')}>{`${randomItem.price}$`}</span>
                )}
              </div>

              {/* Description */}
              <div className="text-secondary">{randomItem.description}</div>

              <hr className="my-3" />

              {/* Colors */}
              <div className="d-flex flex-column gap-2 mb-3">
                <span className="fs-1 fw-bold">Select Colors:</span>
                <div className={cx('size-list')}>
                  {randomItem.colors.map((colorName, index) => {
                    // Tìm mã màu tương ứng từ mảng colors
                    const colorObj = colors.find((c) => c.name === colorName); // Trả về obj
                    const isGray = colorName === 'gray';

                    return isGray ? (
                      <Button
                        key={index}
                        grayStyle
                        className={cx('gray-btn')}
                        leftIcon={index === 0 ? <FontAwesomeIcon icon={faCheck} /> : null}
                      />
                    ) : (
                      <Button
                        key={index}
                        color={colorObj?.code}
                        leftIcon={index === 0 ? <FontAwesomeIcon icon={faCheck} /> : null}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Size */}
              <div className="d-flex flex-column gap-2">
                <span className="fs-1 fw-bold">Choose Size:</span>
                <div className={cx('size-list')}>
                  {randomItem.sizes.map((item, index) => (
                    <Button key={index} className="text-capitalize" pill grayStyle>
                      {item}
                    </Button>
                  ))}
                </div>
              </div>

              <hr className="my-5" />

              {/* Buttons */}
              <div className="row">
                {/* Cotrol button */}
                <div className="col-md-4">
                  <div className={cx('controls')}>
                    <span className={classNames(cx('icon'))}>
                      <FontAwesomeIcon icon={faMinus} onClick={handleMinus} />
                    </span>
                    <span className={cx('quantity')}>{quantity}</span>
                    <span className={classNames(cx('icon'))}>
                      <FontAwesomeIcon icon={faPlus} onClick={handlePlus} />
                    </span>
                  </div>
                </div>

                {/* Add button */}
                <div className="col-md-8">
                  <Button className={cx('add-btn')} pill blackStyle>
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
