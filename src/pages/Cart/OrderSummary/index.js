import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTags } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './OrderSummary.module.scss';

const cx = classNames.bind(styles);

function OrderSummary({ total, discountPercent, deliveryFee }) {
  const discount = total * (discountPercent / 100);
  const finalTotal = total - discount + deliveryFee;

  return (
    <section className={classNames(cx('wrapper'), 'border', 'border-2', 'p-5')}>
      {/* Title */}
      <p className="fs-1 fw-bold">Order Summary</p>

      {/* Bill */}
      <div className="d-flex flex-column gap-3">
        {/* Subtotal */}
        <div className="d-flex justify-content-between">
          <span className="fs-2 text-secondary">Subtotal</span>
          <span className="fs-2 fw-bold">${total.toFixed(2)}</span>
        </div>

        {/* Discount */}
        <div className="d-flex justify-content-between">
          <span className="fs-2 text-secondary">Discount (-{discountPercent}%)</span>
          <span className="fs-2 fw-bold text-danger">-${discount.toFixed(2)}</span>
        </div>

        {/* Delivery fee */}
        <div className="d-flex justify-content-between">
          <span className="fs-2 text-secondary">Delivery Fee</span>
          <span className="fs-2 fw-bold text-info-emphasis">${deliveryFee.toFixed(2)}</span>
        </div>

        <hr />

        {/* Total */}
        <div className="d-flex justify-content-between">
          <span className="fs-2 fw-semibold">Total</span>
          <span className="fs-2 fw-bold text-success">${finalTotal.toFixed(2)}</span>
        </div>

        {/* Discount code */}
        <div className="row">
          <div className="col-md-8">
            <div className={cx('discount-code')}>
              <span className={cx('discount-icon')}>{<FontAwesomeIcon icon={faTags} />}</span>
              <input className={cx('discount-input')} placeholder="Add promo code" />
            </div>
          </div>
          <div className="col-md-4">
            <Button pill small blackStyle className={cx('apply-btn')}>
              Apply
            </Button>
          </div>
        </div>

        {/* Checkout button */}
        <div className="mt-4">
          <Button
            pill
            large
            blackStyle
            className={cx('checkout-btn')}
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
          >
            Go to checkout
          </Button>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
