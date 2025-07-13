// Wishlist page - minimalist style, similar structure to Home
import { useState } from 'react';
import classNames from 'classnames/bind';

import products from '~/data/products';
import Toast from '~/components/Toast';
import styles from './Wishlist.module.scss';
import Breadcrumb from '~/components/Breadcrumb';
import WishlistItem from '~/components/WishlistItem';

const cx = classNames.bind(styles);

const mainContentTags = ['Wishlist', 'Details', 'Form', 'Archived'];
const sidebarTags = ['T-shirt', 'Shirt', 'Jeans', 'Short', 'Dress', 'Jacket', 'Trousers', 'Hoodie'];

// Utility: Shuffle and pick n items
function getRandomProducts(arr, count = 6) {
  const shuffled = arr.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function Wishlist() {
  const [activeTab, setActiveTab] = useState('Wishlist');
  const randomProducts = getRandomProducts(products.all, 6);

  return (
    <Toast>
      <div className={cx('wrapper')}>
        <div className="container">
          {/* Breadcrumb */}
          <Breadcrumb />

          <div className="row">
            {/* Sidebar */}
            <aside className="col-12 col-lg-3 mb-4 mb-lg-0">
              <div className={cx('sidebar')}>
                {/* Sidebar title */}
                <div className={cx('sidebar-title')}>Quick Add</div>

                {/* Add wishlist */}
                <button className={cx('sidebar-btn', 'mb-3')}>+ New Wishlist</button>

                {/* Sidebar section */}
                <div className={cx('sidebar-section', 'mb-3')}>Tags:</div>

                {/* Tags */}
                <ul className={cx('sidebar-tags', 'list-unstyled')}>
                  {sidebarTags.map((tag) => (
                    <li key={tag} className={cx('sidebar-tag')}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main content */}
            <main className="col-12 col-lg-9">
              <div className={cx('main-content')}>
                {/* Main content title */}
                <h1 className={cx('title')}>Minimalist Wishlist</h1>

                {/* Tab bar */}
                <div className={cx('tab-bar')}>
                  {mainContentTags.map((tab) => (
                    <button
                      key={tab}
                      className={cx('tab-btn', { active: activeTab === tab })}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Wishlist grid using Card component, 3 per row */}
                <div className="row justify-content-center gy-5">
                  {randomProducts.map((item) => (
                    <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                      <WishlistItem product={item} />
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Toast>
  );
}

export default Wishlist;
