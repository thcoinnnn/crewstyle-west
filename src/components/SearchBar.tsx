import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  className?: string;
  onClose?: () => void;
}

const SearchBar = ({ className, onClose }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = query.length >= 2
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()) ||
            p.color.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(query)}`);
      setQuery('');
      setIsOpen(false);
      onClose?.();
    }
  };

  const handleSuggestionClick = (productName: string) => {
    navigate(`/buscar?q=${encodeURIComponent(productName)}`);
    setQuery('');
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Buscar produtos..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="pl-9 pr-9 bg-secondary/50 w-full"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {suggestions.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSuggestionClick(product.name)}
              className="w-full px-4 py-3 text-left hover:bg-secondary/50 flex items-center gap-3 transition-colors"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {product.color} • R$ {product.price.toFixed(2)}
                </p>
              </div>
            </button>
          ))}
          <button
            onClick={handleSearch}
            className="w-full px-4 py-2 text-sm text-primary hover:bg-secondary/50 text-center transition-colors border-t border-border"
          >
            Ver todos os resultados para "{query}"
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
