import classNames from 'classnames/bind';
import styles from './Brands.module.scss';
import images from '~/assets/imgs/images';

const cx = classNames.bind(styles);

function Brands() {
  return (
    <div className={classNames(cx('wrapper'), 'py-5')}>
      <div className="container">
        <ul className={cx('brands')}>
          {images.brands.map((brand, index) => (
            <li key={index}>
              <a href="#">
                <img src={brand} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>{' '}
    </div>
  );
}

export default Brands;
