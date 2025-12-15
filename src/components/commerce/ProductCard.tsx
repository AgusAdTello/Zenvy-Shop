'use client';

import Image from 'next/image';
import { Product } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    // Por ahora, simulamos que el usuario elige la primera variante (ej: Talla M)
    // Más adelante haremos un selector de tallas real.
    const defaultVariant = product.variants[0];

    dispatch(addToCart({
      ...product,
      quantity: 1,
      selectedVariantId: defaultVariant.id,
    }));
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Imagen del Producto */}
      <div className="aspect-square relative bg-gray-100 overflow-hidden">
        {/* Nota: Usamos una imagen de placeholder si no hay URL real aún */}
        <Image 
          src={product.images[0] || "https://via.placeholder.com/400"} 
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info del Producto */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          <button 
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all"
          >
            <ShoppingBag size={16} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}