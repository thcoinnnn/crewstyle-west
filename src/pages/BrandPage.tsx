import { useParams, Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const BrandPage = () => {
  const { brand } = useParams<{ brand: string }>();
  
  const category = categories.find(c => c.id === brand);
  const brandProducts = products.filter(p => p.category === brand);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-display text-foreground mb-4">Marca não encontrada</h1>
          <Link to="/" className="text-primary hover:underline">Voltar para a loja</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const brandInfo: Record<string, { title: string; description: string; bgImage: string }> = {
    nike: {
      title: "Nike",
      description: "Just Do It. Os melhores tênis e sneakers da Nike, incluindo Dunk, Air Max e Air Force.",
      bgImage: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=600&fit=crop",
    },
    jordan: {
      title: "Jordan",
      description: "O legado de Michael Jordan continua. Air Jordan 1, 4, 11 e muito mais.",
      bgImage: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=1920&h=600&fit=crop",
    },
    supreme: {
      title: "Supreme",
      description: "Streetwear icônico de Nova York. Camisetas, hoodies e acessórios exclusivos.",
      bgImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&h=600&fit=crop",
    },
    "syna-world": {
      title: "Syna World",
      description: "A marca do Central Cee. Tracksuits, hoodies e camisetas do mundo Syna.",
      bgImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1920&h=600&fit=crop",
    },
    trapstar: {
      title: "Trapstar",
      description: "It's A Secret. Streetwear de Londres com tracksuits e hoodies icônicos.",
      bgImage: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1920&h=600&fit=crop",
    },
    "off-white": {
      title: "Off-White",
      description: "O legado de Virgil Abloh. Alta moda encontra streetwear.",
      bgImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1920&h=600&fit=crop",
    },
    bape: {
      title: "Bape",
      description: "A Bathing Ape. O streetwear japonês mais icônico do mundo.",
      bgImage: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=1920&h=600&fit=crop",
    },
  };

  const info = brandInfo[brand || ""] || {
    title: category.name,
    description: "Explore nossa coleção exclusiva.",
    bgImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&h=600&fit=crop",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${info.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-4">
          <span className="text-6xl mb-4 block">{category.icon}</span>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            {info.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {info.description}
          </p>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a loja
        </Link>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl text-foreground">
            {brandProducts.length} Produtos
          </h2>
        </div>

        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-xl">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default BrandPage;
