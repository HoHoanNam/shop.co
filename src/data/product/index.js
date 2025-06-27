import images from '~/data/product/assets/imgs/images';

const newArrivals = [
  {
    imageUrl: images.blackTshirt,
    title: 'T-SHIRT WITH TAPE DETAILS',
    description:
      'Trendy cotton T-shirt with bold tape accents. Comfortable, breathable, and perfect for everyday style.',
    rating: 4.5,
    price: 120,
    discount: null,
    colors: ['green', 'blue', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    imageUrl: images.skinnyJeans,
    title: 'SKINNY FIT JEANS',
    description:
      'Slim and stretchy skinny jeans that hug the body for a sleek, modern look. Perfect for day-to-night wear.',
    rating: 3.5,
    price: 208,
    discount: {
      originalPrice: 260,
      percentage: 20,
      newPrice: 208,
    },
    colors: ['green', 'brown', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    imageUrl: images.checkeredShirt,
    title: 'CHECKERED SHIRT',
    description:
      'Classic checkered shirt with a relaxed fit. Versatile, stylish, and perfect for layering or wearing solo.',
    rating: 4.5,
    price: 180,
    discount: null,
    colors: ['green', 'blue', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    imageUrl: images.sleeveTshirt,
    title: 'SLEEVE STRIPED T-SHIRT',
    description: 'Casual T-shirt with sporty sleeve stripes. Soft, breathable, and easy to style for everyday wear.',
    rating: 4.5,
    price: 112,
    discount: {
      originalPrice: 160,
      percentage: 30,
      newPrice: 112,
    },
    colors: ['green', 'brown', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
];

const topSelling = [
  {
    imageUrl: images.verticalShirt,
    title: 'VERTICAL STRIPED SHIRT',
    description:
      'Smart shirt with vertical stripes for a tall, slim look. Lightweight, stylish, and perfect for any occasion.',
    rating: 5.0,
    price: 176,
    discount: {
      originalPrice: 220,
      percentage: 20,
      newPrice: 176,
    },
    colors: ['green', 'blue', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    imageUrl: images.courageTshirt,
    title: 'COURAGE GRAPHIC T-SHIRT',
    description:
      'Bold graphic T-shirt featuring a “Courage” print. Made from soft cotton for all-day comfort and style.',
    rating: 4.0,
    price: 145,
    discount: null,
    colors: ['green', 'brown', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    imageUrl: images.looseShorts,
    title: 'LOOSE FIT BERMUDA SHORTS',
    description: 'Relaxed-fit Bermuda shorts with a comfy, casual vibe. Lightweight and perfect for warm-weather days.',
    rating: 4.0,
    price: 80,
    discount: null,
    colors: ['green', 'blue', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    imageUrl: images.fadedJeans,
    title: 'FADED SKINNY JEANS',
    description: 'Skinny jeans with a stylish faded wash. Stretchy, sleek, and perfect for a modern, laid-back look.',
    rating: 4.5,
    price: 210,
    discount: null,
    colors: ['green', 'brown', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
];

export const products = {
  newArrivals,
  topSelling,
  all: [
    ...newArrivals,
    ...topSelling,
    {
      imageUrl: images.poloTrims,
      title: 'Polo with Contrast Trims',
      description:
        'Classic polo shirt with standout contrast trims. Sleek, refined, and perfect for smart-casual style.',
      rating: 4.0,
      price: 160,
      discount: {
        originalPrice: 200,
        percentage: 20,
        newPrice: 160,
      },
      colors: ['green', 'blue', 'gray'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      imageUrl: images.gradientTshirt,
      title: 'Gradient Graphic T-shirt',
      description:
        'Eye-catching T-shirt with a bold gradient graphic. Soft, breathable, and perfect for standout casual looks.',
      rating: 4.0,
      price: 105,
      discount: {
        originalPrice: 150,
        percentage: 30,
        newPrice: 105,
      },
      colors: ['green', 'brown', 'gray'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      imageUrl: images.poloDetails,
      title: 'Polo with Tipping Details',
      description:
        'Classic polo featuring subtle tipping on the collar and sleeves. Clean, stylish, and perfect for any casual occasion.',
      rating: 5.0,
      price: 280,
      discount: null,
      colors: ['green', 'blue', 'gray'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      imageUrl: images.bstripedTshirt,
      title: 'Black Striped T-shirt',
      description:
        'Sleek black T-shirt with minimal stripe details. Comfortable, versatile, and easy to pair with any outfit.',
      rating: 3.5,
      price: 176,
      discount: null,
      colors: ['green', 'brown', 'gray'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
  ],
};
