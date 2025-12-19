'use client';

import { useState, useEffect } from 'react'; // 1. Importamos hooks básicos
import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { useAppSelector } from '@/redux/hooks'; 

export default function Navbar() {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  
  // 2. Creamos un estado para saber si ya estamos en el cliente
  const [mounted, setMounted] = useState(false);

  // 3. useEffect solo corre en el cliente después del primer render
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-black">
              Zenvy<span className="text-indigo-600">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" />
              
              {/* 4. IMPORTANTE: Solo mostramos el badge si mounted es true */}
              {mounted && totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {totalQuantity}
                </span>
              )}
            </Link>
            
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}