import ProductCard from "@/components/commerce/ProductCard";
import { Product } from "@/types";

// DATOS DE PRUEBA (Esto luego vendrá de Printful)
const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    name: "Remera Developer Senior",
    description: "Algodón 100% premium para largas sesiones de código.",
    price: 25.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"],
    variants: [{ id: "var_1_m", size: "M", color: "Black", stockStatus: "in_stock" }]
  },
  {
    id: "prod_2",
    name: "Hoodie React.js",
    description: "Mantén tu temperatura constante mientras debuggeas.",
    price: 45.50,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800"],
    variants: [{ id: "var_2_l", size: "L", color: "Navy", stockStatus: "in_stock" }]
  },
  {
    id: "prod_3",
    name: "Gorra Full Stack",
    description: "Protección solar para cuando sales de la cueva.",
    price: 15.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800"],
    variants: [{ id: "var_3_one", size: "One Size", color: "Grey", stockStatus: "in_stock" }]
  }
];

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