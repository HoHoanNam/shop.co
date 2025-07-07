import images from '~/assets/imgs/images';
const { stores: storeList } = images;

const stores = [
  {
    imageUrl: storeList.store1,
    name: 'Market Street Store',
    address: 'Market Street - San Francisco, CA',
    phone: '(415) 123-4567',
    status: 'Opening',
    openingHours: '8 AM - 22 PM',
    rating: 4.5,
  },
  {
    imageUrl: storeList.store2,
    name: 'Union Square Store',
    address: 'Union Square - San Francisco, CA',
    phone: '(415) 234-5678',
    status: 'Opening',
    openingHours: '8 AM - 21 PM',
    rating: 4.0,
  },
  {
    imageUrl: storeList.store3,
    name: 'Fillmore Store',
    address: 'Fillmore St - San Francisco, CA',
    phone: '(415) 345-6789',
    status: 'Temporarily closed',
    openingHours: '8 AM - 23 PM',
    rating: 4.5,
  },
  {
    imageUrl: storeList.store4,
    name: 'Stanford Store',
    address: 'Stanford Shopping Center - Palo Alto, CA',
    phone: '(650) 456-7890',
    status: 'Opening',
    openingHours: '8 AM - 21 PM',
    rating: 5.0,
  },
  {
    imageUrl: storeList.store5,
    name: 'Venice Store',
    address: 'Abbot Kinney - Venice, CA',
    phone: '(310) 567-8901',
    status: 'Coming soon',
    openingHours: '8 AM - 22 PM',
    rating: 4.0,
  },
  {
    imageUrl: storeList.store6,
    name: 'Palisades Store',
    address: 'Pacific Palisades, CA',
    phone: '(310) 678-9012',
    status: 'Opening',
    openingHours: '8 AM - 23 PM',
    rating: 4.5,
  },
  {
    imageUrl: storeList.store7,
    name: 'Boston Store',
    address: 'Newbury St - Boston, MA',
    phone: '(617) 789-0123',
    status: 'Opening',
    openingHours: '8 AM - 21 PM',
    rating: 5.0,
  },
  {
    imageUrl: storeList.store8,
    name: 'Austin Store',
    address: 'Main Street - Austin, TX',
    phone: '(512) 890-1234',
    status: 'Opening',
    openingHours: '8 AM - 22 PM',
    rating: 4.0,
  },
];

export default stores;
