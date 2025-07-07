import classNames from 'classnames/bind';

import Sidebar from './Sidebar';
import { products } from '~/data';
import Card from '~/components/Card';
import Toast from '~/components/Toast';
import Breadcrumb from '~/components/Breadcrumb';
import Pagination from '~/components/Pagination';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
  return (
    <Toast>
      <div className={classNames(cx('wrapper'), 'py-5')}>
        <div className="container">
          {/* Breadcrumb */}
          <Breadcrumb />

          <div className="row gx-5">
            {/* Sidebar */}
            <div className="col-md-3">
              <Sidebar />
            </div>

            {/* Product list with Pagination */}
            <div className="col-md-9">
              <div>
                <h1 className="display-3 fw-bold text-center text-primary-emphasis mb-5">ALL PRODUCTS</h1>
                <Pagination
                  items={products.all}
                  itemsPerPage={9} // 9 sản phẩm mỗi trang
                  itemsPerRow={3} // 3 sản phẩm mỗi hàng
                  renderItem={(product) => <Card product={product} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Toast>
  );
}

export default Category;
