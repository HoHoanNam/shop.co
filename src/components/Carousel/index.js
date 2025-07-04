import classNames from 'classnames/bind';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/imgs/images';
import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

const Carousel = () => {
  const banners = images.banners;
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
  }, [banners.length, setCurrentIndex]); // Dependency của startInterval

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]); // Thêm startInterval vào dependency của useEffect

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    startInterval();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    startInterval();
  };

  return (
    <div id="carousel" className={cx('carousel')}>
      {banners.map((image, index) => (
        <div key={index} className={cx('carouselItem', { active: index === currentIndex })}>
          <img src={image} alt={`Slide ${index}`} className={cx('carouselImage')} />
        </div>
      ))}
      <button className={cx('prevBtn')} onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={cx('nextBtn')} onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className={cx('indicators')}>
        {banners.map((_, index) => (
          <span
            key={index}
            className={cx('indicator', { active: index === currentIndex })}
            onClick={() => {
              setCurrentIndex(index);
              startInterval();
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
