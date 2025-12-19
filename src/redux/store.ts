import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import { loadState, saveState } from './localStorage';

// 1. Combinamos los reducers explícitamente. 
// Esto le da a TypeScript una definición clara del estado.
const rootReducer = combineReducers({
  cart: cartReducer,
});

// 2. Intentamos cargar el estado del localStorage
const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  // Al usar rootReducer arriba, preloadedState ahora encaja perfectamente
  preloadedState: persistedState as any, 
});

// 3. Nos suscribimos para guardar cambios cada vez que el estado cambie
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

// 4. Tipos para usar en toda la app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;