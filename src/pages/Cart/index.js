import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';

import { products } from '~/data';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import Breadcrumb from '~/components/Breadcrumb';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
  const [cartItems, setCartItems] = useState(products.topSelling.map((product) => ({ ...product, quantity: 1 })));

  const updateItemQuantity = useCallback((index, newQuantity) => {
    setCartItems((prevItems) => prevItems.map((item, i) => (i === index ? { ...item, quantity: newQuantity } : item)));
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className={classNames(cx('wrapper'), 'pt-5')}>
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb />

        <div className="row g-4">
          {/* Cart list */}
          <div className="col-xl-8">
            <div className={classNames(cx('cart-list'), 'border', 'border-2', 'p-5')}>
              {cartItems.map((cartItem, index) => {
                const separator = index < cartItems.length - 1 ? <hr className="mt-5 mb-3" /> : null;

                return (
                  <div key={index}>
                    <CartItem
                      product={cartItem}
                      onQuantityChange={(newQuantity) => updateItemQuantity(index, newQuantity)}
                    />
                    {separator}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order summary */}
          <div className="col-xl-4">
            <OrderSummary total={total} discountPercent={20} deliveryFee={15} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
