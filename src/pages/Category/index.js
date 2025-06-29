import classNames from 'classnames/bind';

import Sidebar from './Sidebar';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
  return (
    <div className={classNames(cx('wrapper'), 'py-5')}>
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <Sidebar />
          </div>

          {/* Product list */}
          <div className="col-md-9"></div>
        </div>
      </div>
    </div>
  );
}

export default Category;
