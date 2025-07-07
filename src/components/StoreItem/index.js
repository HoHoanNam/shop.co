import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRoad,
  faShop,
  faShopLock,
  faComments,
  faDoorOpen,
  faEnvelope,
  faFaceSmile,
  faCircleInfo,
  faLocationDot,
  faPhoneVolume,
  faFaceSmileBeam,
  faHourglassHalf,
  faFaceKissWinkHeart,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './StoreItem.module.scss';
import { getRatingImage } from '~/assets/imgs/images';

const cx = classNames.bind(styles);

const ctas = [
  { icon: <FontAwesomeIcon icon={faCircleInfo} />, content: 'View details', className: 'view-details-btn' },
  { icon: <FontAwesomeIcon icon={faRoad} />, content: 'Get directions', className: 'directions-btn' },
  { icon: <FontAwesomeIcon icon={faComments} />, content: 'Contact now', className: 'contact-btn' },
];

function StoreItem({ store }) {
  const GetStatusIcon = () => {
    switch (store.status) {
      case 'Opening':
        return <FontAwesomeIcon icon={faShop} />;
      case 'Temporarily closed':
        return <FontAwesomeIcon icon={faShopLock} />;
      case 'Coming soon':
        return <FontAwesomeIcon icon={faHourglassHalf} />;
      default:
        return null;
    }
  };

  const getRatingIcon = () => {
    switch (store.rating) {
      case 4.0:
        return <FontAwesomeIcon icon={faFaceSmile} />;
      case 4.5:
        return <FontAwesomeIcon icon={faFaceSmileBeam} />;
      case 5.0:
        return <FontAwesomeIcon icon={faFaceKissWinkHeart} />;
      default:
        return null;
    }
  };

  return (
    <div className={cx('store')}>
      {/* Left section */}
      <div className={cx('left-section')}>
        <img className={cx('store-img')} src={store.imageUrl} alt={store.address} />
      </div>

      {/* Right section */}
      <div className={cx('right-section')}>
        <h4 className="fs-1 fw-semibold mb-3">{store.name}</h4>

        {/* Address */}
        <div className="d-flex align-items-center fs-2 mb-3">
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span>{store.address}</span>
        </div>

        {/* Contact */}
        <div className="d-flex align-items-center fs-2 mb-3">
          <div className="d-flex align-items-center">
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span>shopcoxyz@gmail.com</span>
          </div>

          <span className="ms-4">&mdash;</span>

          <div className="d-flex align-items-center">
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </span>
            <span>{store.phone}</span>
          </div>
        </div>

        {/* Status */}
        <div className="d-flex align-items-center fs-2 mb-3">
          <span className={cx('icon')}>{GetStatusIcon()}</span>
          <span>{store.status}</span>
        </div>

        {/* Start - End time */}
        <div className="d-flex align-items-center fs-2 mb-3">
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faDoorOpen} />
          </span>
          <span>{store.openingHours}</span>
        </div>

        {/* Rating */}
        <div className="d-flex align-items-center fs-2 mb-3">
          <span className={cx('icon', 'emotion-icon')}>{getRatingIcon()}</span>
          <span className="me-3">&mdash;</span>
          <div>
            <img className={cx('rating-img')} src={getRatingImage(store.rating)} alt={store.rating} />
          </div>
          <span className="ms-3">({store.rating.toFixed(1)}/5.0)</span>
        </div>

        {/* CTA buttons*/}
        <div className="d-flex align-content-center">
          {ctas.map((cta, index) => {
            return (
              <Button
                pill
                long
                grayStyle
                key={index}
                leftIcon={cta.icon}
                className={cx('cta-btn', { [cta.className]: cta.className })}
              >
                <span className="fw-semibold">{cta.content}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
