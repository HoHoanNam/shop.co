import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShirt,
  faTruck,
  faUserShield,
  faPhoneVolume,
  faRectangleAd,
  faVestPatches,
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    id: uuidv4(),
    icon: <FontAwesomeIcon icon={faShirt} />,
    title: 'Customized and Personalized Products',
    description: 'Design products tailored to your personal style.',
  },
  {
    id: uuidv4(),
    icon: 'faFaceKissWinkHeart',
    icon: <FontAwesomeIcon icon={faVestPatches} />,
    title: 'Styling Advice Service',
    description: 'Professional support to perfect your personal style.',
  },
  {
    id: uuidv4(),
    icon: <FontAwesomeIcon icon={faTruck} />,
    title: 'Fast and Reliable Delivery',
    description: 'Door-to-door delivery with speed and high quality.',
  },
  {
    id: uuidv4(),
    icon: <FontAwesomeIcon icon={faUserShield} />,
    title: 'Flexible Return or Exchange Policy',
    description: 'Easy returns or exchanges when needed.',
  },
  {
    id: uuidv4(),
    icon: <FontAwesomeIcon icon={faRectangleAd} />,
    title: 'Special Promotions and Offers',
    description: 'Exclusive discounts and offers for customers.',
  },
  {
    id: uuidv4(),
    icon: <FontAwesomeIcon icon={faPhoneVolume} />,
    title: '24/7 Customer Support',
    description: 'Dedicated support anytime, anywhere.',
  },
];

export default services;
