import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss';
import { products, comments } from '~/data';

import Card from '~/components/Card';
import Toast from '~/components/Toast';
import Brands from '~/components/Brands';
import Button from '~/components/Button';
import Comment from '~/components/Comment';
import Carousel from '~/components/Carousel';
import DressStyle from '~/components/DressStyle';
import Newsletter from '~/components/Newsletter';
import HeroSection from '~/components/HeroSection';

const cx = classNames.bind(styles);

// Animation variants for fade-in and slide-up
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function Home() {
  const heroBrandsRef = useRef(null);
  const carouselRef = useRef(null);
  const newArrivalsRef = useRef(null);
  const topSellingRef = useRef(null);
  const dressStyleRef = useRef(null);
  const commentSectionRef = useRef(null);
  const newsletterRef = useRef(null);

  const heroBrandsInView = useInView(heroBrandsRef, { once: true, margin: '-100px' });
  const carouselInView = useInView(carouselRef, { once: true, margin: '-100px' });
  const newArrivalsInView = useInView(newArrivalsRef, { once: true, margin: '-100px' });
  const topSellingInView = useInView(topSellingRef, { once: true, margin: '-100px' });
  const dressStyleInView = useInView(dressStyleRef, { once: true, margin: '-100px' });
  const commentSectionInView = useInView(commentSectionRef, { once: true, margin: '-100px' });
  const newsletterInView = useInView(newsletterRef, { once: true, margin: '-100px' });

  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [itemsPerBreakpoint, setItemsPerBreakpoint] = useState(4);

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setItemsPerRow(4);
      setItemsPerBreakpoint(4);
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      setItemsPerRow(3);
      setItemsPerBreakpoint(6);
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      setItemsPerRow(2);
      setItemsPerBreakpoint(6);
    } else {
      setItemsPerRow(1);
      setItemsPerBreakpoint(6);
    }
  };

  const getColClass = () => {
    switch (itemsPerRow) {
      case 4:
        return 'col-12 col-md-6 col-lg-4 col-xl-3';
      case 3:
        return 'col-12 col-md-6 col-lg-4';
      case 2:
        return 'col-12 col-md-6';
      case 1:
        return 'col-12';
      default:
        return 'col-12 col-md-6 col-lg-4 col-xl-3';
    }
  };

  function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  const debouncedHandleResize = debounce(handleResize, 100);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', debouncedHandleResize);

    // Cleanup function
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  // Slice product lists based on itemsPerBreakpoint
  const newArrivalsItems = useMemo(() => products.newArrivals.slice(0, itemsPerBreakpoint), [itemsPerBreakpoint]);
  const topSellingItems = useMemo(() => products.topSelling.slice(0, itemsPerBreakpoint), [itemsPerBreakpoint]);

  return (
    <Toast>
      <div className={classNames(cx('wrapper'))}>
        <motion.div
          ref={heroBrandsRef}
          initial="hidden"
          animate={heroBrandsInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <HeroSection />
          <Brands />
        </motion.div>

        <motion.div
          ref={carouselRef}
          initial="hidden"
          animate={carouselInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <div className="container d-flex justify-content-center mt-5 py-5">
            <Carousel />
          </div>
        </motion.div>

        {/* Cách Carousel 90px */}
        <motion.div
          ref={newArrivalsRef}
          initial="hidden"
          animate={newArrivalsInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          {/* New arrivals */}
          <section className={classNames(cx('new-arrivals'), 'py-5')}>
            <div className="container">
              <h2 className={classNames(cx('new-arrivals-title'), 'text-center', 'py-5')}>NEW ARRIVALS</h2>
              <div className="row gy-5">
                {newArrivalsItems.map((product, index) => (
                  <div className={getColClass()} key={index}>
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
        </motion.div>

        <div className="container my-5">
          <hr />
        </div>

        <motion.div
          ref={topSellingRef}
          initial="hidden"
          animate={topSellingInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          {/* Top selling */}
          <section className={classNames(cx('top-selling'), 'py-5')}>
            <div className="container">
              <h2 className={classNames(cx('top-selling-title'), 'text-center', 'pb-5')}>TOP SELLING</h2>
              <div className="row gy-5">
                {topSellingItems.map((product, index) => (
                  <div className={getColClass()} key={index}>
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
        </motion.div>

        <div className="container my-5">
          <hr />
        </div>

        <motion.div
          ref={dressStyleRef}
          initial="hidden"
          animate={dressStyleInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          {/* Dress style */}
          <Link to="/category">
            <div className="d-flex justify-content-center">
              <DressStyle />
            </div>
          </Link>
        </motion.div>

        <div className="container my-5">
          <hr />
        </div>

        <motion.div
          ref={commentSectionRef}
          initial="hidden"
          animate={commentSectionInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          {/* Comment section */}
          <section className={classNames(cx('comment-section'), 'py-5')}>
            <div className="container">
              {/* Comment title */}
              <div className="d-flex align-items-center justify-content-between pb-5">
                <span className={classNames(cx('comment-section-title'))}>OUR HAPPY CUSTOMERS</span>
                <div className="d-flex align-items-center gap-2">
                  <Button>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Button>
                  <Button>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Button>
                </div>
              </div>

              {/* Comments */}
              <div className="row g-4">
                {comments.map((comment, index) => {
                  if (index <= 2) {
                    return (
                      <div className="col-12 col-lg-4 g-4" key={index}>
                        <Comment comment={comment} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div
          ref={newsletterRef}
          initial="hidden"
          animate={newsletterInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          {/* Newsletter */}
          <div className="container mt-5">
            <Newsletter />
          </div>
        </motion.div>
      </div>
    </Toast>
  );
}

export default Home;
