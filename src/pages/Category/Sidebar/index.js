import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSliders } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

// Data
const dressStyle = ['Casual', 'Formal', 'Party', 'Gym'];
const clothing = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
const size = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
const colors = [
  { name: 'green', code: '#00c12b' },
  { name: 'red', code: '#f50606' },
  { name: 'yellow', code: '#f5dd06' },
  { name: 'orange', code: '#f57906' },
  { name: 'cyan', code: '#06caf5' },
  { name: 'blue', code: '#063af5' },
  { name: 'purple', code: '#7d06f5' },
  { name: 'pink', code: '#f506a4' },
  { name: 'brown', code: '#7b4019' },
  { name: 'white', code: '#ffffff' },
  { name: 'black', code: '#000000' },
  { name: 'navy', code: '#404693' },
];

function Sidebar() {
  const [price, setPrice] = useState(0);

  return (
    <section className={classNames(cx('wrapper'), 'border', 'border-2', 'py-4', 'px-5')}>
      {/* Title */}
      <div className="d-flex align-items-center justify-content-between">
        <span className="fs-1 fw-bold text-primary-emphasis">Filter</span>
        <span className="fs-2 text-primary-emphasis">
          <FontAwesomeIcon icon={faSliders} />
        </span>
      </div>

      <hr className="my-4 border-secondary" />

      {/* Clothing */}
      <p className="fs-2 fw-bold mb-2">Clothing:</p>
      <div className="d-flex flex-column gap-2">
        {clothing.map((item, index) => (
          <div className="d-flex align-items-center justify-content-between" key={index}>
            <span>{item}</span>
            <a href="#" className="text-black">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        ))}
      </div>

      <hr className="my-4 border-secondary" />

      {/* Price range */}
      <div className={cx('price-filter')}>
        <p className="fs-2 fw-bold mb-2 d-flex justify-content-between">
          Price: <span className="text-success">${price}</span>
        </p>
        <div className={cx('range-wrapper')}>
          <input
            min="0"
            max="1000"
            type="range"
            value={price}
            className={classNames(cx('input-range'))}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="d-flex align-items-center justify-content-between">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      <hr className="my-4 border-secondary" />

      {/* Color set */}
      <div>
        <p className="fs-2 fw-bold mb-2">Colors:</p>
        <div className="row gy-2">
          {colors.map((color, index) => (
            <div className="col-3" key={index}>
              <Button color={color.code} large />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-4 border-secondary" />

      {/* Size */}
      <p className="fs-2 fw-bold mb-2">Size:</p>
      <div className="row gy-3">
        {size.map((item, index) => (
          <div className="col-6" key={index}>
            <Button pill grayStyle>
              {item}
            </Button>
          </div>
        ))}
      </div>

      <hr className="my-4 border-secondary" />

      {/* Dress style */}
      <p className="fs-2 fw-bold mb-2">Dress Style:</p>
      <div className="d-flex flex-column gap-2">
        {dressStyle.map((item, index) => (
          <div className="d-flex align-items-center justify-content-between" key={index}>
            <span>{item}</span>
            <a href="#" className="text-black">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        ))}
      </div>

      {/* Apply filter */}
      <div className="row justify-content-center mt-5 ">
        <Button blackStyle className={cx('apply-filter')}>
          Apply Filter
        </Button>
      </div>
    </section>
  );
}

export default Sidebar;
