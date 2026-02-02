import { ShoppingBag, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Adicionado ao carrinho!",
      description: `${product.name} foi adicionado.`,
    });
  };

  const fallbackImage = "/placeholder.svg";

  const handleNavigateToProduct = () => {
    navigate(`/produto/${product.id}`);
  };

  return (
    <div className="card-product rounded-xl overflow-hidden group cursor-pointer" onClick={handleNavigateToProduct}>
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary animate-pulse">
            <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        )}
        <img 
          src={imageError ? fallbackImage : product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Novo
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Best Seller
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-blood text-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-background/90 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="btn-gold w-full py-3 rounded-lg flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            Adicionar
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.color}
        </p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="price-tag">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
