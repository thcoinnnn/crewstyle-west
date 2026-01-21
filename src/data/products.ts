export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  color: string;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
};

export const products: Product[] = [
  // Nike Tech Fleece - Todas as cores
  {
    id: "tech-1",
    name: "Nike Tech Fleece Full Zip",
    category: "nike-tech",
    price: 449.90,
    originalPrice: 599.90,
    color: "Preto",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop",
    isBestSeller: true,
  },
  {
    id: "tech-2",
    name: "Nike Tech Fleece Full Zip",
    category: "nike-tech",
    price: 449.90,
    color: "Cinza",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
  },
  {
    id: "tech-3",
    name: "Nike Tech Fleece Full Zip",
    category: "nike-tech",
    price: 449.90,
    color: "Azul Marinho",
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&h=600&fit=crop",
    isNew: true,
  },
  {
    id: "tech-4",
    name: "Nike Tech Fleece Full Zip",
    category: "nike-tech",
    price: 449.90,
    color: "Verde Militar",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
  },
  {
    id: "tech-5",
    name: "Nike Tech Fleece Full Zip",
    category: "nike-tech",
    price: 449.90,
    color: "Borgonha",
    image: "https://images.unsplash.com/photo-1614975059251-992f11792571?w=600&h=600&fit=crop",
  },
  {
    id: "tech-6",
    name: "Nike Tech Fleece Jogger",
    category: "nike-tech",
    price: 349.90,
    originalPrice: 449.90,
    color: "Preto",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
    isBestSeller: true,
  },
  {
    id: "tech-7",
    name: "Nike Tech Fleece Jogger",
    category: "nike-tech",
    price: 349.90,
    color: "Cinza",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop",
  },
  {
    id: "tech-8",
    name: "Nike Tech Fleece Jogger",
    category: "nike-tech",
    price: 349.90,
    color: "Azul Marinho",
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&h=600&fit=crop",
  },

  // Jordan Sneakers
  {
    id: "jordan-1",
    name: "Air Jordan 1 Retro High OG",
    category: "jordan",
    price: 1299.90,
    color: "Chicago",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
    isBestSeller: true,
  },
  {
    id: "jordan-2",
    name: "Air Jordan 4 Retro",
    category: "jordan",
    price: 1499.90,
    color: "Bred",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
    isNew: true,
  },
  {
    id: "jordan-3",
    name: "Air Jordan 1 Low",
    category: "jordan",
    price: 899.90,
    color: "Shadow",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop",
  },
  {
    id: "jordan-4",
    name: "Air Jordan 11 Retro",
    category: "jordan",
    price: 1699.90,
    color: "Concord",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
  },

  // Off-White Nike
  {
    id: "offwhite-1",
    name: "Off-White x Nike Tee",
    category: "off-white",
    price: 599.90,
    color: "Branco",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
    isNew: true,
  },
  {
    id: "offwhite-2",
    name: "Off-White x Nike Tee",
    category: "off-white",
    price: 599.90,
    color: "Preto",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
  },
  {
    id: "offwhite-3",
    name: "Off-White x Nike Hoodie",
    category: "off-white",
    price: 899.90,
    color: "Cinza",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    isBestSeller: true,
  },

  // Chinelos
  {
    id: "slides-1",
    name: "Nike Victori One Slide",
    category: "chinelos",
    price: 199.90,
    color: "Preto",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=600&fit=crop",
  },
  {
    id: "slides-2",
    name: "Nike Victori One Slide",
    category: "chinelos",
    price: 199.90,
    color: "Branco",
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&h=600&fit=crop",
  },
  {
    id: "slides-3",
    name: "Jordan Hydro Slide",
    category: "chinelos",
    price: 299.90,
    color: "Preto/Vermelho",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop",
  },

  // Balaclavas
  {
    id: "bala-1",
    name: "Balaclava Crew Black",
    category: "balaclavas",
    price: 149.90,
    color: "Preto",
    image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=600&h=600&fit=crop",
    isBestSeller: true,
  },
  {
    id: "bala-2",
    name: "Balaclava Crew Grey",
    category: "balaclavas",
    price: 149.90,
    color: "Cinza",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop",
  },
  {
    id: "bala-3",
    name: "Balaclava Skull Edition",
    category: "balaclavas",
    price: 179.90,
    color: "Preto/Branco",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop",
    isNew: true,
  },

  // Óculos
  {
    id: "glasses-1",
    name: "Óculos Crew Classic",
    category: "oculos",
    price: 249.90,
    color: "Preto/Dourado",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop",
    isBestSeller: true,
  },
  {
    id: "glasses-2",
    name: "Óculos Crew Aviator",
    category: "oculos",
    price: 299.90,
    color: "Dourado",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
  },
  {
    id: "glasses-3",
    name: "Óculos Crew Shield",
    category: "oculos",
    price: 279.90,
    color: "Prata",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=600&fit=crop",
    isNew: true,
  },
];

export const categories = [
  { id: "all", name: "Todos", icon: "🔥" },
  { id: "nike-tech", name: "Nike Tech", icon: "🏃" },
  { id: "jordan", name: "Jordan", icon: "👟" },
  { id: "off-white", name: "Off-White", icon: "⚡" },
  { id: "chinelos", name: "Chinelos", icon: "🩴" },
  { id: "balaclavas", name: "Balaclavas", icon: "🎭" },
  { id: "oculos", name: "Óculos", icon: "🕶️" },
];
