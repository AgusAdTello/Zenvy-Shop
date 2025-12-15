export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  variants: Variant[];
}

export interface Variant {
  id: string;
  size: string;
  color: string;
  stockStatus: 'in_stock' | 'out_of_stock';
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariantId: string;
}