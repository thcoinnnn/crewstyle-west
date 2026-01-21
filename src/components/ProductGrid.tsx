import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            NOSSA <span className="text-gradient-gold">COLEÇÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Peças exclusivas selecionadas para o verdadeiro estilo das ruas
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-badge flex items-center gap-2 ${
                activeCategory === category.id ? 'active' : ''
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-xl">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
