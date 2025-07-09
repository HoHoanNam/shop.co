// Payment
import visa from '~/assets/imgs/payment/visa.png';
import paypal from '~/assets/imgs/payment/paypal.png';
import applepay from '~/assets/imgs/payment/applepay.png';
import googlepay from '~/assets/imgs/payment/googlepay.png';
import mastercard from '~/assets/imgs/payment/mastercard.png';

// Brands
import zara from '~/assets/imgs/brands/zara.png';
import gucci from '~/assets/imgs/brands/gucci.png';
import prada from '~/assets/imgs/brands/prada.png';
import versace from '~/assets/imgs/brands/versace.png';
import calvinKlein from '~/assets/imgs/brands/calvin-klein.png';

// Rating
import rating3 from './rating/rating-3.0.png';
import rating4 from './rating/rating-4.0.png';
import rating5 from './rating/rating-5.0.png';
import rating3dot5 from './rating/rating-3.5.png';
import rating4dot5 from './rating/rating-4.5.png';

// Dress style
import gym from './dress-style/gym.png';
import party from './dress-style/party.png';
import casual from './dress-style/casual.png';
import formal from './dress-style/formal.png';

// Banners
import banner1 from './banners/banner1.png';
import banner2 from './banners/banner2.png';
import banner3 from './banners/banner3.png';
import banner4 from './banners/banner4.png';
import banner5 from './banners/banner5.png';

// Stores
import store1 from './stores/store1.png';
import store2 from './stores/store2.png';
import store3 from './stores/store3.png';
import store4 from './stores/store4.png';
import store5 from './stores/store5.png';
import store6 from './stores/store6.png';
import store7 from './stores/store7.png';
import store8 from './stores/store8.png';

// Models
import model1 from './models/model1.jpg';
import model2 from './models/model2.jpg';

// Auth
import authImage from './auth.png';
import googleLogo from './google-logo.png';

const images = {
  payment: [visa, mastercard, paypal, applepay, googlepay],
  brands: [versace, zara, gucci, prada, calvinKlein],
  banners: [banner1, banner2, banner3, banner4, banner5],
  rating: {
    rating3,
    rating4,
    rating5,
    rating3dot5,
    rating4dot5,
  },
  dressStyle: {
    gym,
    party,
    casual,
    formal,
  },
  stores: {
    store1,
    store2,
    store3,
    store4,
    store5,
    store6,
    store7,
    store8,
  },
  models: {
    model1,
    model2,
  },
  auth: {
    authImage,
    googleLogo,
  },
};

// Logic chọn ảnh rating dựa trên giá trị rating
export const getRatingImage = (rating) => {
  const ratingMap = {
    3.0: images.rating.rating3,
    3.5: images.rating.rating3dot5,
    4.0: images.rating.rating4,
    4.5: images.rating.rating4dot5,
    5.0: images.rating.rating5,
  };
  // Làm tròn rating về số thập phân gần nhất (0.5) để khớp với key trong ratingMap
  const roundedRating = Math.round(rating * 2) / 2;
  return ratingMap[roundedRating] || images.rating.rating3; // Mặc định là rating3 nếu không khớp
};

export default images;
