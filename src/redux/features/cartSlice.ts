import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/types'; // Importamos tu interfaz PRO

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      
      // Buscamos si ya existe el producto con la MISMA variante (Talla/Color)
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.selectedVariantId === newItem.selectedVariantId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Si es nuevo, lo agregamos.
        // Nota: Aseguramos que quantity sea 1 al entrar
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },

    removeItem: (state, action: PayloadAction<{ id: string; variantId: string }>) => {
      const { id, variantId } = action.payload;
      
      const existingItem = state.items.find(
        (item) => item.id === id && item.selectedVariantId === variantId
      );

      if (existingItem) {
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;
        
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => !(item.id === id && item.selectedVariantId === variantId)
          );
        } else {
          existingItem.quantity--;
        }
      }
    },
    
    // Acción extra: Vaciar carrito (útil para cuando la compra en Stripe sea exitosa)
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    }
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;