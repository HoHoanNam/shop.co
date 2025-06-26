import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './HeroSection.module.scss';

const cx = classNames.bind(styles);

function HeroSection() {
  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className={cx('hero-content')}>
          <p className={cx('hero-title')}>
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </p>
          <p className="fw-light fs-2 text-white my-5">
            Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your
            individuality and cater to your sense of style.
          </p>
          <Button pill large leftIcon={<FontAwesomeIcon icon={faBasketShopping} />}>
            Shop now
          </Button>

          {/* Stats */}
          <div className="mt-5">
            <div className={classNames(cx('stats'), 'pt-5')}>
              {/* Item 1 */}
              <div className={cx('stats-item')}>
                <p className={cx('number')}>200+</p>
                <p className={cx('text')}>International Brands</p>
              </div>
              {/* Item 2 */}
              <div className={cx('stats-item')}>
                <p className={cx('number')}>2,000+</p>
                <p className={cx('text')}>High-Quality Products</p>
              </div>
              {/* Item 3 */}
              <div className={cx('stats-item')}>
                <p className={cx('number')}>30,000+</p>
                <p className={cx('text')}>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
