import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
