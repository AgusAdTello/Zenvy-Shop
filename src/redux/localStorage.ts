// src/redux/localStorage.ts
export const loadState = () => {
  try {
    // Solo ejecutamos esto en el cliente (navegador)
    if (typeof window === 'undefined') return undefined;

    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    if (typeof window === 'undefined') return;
    
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch {
    // Errores de privacidad o cuota de disco
  }
};