import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Card from '~/components/Card';
import Brands from '~/components/Brands';
import Button from '~/components/Button';
import { products } from '~/data/product';
import DressStyle from '~/components/DressStyle';
import HeroSection from '~/components/HeroSection';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <HeroSection />
      <Brands />
      {/* New arrivals */}
      <section className={classNames(cx('new-arrivals'), 'py-5')}>
        <div className="container">
          <h2 className={classNames(cx('new-arrivals-title'), 'text-center', 'py-5')}>NEW ARRIVALS</h2>
          <div className="row">
            {products.newArrivals.map((product, index) => (
              <div className="col-6 col-md-3" key={index}>
                <Card product={product} />
              </div>
            ))}
          </div>

          <div className="d-flex align-items-center justify-content-center mt-5">
            <Button pill long>
              View more
            </Button>
          </div>
        </div>
      </section>

      <div className="container">
        <hr />
      </div>

      {/* Top selling */}
      <section className={classNames(cx('top-selling'), 'py-5')}>
        <div className="container">
          <h2 className={classNames(cx('top-selling-title'), 'text-center', 'py-5')}>TOP SELLING</h2>
          <div className="row">
            {products.topSelling.map((product, index) => (
              <div className="col-6 col-md-3" key={index}>
                <Card product={product} />
              </div>
            ))}
          </div>

          <div className="d-flex align-items-center justify-content-center mt-5">
            <Button pill long>
              View more
            </Button>
          </div>
        </div>
      </section>

      <div className="container">
        <hr />
      </div>

      {/* Dress style */}
      <DressStyle />
    </div>
  );
}

export default Home;
