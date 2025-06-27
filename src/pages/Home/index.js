import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Brands from '~/components/Brands';
import HeroSection from '~/components/HeroSection';
import Card from '~/components/Card';
import { products } from '~/data/product';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <HeroSection />
      <Brands />
      {/* New arrivals */}
      <section className={classNames(cx('new-arrivals'), 'py-5')}>
        <div className="container">
          <h2 className="text-center py-5">NEW ARRIVALS</h2>
          <div className="row">
            {products.newArrivals.map((product, index) => (
              <div className="col-6 col-md-3" key={index}>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <hr />
      </div>

      {/* Top selling */}
      <section className={classNames(cx('new-arrivals'), 'py-5')}>
        <div className="container">
          <h2 className="text-center py-5">TOP SELLING</h2>
          <div className="row">
            {products.topSelling.map((product, index) => (
              <div className="col-6 col-md-3" key={index}>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
