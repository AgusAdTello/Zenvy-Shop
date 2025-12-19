'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Check, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
import { MOCK_PRODUCTS } from '@/lib/data'; // Importamos los datos centralizados

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  // Buscamos el producto por ID en la lista centralizada
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
      {/* ... (el resto del código del componente se mantiene igual) */}
    </main>
  );
}