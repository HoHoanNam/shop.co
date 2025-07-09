import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './ServiceItem.module.scss';

const cx = classNames.bind(styles);

function ServiceItem({ service }) {
  return (
    <div className={classNames(cx('wrapper'))}>
      {/* Icon */}
      <div className="d-inline-block">
        <Button className={cx('service-btn')} leftIcon={service.icon} large />
      </div>

      {/* Title */}
      <h4 className="m-0 fs-2 fw-bold text-center">{service.title}</h4>

      {/* Decs */}
      <p className={classNames(cx('service-desc'), 'm-0 text-center')}>{service.description}</p>
    </div>
  );
}

export default ServiceItem;
