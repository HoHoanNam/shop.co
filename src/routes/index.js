// Layouts

// Pages
import Auth from '~/pages/Auth';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import About from '~/pages/About';
import Profile from '~/pages/Profile';
import Category from '~/pages/Category';
import Wishlist from '~/pages/Wishlist';
import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/cart', component: Cart },
  { path: '/about', component: About },
  { path: '/profile', component: Profile },
  { path: '/category', component: Category },
  { path: '/wishlist', component: Wishlist },
  // Sửa từ /product-detail thành /product/:id
  { path: '/product/:id', component: ProductDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
