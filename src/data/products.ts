export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'men' | 'women';
  subcategory: string;
  image: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: "Men's Classic Fit T-Shirt",
    description: 'Premium cotton t-shirt with a comfortable classic fit. Perfect for everyday wear.',
    price: 29.99,
    category: 'men',
    subcategory: 't-shirts',
    image: '/images/products/mens-tshirt.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy']
  },
  {
    id: '2',
    name: "Women's Summer Dress",
    description: 'Light and flowy summer dress with floral pattern. Perfect for warm weather.',
    price: 49.99,
    category: 'women',
    subcategory: 'dresses',
    image: '/images/products/womens-dress.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Blue', 'Pink', 'Yellow']
  },
  {
    id: '3',
    name: "Men's Slim Fit Jeans",
    description: 'Modern slim fit jeans with stretch comfort. Versatile for any occasion.',
    price: 59.99,
    category: 'men',
    subcategory: 'jeans',
    image: '/images/products/mens-jeans.jpg',
    sizes: ['30x30', '32x30', '34x30', '36x30'],
    colors: ['Blue', 'Black', 'Gray']
  },
  {
    id: '4',
    name: "Women's Blouse",
    description: 'Elegant silk blouse with a modern cut. Perfect for both casual and formal occasions.',
    price: 39.99,
    category: 'women',
    subcategory: 'tops',
    image: '/images/products/womens-blouse.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Black', 'Red']
  },
  {
    id: '5',
    name: "Men's Casual Jacket",
    description: 'Stylish bomber jacket with a modern design. Great for layering in any season.',
    price: 89.99,
    category: 'men',
    subcategory: 'jackets',
    image: '/images/products/mens-jacket.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Olive']
  },
  {
    id: '6',
    name: "Women's High-Waisted Jeans",
    description: 'Trendy high-waisted jeans with a comfortable stretch fit.',
    price: 54.99,
    category: 'women',
    subcategory: 'jeans',
    image: '/images/products/womens-jeans.jpg',
    sizes: ['26', '28', '30', '32'],
    colors: ['Blue', 'Black', 'White']
  },
  {
    id: '7',
    name: "Men's Polo Shirt",
    description: 'Classic polo shirt made from premium piqué cotton. Perfect for smart casual occasions.',
    price: 34.99,
    category: 'men',
    subcategory: 't-shirts',
    image: '/images/products/mens-polo.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Burgundy', 'Forest Green']
  },
  {
    id: '8',
    name: "Women's Cardigan",
    description: 'Soft and cozy knit cardigan with a relaxed fit. Ideal for layering in any season.',
    price: 44.99,
    category: 'women',
    subcategory: 'sweaters',
    image: '/images/products/womens-cardigan.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cream', 'Gray', 'Dusty Rose']
  }
]; 