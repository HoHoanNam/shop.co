import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss';
import Card from '~/components/Card';
import Brands from '~/components/Brands';
import Button from '~/components/Button';
import Comment from '~/components/Comment';
import { products, comments } from '~/data';
import DressStyle from '~/components/DressStyle';
import Newsletter from '~/components/Newsletter';
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
      <Link to="/category">
        <DressStyle />
      </Link>

      <div className="container">
        <hr />
      </div>

      {/* Comment section */}
      <section className={classNames(cx('comment-section'), 'py-5')}>
        <div className="container">
          {/* Comment title */}
          <div className="d-flex align-items-center justify-content-between">
            <span className={classNames(cx('comment-section-title'), 'py-5')}>OUR HAPPY CUSTOMERS</span>
            <div>
              <Button>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>

          {/* Comments */}
          <div className="row">
            {comments.map((comment, index) => {
              if (index <= 2) {
                return (
                  <div className="col-12 col-md-4 gy-4" key={index}>
                    <Comment comment={comment} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="container mt-5">
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
