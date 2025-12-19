import { Product } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    name: "Remera Developer Senior",
    description: "Algodón 100% premium para largas sesiones de código. Diseñada para resistir el café y las noches de debug.",
    price: 25.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"],
    variants: [
      { id: "v1_s", size: "S", color: "Black", stockStatus: "in_stock" },
      { id: "v1_m", size: "M", color: "Black", stockStatus: "in_stock" },
      { id: "v1_l", size: "L", color: "Black", stockStatus: "in_stock" }
    ]
  },
  {
    id: "prod_2",
    name: "Hoodie React.js",
    description: "Mantén tu temperatura constante mientras debuggeas.",
    price: 45.50,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800"],
    variants: [{ id: "var_2_l", size: "L", color: "Navy", stockStatus: "in_stock" }]
  },
  {
    id: "prod_3",
    name: "Gorra Full Stack",
    description: "Protección solar para cuando sales de la cueva.",
    price: 15.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800"],
    variants: [{ id: "var_3_one", size: "One Size", color: "Grey", stockStatus: "in_stock" }]
  }
];