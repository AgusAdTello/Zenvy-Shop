import { Product } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    name: "Remera Developer Senior",
    description: "Algodón 100% premium para largas sesiones de código. Resistente al café y a los bugs nocturnos.",
    price: 25.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800"],
    variants: [
      { id: "v1_s", size: "S", color: "Black", stockStatus: "in_stock" },
      { id: "v1_m", size: "M", color: "Black", stockStatus: "in_stock" },
      { id: "v1_l", size: "L", color: "Black", stockStatus: "in_stock" }
    ]
  },
  {
    id: "prod_2",
    name: "Hoodie React.js",
    description: "Sudadera ultra suave con diseño minimalista de React. Perfecta para el invierno en la oficina.",
    price: 45.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800"],
    variants: [
      { id: "v2_m", size: "M", color: "Navy", stockStatus: "in_stock" },
      { id: "v2_l", size: "L", color: "Navy", stockStatus: "in_stock" }
    ]
  },
  {
    id: "prod_3",
    name: "Mochila Tech Pro",
    description: "Compartimento acolchado para laptop de 16 pulgadas y múltiples bolsillos para cables y gadgets.",
    price: 65.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800"],
    variants: [{ id: "v3_unique", size: "Único", color: "Charcoal", stockStatus: "in_stock" }]
  },
  {
    id: "prod_4",
    name: "Taza 'I Code' 15oz",
    description: "Taza de cerámica de alta calidad. Capacidad extra para sobrevivir a los despliegues de viernes.",
    price: 18.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800"],
    variants: [{ id: "v4_std", size: "Standard", color: "White", stockStatus: "in_stock" }]
  },
  {
    id: "prod_5",
    name: "Sudadera 'Algorithm'",
    description: "Diseño elegante con la definición de algoritmo. Estilo y conocimiento en una sola prenda.",
    price: 42.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800"],
    variants: [
      { id: "v5_s", size: "S", color: "Gray", stockStatus: "in_stock" },
      { id: "v5_m", size: "M", color: "Gray", stockStatus: "in_stock" }
    ]
  },
  {
    id: "prod_6",
    name: "Gorra Full Stack",
    description: "Protección solar con estilo para cuando decides salir de la terminal.",
    price: 22.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800"],
    variants: [{ id: "v6_adj", size: "Ajustable", color: "Black", stockStatus: "in_stock" }]
  }
];