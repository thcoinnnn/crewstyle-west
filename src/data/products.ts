// Product images imports - SNEAKERS
import nikeDunkLowPanda from "@/assets/products/nike-dunk-low-panda.jpg";
import nikeAirForce1White from "@/assets/products/nike-air-force-1-white.jpg";
import nikeSbDunkParra from "@/assets/products/nike-sb-dunk-parra.jpg";
import nikeAirMaxTnPlus from "@/assets/products/nike-air-max-tn-plus.jpg";
import nikeVomero5 from "@/assets/products/nike-vomero-5.jpg";
import jordan4Raptors from "@/assets/products/jordan-4-raptors.jpg";
import jordan1Chicago from "@/assets/products/jordan-1-chicago.jpg";
import jordan1LowShadow from "@/assets/products/jordan-1-low-shadow.jpg";
import jordan11Concord from "@/assets/products/jordan-11-concord.jpg";
import jordan4Bred from "@/assets/products/jordan-4-bred.jpg";
import jordan3WhiteCement from "@/assets/products/jordan-3-white-cement.jpg";
// Product images imports - NIKE APPAREL
import nikeTechFleeceHoodieBlack from "@/assets/products/nike-tech-fleece-hoodie-black.jpg";
import nikeTechFleeceHoodieGrey from "@/assets/products/nike-tech-fleece-hoodie-grey.jpg";
import nikeTechFleeceJoggersBlack from "@/assets/products/nike-tech-fleece-joggers-black.jpg";
import nikeTechFleeceJoggersGrey from "@/assets/products/nike-tech-fleece-joggers-grey.jpg";
// Product images imports - SUPREME
import supremeBoxLogoTeeWhite from "@/assets/products/supreme-box-logo-tee-white.jpg";
import supremeGasTeeBlack from "@/assets/products/supreme-gas-tee-black.jpg";
import supremeBoxLogoHoodieGrey from "@/assets/products/supreme-box-logo-hoodie-grey.jpg";
import supremeBeanieBlack from "@/assets/products/supreme-beanie-black.jpg";
import supremeCrossBoxLogoHoodieBlack from "@/assets/products/supreme-cross-box-logo-hoodie-black.jpg";
import supremeBandanaBoxLogoHoodieBlack from "@/assets/products/supreme-bandana-box-logo-hoodie-black.jpg";
import supremeSwarovskiBoxLogoHoodieBlack from "@/assets/products/supreme-swarovski-box-logo-hoodie-black.jpg";
import supremeArabicLogoHoodieBlack from "@/assets/products/supreme-arabic-logo-hoodie-black.jpg";
import supremeSLogoHoodieBlack from "@/assets/products/supreme-s-logo-hoodie-black.jpg";
import supremeMotionLogoHoodieBlack from "@/assets/products/supreme-motion-logo-hoodie-black.jpg";
// Product images imports - BAPE
import bapeSharkHoodieBlue from "@/assets/products/bape-shark-hoodie-blue.jpg";
import bapeSharkHoodieBlack from "@/assets/products/bape-shark-hoodie-black.jpg";
import bapeSharkHoodiePurple from "@/assets/products/bape-shark-hoodie-purple.jpg";
import bapeSharkHoodieGreen from "@/assets/products/bape-shark-hoodie-green.jpg";
import bapeSharkHoodieRed from "@/assets/products/bape-shark-hoodie-red.jpg";
import bapeTigerHoodieBlack from "@/assets/products/bape-tiger-hoodie-black.jpg";
import bapeNewEraCapGreen from "@/assets/products/bape-new-era-cap-green.jpg";
import bapeSharkSweatShortsBlack from "@/assets/products/bape-shark-sweat-shorts-black.jpg";

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
  // NIKE SNEAKERS
  { id: "nike-1", name: "Nike Dunk Low Retro White Black", category: "nike", price: 699, color: "Branco/Preto", image: nikeDunkLowPanda, isBestSeller: true },
  { id: "nike-2", name: "Nike Air Force 1 Low White '07", category: "nike", price: 599, color: "Branco", image: nikeAirForce1White, isBestSeller: true },
  { id: "nike-3", name: "Nike SB Dunk Low Parra", category: "nike", price: 899, originalPrice: 1099, color: "Branco/Multicolor", image: nikeSbDunkParra },
  { id: "nike-4", name: "Nike Air Max Plus Triple Black", category: "nike", price: 849, color: "Preto", image: nikeAirMaxTnPlus },
  { id: "nike-5", name: "Nike Zoom Vomero 5 Platinum Tint", category: "nike", price: 799, color: "Platinum Tint", image: nikeVomero5, isNew: true },
  // NIKE APPAREL
  { id: "nike-6", name: "Nike Tech Fleece Full-Zip Hoodie", category: "nike", price: 549, color: "Preto", image: nikeTechFleeceHoodieBlack, isBestSeller: true },
  { id: "nike-7", name: "Nike Tech Fleece Full-Zip Hoodie", category: "nike", price: 549, color: "Cinza", image: nikeTechFleeceHoodieGrey },
  { id: "nike-8", name: "Nike Tech Fleece Joggers", category: "nike", price: 449, color: "Preto", image: nikeTechFleeceJoggersBlack, isBestSeller: true },
  { id: "nike-9", name: "Nike Tech Fleece Joggers", category: "nike", price: 449, color: "Cinza", image: nikeTechFleeceJoggersGrey },
  // JORDAN
  { id: "jordan-1", name: "Air Jordan 4 Retro Raptors Drake OVO", category: "jordan", price: 829, color: "Preto/Roxo/Vermelho", image: jordan4Raptors, isBestSeller: true },
  { id: "jordan-2", name: "Air Jordan 1 Retro High OG Chicago Lost and Found", category: "jordan", price: 1199, originalPrice: 1399, color: "Vermelho/Branco/Preto", image: jordan1Chicago, isBestSeller: true },
  { id: "jordan-3", name: "Air Jordan 1 Low Shadow Toe", category: "jordan", price: 749, color: "Cinza/Preto/Branco", image: jordan1LowShadow },
  { id: "jordan-4", name: "Air Jordan 11 Retro Concord 2018", category: "jordan", price: 1299, color: "Branco/Preto/Azul", image: jordan11Concord, isNew: true },
  { id: "jordan-5", name: "Air Jordan 4 Retro Bred 2019", category: "jordan", price: 999, color: "Preto/Vermelho", image: jordan4Bred, isBestSeller: true },
  { id: "jordan-6", name: "Air Jordan 3 Retro White Cement Reimagined", category: "jordan", price: 1099, color: "Branco/Cinza/Vermelho", image: jordan3WhiteCement },
  // SUPREME
  { id: "supreme-1", name: "Supreme Box Logo Tee FW23", category: "supreme", price: 449, color: "Branco", image: supremeBoxLogoTeeWhite, isBestSeller: true },
  { id: "supreme-2", name: "Supreme Gas Tee", category: "supreme", price: 349, color: "Preto", image: supremeGasTeeBlack, isNew: true },
  { id: "supreme-3", name: "Supreme Box Logo Hoodie Heather Grey", category: "supreme", price: 799, color: "Cinza", image: supremeBoxLogoHoodieGrey, isBestSeller: true },
  { id: "supreme-4", name: "Supreme New Era Box Logo Beanie FW21", category: "supreme", price: 249, color: "Preto", image: supremeBeanieBlack },
  { id: "supreme-5", name: "Supreme Cross Box Logo Hooded Sweatshirt", category: "supreme", price: 899, color: "Preto", image: supremeCrossBoxLogoHoodieBlack, isNew: true },
  { id: "supreme-6", name: "Supreme Bandana Box Logo Hooded Sweatshirt", category: "supreme", price: 999, originalPrice: 1199, color: "Preto", image: supremeBandanaBoxLogoHoodieBlack, isBestSeller: true },
  { id: "supreme-7", name: "Supreme Swarovski Box Logo Hooded Sweatshirt", category: "supreme", price: 1299, color: "Preto", image: supremeSwarovskiBoxLogoHoodieBlack },
  { id: "supreme-8", name: "Supreme Arabic Logo Hooded Sweatshirt", category: "supreme", price: 749, color: "Preto", image: supremeArabicLogoHoodieBlack },
  { id: "supreme-9", name: "Supreme S Logo Hooded Sweatshirt", category: "supreme", price: 649, color: "Preto", image: supremeSLogoHoodieBlack },
  { id: "supreme-10", name: "Supreme Motion Logo Hooded Sweatshirt", category: "supreme", price: 699, color: "Preto", image: supremeMotionLogoHoodieBlack, isNew: true },
  // BAPE
  { id: "bape-1", name: "BAPE Color Camo Shark Full Zip Hoodie", category: "bape", price: 999, color: "Azul Camo", image: bapeSharkHoodieBlue, isBestSeller: true },
  { id: "bape-2", name: "BAPE Shark Full Zip Hoodie", category: "bape", price: 949, color: "Preto", image: bapeSharkHoodieBlack, isBestSeller: true },
  { id: "bape-3", name: "BAPE Color Camo Shark Full Zip Hoodie", category: "bape", price: 999, color: "Roxo Camo", image: bapeSharkHoodiePurple, isNew: true },
  { id: "bape-4", name: "BAPE 1st Camo Shark Full Zip Hoodie", category: "bape", price: 1049, color: "Verde Camo", image: bapeSharkHoodieGreen },
  { id: "bape-5", name: "BAPE Shark Full Zip Hoodie", category: "bape", price: 949, color: "Vermelho", image: bapeSharkHoodieRed },
  { id: "bape-6", name: "BAPE Tiger Full Zip Hoodie", category: "bape", price: 1099, color: "Preto", image: bapeTigerHoodieBlack, isNew: true },
  { id: "bape-7", name: "BAPE 1st Camo New Era Cap", category: "bape", price: 299, color: "Verde Camo", image: bapeNewEraCapGreen },
  { id: "bape-8", name: "BAPE Shark Sweat Shorts", category: "bape", price: 449, color: "Preto", image: bapeSharkSweatShortsBlack },
  // SYNA WORLD
  { id: "syna-1", name: "Syna World Central Cee Tracksuit", category: "syna-world", price: 649, color: "Preto", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop", isBestSeller: true },
  { id: "syna-2", name: "Syna World x Nemzzz RDT Tee", category: "syna-world", price: 379, color: "Preto", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop", isNew: true },
  // TRAPSTAR
  { id: "trapstar-1", name: "Trapstar Irongate Central Cee Tracksuit", category: "trapstar", price: 879, originalPrice: 949, color: "Preto/Neon", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop", isBestSeller: true },
  { id: "trapstar-2", name: "Trapstar Irongate Shell Tracksuit", category: "trapstar", price: 799, color: "Preto/Teal", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop", isNew: true },
  // OFF-WHITE
  { id: "offwhite-1", name: "Off-White Diag Arrows Slim Tee", category: "off-white", price: 549, color: "Branco", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop", isBestSeller: true },
  { id: "offwhite-2", name: "Off-White Caravaggio Arrow Over Hoodie", category: "off-white", price: 899, color: "Preto", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop", isNew: true },
];

export const categories = [
  { id: "all", name: "Todos", icon: "🔥" },
  { id: "nike", name: "Nike", icon: "👟" },
  { id: "jordan", name: "Jordan", icon: "🏀" },
  { id: "supreme", name: "Supreme", icon: "📦" },
  { id: "bape", name: "Bape", icon: "🦍" },
  { id: "syna-world", name: "Syna World", icon: "🌍" },
  { id: "trapstar", name: "Trapstar", icon: "⭐" },
  { id: "off-white", name: "Off-White", icon: "⚡" },
];
