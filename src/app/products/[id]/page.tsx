'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Check, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
// Importamos los datos de prueba (en el futuro esto vendrá de una API)
// Por ahora, como están dentro de page.tsx, los simularemos aquí o 
// podrías moverlos a un archivo /src/lib/data.ts
import { Product } from '@/types';

// Simulamos la búsqueda del producto (esto debería estar en un archivo central de datos)
const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    name: "Remera Developer Senior",
    description: "Algodón 100% premium para largas sesiones de código. Diseñada para resistir el café y las noches de debug.",
    price: 25.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"],
    variants: [
      { id: "v1_s", size: "S", color: "Black", stockStatus: "in_stock" },
      { id: "v1_m", size: "M", color: "Black", stockStatus: "in_stock" },
      { id: "v1_l", size: "L", color: "Black", stockStatus: "in_stock" }
    ]
  },
  // ... (puedes agregar los otros mocks aquí)
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  // Buscamos el producto por ID
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  // Estados para la selección del usuario
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return <div className="p-20 text-center">Producto no encontrado</div>;

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    dispatch(addToCart({
      ...product,
      quantity: 1,
      selectedVariantId: selectedVariant.id,
    }));

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => router.back()}
        className="flex items-center text-gray-500 hover:text-black mb-8 transition"
      >
        <ArrowLeft size={20} className="mr-2" /> Volver
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Galería de Imágenes */}
        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <Image 
            src={product.images[0]} 
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Información y Compra */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl text-indigo-600 font-semibold mt-4">${product.price.toFixed(2)}</p>
          
          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest">Descripción</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Selector de Talles */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest">Seleccionar Talle</h3>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`py-3 text-sm font-bold border-2 rounded-lg transition-all
                    ${selectedVariant?.id === variant.id 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 text-gray-900 hover:border-gray-400'}`}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>

          {/* Botón de Acción */}
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`mt-12 w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all
              ${isAdded ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
          >
            {isAdded ? (
              <><Check size={20} /> ¡Agregado!</>
            ) : (
              <><ShoppingBag size={20} /> Añadir al carrito</>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}