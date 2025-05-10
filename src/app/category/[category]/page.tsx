import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryProducts = products.filter(
    (product) => product.category === params.category
  );

  const categoryTitle = params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {categoryTitle}'s Collection
          </h1>
          <p className="text-lg text-gray-600">
            Discover our latest {params.category}'s fashion items
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              No products found in this category
            </h2>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 