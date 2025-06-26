// Layouts

// Pages
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/product-detail', component: ProductDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
