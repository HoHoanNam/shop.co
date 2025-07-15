import classNames from 'classnames/bind';
import { useState, useEffect, useRef, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import styles from './CartItem.module.scss';

const cx = classNames.bind(styles);

const randomizeNumber = (num) => {
  const randomNum = Math.round(Math.random() * num);
  return randomNum;
};

function CartItem({ product, onQuantityChange }) {
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const randomSize = useRef(randomizeNumber(product.sizes.length - 1));
  const randomColor = useRef(randomizeNumber(product.colors.length - 1));

  useEffect(() => {
    // Chỉ gọi onQuantityChange nếu quantity khác với giá trị ban đầu trong product
    if (quantity !== product.quantity) {
      onQuantityChange(quantity);
    }
  }, [quantity, product.quantity, onQuantityChange]);

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

  // Tổng tiền sản phẩm
  const totalPrice = product.price * quantity;

  return (
    <section className={cx('wrapper')}>
      <div className="row align-items-center">
        {/* Product image */}
        <div className="col-md-3">
          <div className={cx('img-wrapper')}>
            <img src={product.imageUrl} alt={product.title} className={cx('product-img')} />
          </div>
        </div>

        {/* Product details */}
        <div className="col-md-9">
          <div className={cx('product-details')}>
            {/* Product title */}
            <div className="d-flex align-items-center justify-content-between">
              <span className="fs-2 fw-bold">{product.title}</span>
              <span className="fs-2 text-danger">
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>

            {/* Product size */}
            <p className="mb-2">
              Size: <span className="text-secondary text-capitalize">{product.sizes[randomSize.current]}</span>
            </p>

            {/* Product color */}
            <p className="mb-2">
              Color: <span className="text-secondary text-capitalize">{product.colors[randomColor.current]}</span>
            </p>

            {/* Price & Quantity */}
            <div className={cx('total')}>
              <span className="fs-1 fw-bold text-success">${totalPrice}</span>
              <div className={cx('controls')}>
                <span className={classNames(cx('icon'))} onClick={handleMinus}>
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className={cx('quantity')}>{quantity}</span>
                <span className={classNames(cx('icon'))} onClick={handlePlus}>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CartItem);
