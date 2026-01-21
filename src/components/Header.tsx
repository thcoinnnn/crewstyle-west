import { ShoppingBag, Menu, X, User, Search, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-3xl md:text-4xl text-gradient-gold tracking-wider">
              CREWSTYLE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link text-sm">Produtos</button>
            <button onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link text-sm">Nike Tech</button>
            <button onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link text-sm">Jordan</button>
            <Link to="/suporte" className="nav-link text-sm">Suporte</Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:block w-64">
            <SearchBar />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button 
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>

            <Link to="/suporte" className="hidden sm:flex p-2 hover:bg-secondary rounded-lg transition-colors">
              <HelpCircle className="w-5 h-5 text-foreground" />
            </Link>

            <Link 
              to={user ? "/perfil" : "/login"} 
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <User className="w-5 h-5 text-foreground" />
            </Link>

            <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
              <ShoppingBag className="w-5 h-5 text-foreground" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-border animate-fade-in">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button className="nav-link text-sm py-2 text-left" onClick={() => { document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Produtos</button>
              <button className="nav-link text-sm py-2 text-left" onClick={() => { document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Nike Tech</button>
              <button className="nav-link text-sm py-2 text-left" onClick={() => { document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Jordan</button>
              <Link to="/suporte" className="nav-link text-sm py-2" onClick={() => setIsMenuOpen(false)}>Suporte</Link>
              <Link to={user ? "/perfil" : "/login"} className="nav-link text-sm py-2" onClick={() => setIsMenuOpen(false)}>
                {user ? "Meu Perfil" : "Entrar"}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
