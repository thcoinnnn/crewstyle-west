import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowLeft, ShoppingBag, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const sizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"];
  const apparelSizes = ["PP", "P", "M", "G", "GG", "XGG"];
  
  // Determine if product is apparel or footwear
  const isApparel = product?.name.toLowerCase().includes("hoodie") || 
                    product?.name.toLowerCase().includes("joggers") ||
                    product?.name.toLowerCase().includes("tee") ||
                    product?.name.toLowerCase().includes("shorts") ||
                    product?.name.toLowerCase().includes("beanie") ||
                    product?.name.toLowerCase().includes("cap") ||
                    product?.name.toLowerCase().includes("tracksuit");
  
  const availableSizes = isApparel ? apparelSizes : sizes;
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <button 
            onClick={() => navigate("/")}
            className="btn-gold px-6 py-3 rounded-lg"
          >
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha um tamanho antes de adicionar ao carrinho.",
        variant: "destructive",
      });
      return;
    }
    
    addItem(product);
    toast({
      title: "Adicionado ao carrinho!",
      description: `${product.name} - Tamanho ${selectedSize}`,
    });
  };
  
  // Find related products from same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container-custom py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        </div>
        
        {/* Product Section */}
        <section className="container-custom pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary sticky top-24">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary animate-pulse">
                    <div className="w-16 h-16 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
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
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="p-3 bg-background/90 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-background/90 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              {/* Category Badge */}
              <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                {product.category.replace("-", " ")}
              </span>
              
              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              
              {/* Color */}
              <p className="text-muted-foreground mb-6">{product.color}</p>
              
              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              
              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Selecione o tamanho</h3>
                  <button className="text-sm text-primary hover:underline">
                    Guia de tamanhos
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  className="btn-gold flex-1 py-4 rounded-xl flex items-center justify-center gap-3 text-lg font-semibold"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Adicionar ao Carrinho
                </button>
              </div>
              
              {/* Features */}
              <div className="space-y-4 py-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Frete Grátis</p>
                    <p className="text-sm text-muted-foreground">Para compras acima de R$ 299</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Autenticidade Garantida</p>
                    <p className="text-sm text-muted-foreground">100% produtos originais</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <RotateCcw className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Troca Facilitada</p>
                    <p className="text-sm text-muted-foreground">Até 30 dias para trocar</p>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="py-6 border-t border-border">
                <h3 className="font-semibold mb-4">Descrição</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Produto original da marca {product.category.replace("-", " ").toUpperCase()}. 
                  Este item combina estilo e conforto, sendo perfeito para o dia a dia ou para 
                  completar seu look streetwear. Confeccionado com materiais de alta qualidade, 
                  garantindo durabilidade e autenticidade.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="container-custom pb-16">
            <h2 className="text-2xl font-bold mb-8">Produtos Relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id}
                  onClick={() => navigate(`/produto/${relatedProduct.id}`)}
                  className="card-product rounded-xl overflow-hidden cursor-pointer group"
                >
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary font-bold mt-2">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
