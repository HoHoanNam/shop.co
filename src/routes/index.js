// Layouts

// Pages
import Auth from '~/pages/Auth';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import About from '~/pages/About';
import Category from '~/pages/Category';
import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/cart', component: Cart },
  { path: '/about', component: About },
  { path: '/category', component: Category },
  { path: '/product/:id', component: ProductDetail }, // Sửa từ /product-detail thành /product/:id
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
