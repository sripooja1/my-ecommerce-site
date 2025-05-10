import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
  
  if (category !== 'men' && category !== 'women') {
    notFound();
  }

  return {
    title: `${category === 'men' ? "Men's" : "Women's"} Collection - StyleHub`,
    description: `Discover our latest ${category === 'men' ? "men's" : "women's"} fashion items`
  };
}

export default function CategoryPage({ params }: Props) {
  // Validate category
  if (params.category !== 'men' && params.category !== 'women') {
    notFound();
  }

  // Filter products by category
  const categoryProducts = products.filter(
    (product) => product.category === params.category
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {params.category === 'men' ? "Men's Collection" : "Women's Collection"}
          </h1>
          <p className="text-lg text-gray-600">
            Discover our latest {params.category === 'men' ? "men's" : "women's"} fashion items
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            No products found in this category.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 