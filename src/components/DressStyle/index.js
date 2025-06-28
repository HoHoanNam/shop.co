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
            <div className="col-auto">
              <a href="#">
                <img src={images.dressStyle.casual} />
              </a>
            </div>
            <div className="col-auto">
              <a href="#">
                <img src={images.dressStyle.formal} />
              </a>
            </div>
            <div className="col-auto">
              <a href="#">
                <img src={images.dressStyle.party} />
              </a>
            </div>
            <div className="col-auto">
              <a href="#">
                <img src={images.dressStyle.gym} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DressStyle;
