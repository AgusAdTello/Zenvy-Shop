import ProductCard from "@/components/commerce/ProductCard";
import { MOCK_PRODUCTS } from "@/lib/data"; // Importamos los datos centralizados

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Hero Section Simple */}
      <div className="bg-indigo-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Zenvy Shop</h1>
        <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
          Ropa premium para desarrolladores que no se conforman con `localhost`.
        </p>
      </div>

      {/* Grid de Productos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </main>
  );
}