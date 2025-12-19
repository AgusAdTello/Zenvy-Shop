'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Check, ShoppingBag, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner'; // Importamos la librería de notificaciones
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
import { MOCK_PRODUCTS } from '@/lib/data'; // Datos centralizados

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  // Buscamos el producto por ID en la lista centralizada
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  // Estados para la selección del usuario
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [isAdded, setIsAdded] = useState(false);

  // Efecto para asegurar que la variante seleccionada se actualice si cambia el producto
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Producto no encontrado</h2>
        <button 
          onClick={() => router.push('/')} 
          className="mt-4 text-indigo-600 hover:underline"
        >
          Volver a la tienda
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    // Ejecutamos la acción de Redux
    dispatch(addToCart({
      ...product,
      quantity: 1,
      selectedVariantId: selectedVariant.id,
    }));

    // LANZAMOS EL TOAST PROFESIONAL
    toast.success(`${product.name} agregado`, {
      description: `Talle: ${selectedVariant.size} - $${product.price.toFixed(2)}`,
      duration: 3000,
    });

    // Cambiamos el estado del botón temporalmente
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Botón para volver atrás */}
      <button 
        onClick={() => router.back()}
        className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
        Volver
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Galería de Imágenes */}
        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
          <Image 
            src={product.images[0]} 
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Información y Compra */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{product.name}</h1>
          <p className="text-2xl text-indigo-600 font-semibold mt-4">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2">
              Descripción
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Selector de Talles / Variantes */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest">
              Seleccionar Talle
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`py-3 text-sm font-bold border-2 rounded-lg transition-all
                    ${selectedVariant?.id === variant.id 
                      ? 'border-black bg-black text-white shadow-md' 
                      : 'border-gray-200 text-gray-900 hover:border-gray-400'}`}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>

          {/* Botón de Acción Principal */}
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`mt-12 w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all
              ${isAdded 
                ? 'bg-green-500 text-white cursor-default' 
                : 'bg-black text-white hover:bg-gray-800 active:scale-[0.98] shadow-lg hover:shadow-xl'}`}
          >
            {isAdded ? (
              <><Check size={20} /> ¡Agregado al carrito!</>
            ) : (
              <><ShoppingBag size={20} /> Añadir al carrito</>
            )}
          </button>

          {/* Información adicional de confianza */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400 uppercase tracking-tighter">
            <span className="flex items-center gap-1">✨ Calidad Premium</span>
            <span className="flex items-center gap-1">🛡️ Pago Seguro</span>
            <span className="flex items-center gap-1">📦 Envío Global</span>
          </div>
        </div>
      </div>
    </main>
  );
}