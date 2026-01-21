import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl md:text-4xl text-gradient-gold tracking-wider">
              CREWSTYLE
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#produtos" className="nav-link text-sm">Produtos</a>
            <a href="#nike-tech" className="nav-link text-sm">Nike Tech</a>
            <a href="#jordan" className="nav-link text-sm">Jordan</a>
            <a href="#off-white" className="nav-link text-sm">Off-White</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
              <ShoppingBag className="w-6 h-6 text-foreground" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#produtos" className="nav-link text-sm py-2" onClick={() => setIsMenuOpen(false)}>Produtos</a>
              <a href="#nike-tech" className="nav-link text-sm py-2" onClick={() => setIsMenuOpen(false)}>Nike Tech</a>
              <a href="#jordan" className="nav-link text-sm py-2" onClick={() => setIsMenuOpen(false)}>Jordan</a>
              <a href="#off-white" className="nav-link text-sm py-2" onClick={() => setIsMenuOpen(false)}>Off-White</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
