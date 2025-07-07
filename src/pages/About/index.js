import classNames from 'classnames/bind';

import { stores } from '~/data';
import styles from './About.module.scss';
import StoreItem from '~/components/StoreItem';

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={classNames(cx('wrapper'), 'py-5')}>
      {/* Introduction */}
      <section className={classNames(cx('introduction'), 'py-5')}>
        <div className="container">
          {/* Title */}
          <h1 className="display-1 text-center fw-bold mb-3">Visit Us</h1>
          <p className="fs-2 fw-light text-center text-secondary">
            Embrace the "Less, but better" philosophy in real life at our brick-and-mortar stores, <br /> where the
            service and immediate satisfaction of a retail space harmonize seamlessly with the <br /> intimacy and
            customization of an atelier.
          </p>
        </div>
      </section>

      <div className="container my-5">
        <hr />
      </div>

      {/* Store */}
      <section className={classNames(cx('stores'), 'py-5')}>
        <div className="container">
          {/* Title */}
          <p className="fs-1 d-flex justify-content-center gap-4" style={{ lineHeight: '100%' }}>
            <span>&#x2015;</span>
            <span>Our Stores</span>
            <span>&#x2015;</span>
          </p>
          <h3 className="display-3 text-center fw-semibold mb-5">
            <span>Explore Our </span>
            <span className={cx('braille')}>Stores</span>
          </h3>

          {/* Store list */}
          <div className="d-flex flex-column gap-5 pt-5">
            {stores.map((store, index) => (
              <StoreItem key={index} store={store} />
            ))}
          </div>
        </div>
      </section>

      <div className="container my-5">
        <hr />
      </div>
    </div>
  );
}

export default About;
