// Layouts

// Pages
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import ProductDetails from '~/pages/ProductDetails';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/category', component: Category },
  { path: '/product/:id', component: ProductDetails }, // Sửa từ /product-details thành /product/:id
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
