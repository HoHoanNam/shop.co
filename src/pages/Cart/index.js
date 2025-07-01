import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';

import { products } from '~/data';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
  const [cartItems, setCartItems] = useState(products.newArrivals.map((product) => ({ ...product, quantity: 1 })));

  const updateItemQuantity = useCallback((index, newQuantity) => {
    setCartItems((prevItems) => prevItems.map((item, i) => (i === index ? { ...item, quantity: newQuantity } : item)));
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className={classNames(cx('wrapper'), 'py-5')}>
      <div className="container">
        <div className="row">
          {/* Cart list */}
          <div className="col-md-8">
            <div className={classNames(cx('cart-list'), 'border', 'border-2', 'p-5')}>
              {cartItems.map((cartItem, index) => (
                <CartItem
                  key={index}
                  product={cartItem}
                  onQuantityChange={(newQuantity) => updateItemQuantity(index, newQuantity)}
                />
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="col-md-4">
            <OrderSummary total={total} discountPercent={20} deliveryFee={15} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
