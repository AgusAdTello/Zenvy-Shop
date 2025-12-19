'use client';

import Image from 'next/image';
import Link from 'next/link'; // Importante para la navegación
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
    // Seleccionamos la primera variante por defecto al agregar desde la Home
    const defaultVariant = product.variants[0];

    dispatch(addToCart({
      ...product,
      quantity: 1,
      selectedVariantId: defaultVariant.id,
    }));
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      {/* 1. Imagen del Producto envuelta en Link */}
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <div className="aspect-square relative bg-gray-100 overflow-hidden cursor-pointer">
          <Image 
            src={product.images[0] || "https://via.placeholder.com/400"} 
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* 2. Info del Producto */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Título envuelto en Link para navegación */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 truncate hover:text-indigo-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          {/* Botón de Agregar */}
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