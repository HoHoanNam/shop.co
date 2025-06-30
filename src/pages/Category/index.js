import classNames from 'classnames/bind';

import Sidebar from './Sidebar';
import { products } from '~/data';
import Card from '~/components/Card';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
  return (
    <div className={classNames(cx('wrapper'), 'py-5')}>
      <div className="container">
        <div className="row gx-5">
          {/* Sidebar */}
          <div className="col-md-3">
            <Sidebar />
          </div>

          {/* Product list */}
          <div className="col-md-9">
            <div>
              <h1 className="display-3 fw-bold text-center text-primary-emphasis mb-5">ALL PRODUCTS</h1>
              <div className="row gy-5">
                {products.all.map((product, index) => (
                  <div className="col-md-4" key={index}>
                    <Card product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
