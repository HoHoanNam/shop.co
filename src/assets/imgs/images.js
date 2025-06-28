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

const images = {
  payment: [visa, mastercard, paypal, applepay, googlepay],
  brands: [versace, zara, gucci, prada, calvinKlein],
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
};

export default images;
