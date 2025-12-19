'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { addToCart, removeItem } from '@/redux/features/cartSlice';

export default function CartPage() {
  const { items, totalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <Trash2 className="w-10 h-10 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Tu carrito está vacío</h2>
        <p className="text-gray-500 mt-2 mb-8">Parece que aún no has elegido tu outfit de desarrollador.</p>
        <Link 
          href="/" 
          className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Tu Carrito</h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        
        {/* LISTA DE ITEMS (Izquierda) */}
        <div className="lg:col-span-7">
          <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {items.map((item) => (
              <li key={`${item.id}-${item.selectedVariantId}`} className="flex py-6">
                
                {/* Imagen Miniatura */}
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Detalles */}
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.name}</h3>
                      <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.description}</p>
                    {/* Aquí podrías mostrar la talla/color si la tuvieras en el nombre o variante */}
                    <p className="mt-1 text-xs text-gray-400">Variante: {item.selectedVariantId}</p>
                  </div>
                  
                  <div className="flex flex-1 items-end justify-between text-sm">
                    {/* Controles de Cantidad */}
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => dispatch(removeItem({ id: item.id, variantId: item.selectedVariantId }))}
                        className="p-2 hover:bg-gray-100 text-gray-600"
                      >
                        {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                      </button>
                      <span className="px-2 text-gray-900 font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(addToCart(item))}
                        className="p-2 hover:bg-gray-100 text-gray-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => dispatch(removeItem({ id: item.id, variantId: item.selectedVariantId }))} // Aquí podrías hacer una acción "removeLineItem" que borre todo
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RESUMEN DE PAGO (Derecha) */}
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Resumen del pedido</h2>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="text-base font-medium text-gray-900">Total</div>
              <div className="text-base font-medium text-gray-900">${totalAmount.toFixed(2)}</div>
            </div>
          </div>

          <div className="mt-6">
            <button
              className="w-full flex items-center justify-center gap-2 rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 transition"
              onClick={() => alert("¡Aquí integraremos Stripe en el siguiente paso!")}
            >
              Ir a Pagar <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Envío calculado en el checkout.</p>
          </div>
        </div>

      </div>
    </main>
  );
}