import classNames from 'classnames/bind';
import images from '~/assets/imgs/images';
import styles from './DressStyle.module.scss';

const cx = classNames.bind(styles);

function DressStyle() {
  return (
    <section className={classNames(cx('wrapper'), 'py-5')}>
      <div className="container">
        <div className={classNames(cx('dress-style'), 'p-5')}>
          {/* Title */}
          <h2 className={cx('dress-style-title')}>BROWSE BY DRESS STYLE</h2>

          {/* Dress style list */}
          <div className="row g-4 justify-content-center">
            <div className={classNames(cx('dress-style-item'), 'col-12 col-xl-auto')}>
              <img src={images.dressStyle.formal} />
            </div>
            <div className={classNames(cx('dress-style-item'), 'col-6 col-xl-auto')}>
              <img src={images.dressStyle.gym} />
            </div>
            <div className={classNames(cx('dress-style-item'), 'col-6 col-xl-auto')}>
              <img src={images.dressStyle.casual} />
            </div>
            <div className={classNames(cx('dress-style-item'), 'col-12 col-xl-auto')}>
              <img src={images.dressStyle.party} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DressStyle;
