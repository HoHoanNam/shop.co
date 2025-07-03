import { v4 as uuidv4 } from 'uuid';
import images from '~/data/products/assets/imgs/images';

const newArrivals = [
  {
    id: uuidv4(), // Tạo UUID ngẫu nhiên
    imageUrl: images.blackTshirt,
    title: 'T-Shirt with Tape Details',
    description:
      'Trendy cotton T-shirt with bold tape accents. Comfortable, breathable, and perfect for everyday style.',
    rating: 4.5,
    price: 120,
    discount: null,
    colors: ['green', 'blue', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    id: uuidv4(),
    imageUrl: images.skinnyJeans,
    title: 'Skinny Fit Jeans',
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
    id: uuidv4(),
    imageUrl: images.checkeredShirt,
    title: 'Checkered Shirt',
    description:
      'Classic checkered shirt with a relaxed fit. Versatile, stylish, and perfect for layering or wearing solo.',
    rating: 4.5,
    price: 180,
    discount: null,
    colors: ['green', 'blue', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    id: uuidv4(),
    imageUrl: images.sleeveTshirt,
    title: 'Sleeve Striped T-shirt',
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
    id: uuidv4(),
    imageUrl: images.verticalShirt,
    title: 'Vertical Striped Shirt',
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
    id: uuidv4(),
    imageUrl: images.courageTshirt,
    title: 'Courage Graphic T-shirt',
    description:
      'Bold graphic T-shirt featuring a “Courage” print. Made from soft cotton for all-day comfort and style.',
    rating: 4.0,
    price: 145,
    discount: null,
    colors: ['green', 'brown', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    id: uuidv4(),
    imageUrl: images.looseShorts,
    title: 'Loose Fit Bermuda Shorts',
    description: 'Relaxed-fit Bermuda shorts with a comfy, casual vibe. Lightweight and perfect for warm-weather days.',
    rating: 4.0,
    price: 80,
    discount: null,
    colors: ['green', 'blue', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
  {
    id: uuidv4(),
    imageUrl: images.fadedJeans,
    title: 'Faded Skinny Jeans',
    description: 'Skinny jeans with a stylish faded wash. Stretchy, sleek, and perfect for a modern, laid-back look.',
    rating: 4.5,
    price: 210,
    discount: null,
    colors: ['green', 'brown', 'gray'],
    sizes: ['small', 'medium', 'large', 'x-large'],
  },
];

const products = {
  newArrivals,
  topSelling,
  all: [
    ...newArrivals,
    ...topSelling,
    {
      id: uuidv4(),
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
      id: uuidv4(),
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
      id: uuidv4(),
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
      id: uuidv4(),
      imageUrl: images.cottonTurtleneck,
      title: 'Organic Cotton Turtleneck',
      description: 'Soft organic cotton turtleneck with subtle stripes, perfect for comfortable and versatile styling.',
      rating: 3.5,
      price: 176,
      discount: null,
      colors: ['green', 'brown', 'gray'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.organicCottonTurtleneck,
      title: 'Cotton Long-Sleeve Turtleneck',
      description:
        'Soft, sustainable organic cotton turtleneck with slim fit. Ideal for layering or cool-weather style with comfort.',
      rating: 4.0,
      price: 85,
      discount: null,
      colors: ['black', 'white', 'beige'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.flannelPant,
      title: 'Wool Flannel Pant',
      description: 'Cozy wool flannel pants with tailored fit. Warm, soft, ideal for cold-weather outfits with style.',
      rating: 4.5,
      price: 213,
      discount: {
        originalPrice: 250,
        percentage: 15,
        newPrice: 213,
      },
      colors: ['charcoal', 'navy', 'olive'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.tailoredBlackPant,
      title: 'Tailored Black Pant',
      description:
        'Sleek tailored black pants with a modern fit. Crafted from smooth fabric, perfect for formal or smart-casual looks.',
      rating: 4.5,
      price: 145,
      discount: {
        originalPrice: 180,
        percentage: 20,
        newPrice: 145,
      },
      colors: ['black'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.blackCardigan,
      title: 'Black Knit Cardigan',
      description:
        'Classic black knit cardigan with button front and pocket details. Soft wool blend, ideal for versatile layering.',
      rating: 4.0,
      price: 130,
      discount: {
        originalPrice: 150,
        percentage: 15,
        newPrice: 130,
      },
      colors: ['black'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.blackMockNeck,
      title: 'Black Mock Neck Top',
      description:
        'Sleek black mock neck top with long sleeves. Made from soft, stretchy fabric, perfect for a minimalist wardrobe.',
      rating: 4.5,
      price: 75,
      discount: null,
      colors: ['black'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.grayBlazer,
      title: 'Gray Wool Blazer',
      description: 'Elegant gray wool blazer with tailored fit. Smooth texture, ideal for professional occasions.',
      rating: 4.0,
      price: 250,
      discount: {
        originalPrice: 300,
        percentage: 15,
        newPrice: 250,
      },
      colors: ['gray'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.beigeTrenchCoat,
      title: 'Beige Trench Coat',
      description:
        'Elegant beige trench coat with a belted waist. Crafted from smooth wool, perfect for chic, all-season wear.',
      rating: 4.5,
      price: 275,
      discount: {
        originalPrice: 330,
        percentage: 15,
        newPrice: 275,
      },
      colors: ['beige'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.beigeKnitCardigan,
      title: 'Beige Knit Cardigan',
      description:
        'Stylish beige knit cardigan with button front and pearl embellishments. Soft wool blend, perfect for elegant layering.',
      rating: 4.0,
      price: 165,
      discount: {
        originalPrice: 200,
        percentage: 15,
        newPrice: 165,
      },
      colors: ['beige'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
    {
      id: uuidv4(),
      imageUrl: images.beigeCableCardigan,
      title: 'Beige Cable Cardigan',
      description: 'Cozy beige cable-knit cardigan with button front. Soft wool blend, ideal for stylish layering.',
      rating: 4.5,
      price: 140,
      discount: {
        originalPrice: 175,
        percentage: 20,
        newPrice: 140,
      },
      colors: ['beige'],
      sizes: ['small', 'medium', 'large', 'x-large'],
    },
  ],
};

export default products;
