// Layouts

// Pages
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/category', component: Category },
  { path: '/product/:id', component: ProductDetail }, // Sửa từ /product-detail thành /product/:id
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
