import { Link } from 'react-router-dom';
import { useProductSearch } from '@/hooks/useProductSearch';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft, Search, SlidersHorizontal, X } from 'lucide-react';

const SearchPage = () => {
  const {
    filters,
    filteredProducts,
    availableColors,
    priceRange,
    updateFilter,
    resetFilters,
    toggleColor,
    totalResults,
  } = useProductSearch();

  const activeFiltersCount = [
    filters.category !== 'all',
    filters.minPrice > priceRange.min || filters.maxPrice < priceRange.max,
    filters.colors.length > 0,
    filters.onlyNew,
    filters.onlyBestSeller,
    filters.onlySale,
  ].filter(Boolean).length;

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Categoria</Label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filters.category === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateFilter('category', cat.id)}
              className="text-xs"
            >
              {cat.icon} {cat.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">
          Preço: R$ {filters.minPrice.toFixed(0)} - R$ {filters.maxPrice.toFixed(0)}
        </Label>
        <Slider
          value={[filters.minPrice, filters.maxPrice]}
          onValueChange={([min, max]) => {
            updateFilter('minPrice', min);
            updateFilter('maxPrice', max);
          }}
          min={priceRange.min}
          max={priceRange.max}
          step={10}
          className="py-4"
        />
      </div>

      {/* Color Filter */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Cor</Label>
        <div className="flex flex-wrap gap-2">
          {availableColors.map((color) => (
            <Badge
              key={color}
              variant={filters.colors.includes(color) ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary/80 transition-colors"
              onClick={() => toggleColor(color)}
            >
              {color}
            </Badge>
          ))}
        </div>
      </div>

      {/* Special Filters */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Filtros especiais</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="onlyNew"
              checked={filters.onlyNew}
              onCheckedChange={(checked) => updateFilter('onlyNew', !!checked)}
            />
            <Label htmlFor="onlyNew" className="cursor-pointer">Novidades</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="onlyBestSeller"
              checked={filters.onlyBestSeller}
              onCheckedChange={(checked) => updateFilter('onlyBestSeller', !!checked)}
            />
            <Label htmlFor="onlyBestSeller" className="cursor-pointer">Mais vendidos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="onlySale"
              checked={filters.onlySale}
              onCheckedChange={(checked) => updateFilter('onlySale', !!checked)}
            />
            <Label htmlFor="onlySale" className="cursor-pointer">Em promoção</Label>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      {activeFiltersCount > 0 && (
        <Button variant="ghost" onClick={resetFilters} className="w-full">
          <X className="w-4 h-4 mr-2" />
          Limpar filtros ({activeFiltersCount})
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-border z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-display font-bold text-gradient-gold">BUSCAR</h1>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar produtos..."
                  value={filters.query}
                  onChange={(e) => updateFilter('query', e.target.value)}
                  className="pl-10 bg-secondary/50"
                />
              </div>

              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden relative">
                    <SlidersHorizontal className="w-5 h-5" />
                    {activeFiltersCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                    <SheetDescription>
                      Refine sua busca usando os filtros abaixo
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FiltersContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort Select */}
              <Select
                value={filters.sortBy}
                onValueChange={(value) => updateFilter('sortBy', value as any)}
              >
                <SelectTrigger className="w-[150px] hidden sm:flex">
                  <SelectValue placeholder="Ordenar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nome</SelectItem>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="newest">Novidades</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 bg-card/50 backdrop-blur-sm rounded-lg border border-border p-4">
                <h2 className="font-semibold mb-4">Filtros</h2>
                <FiltersContent />
              </div>
            </aside>

            {/* Products Grid */}
            <main className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <p className="text-muted-foreground">
                  {totalResults} produto{totalResults !== 1 ? 's' : ''} encontrado{totalResults !== 1 ? 's' : ''}
                </p>
                
                {/* Mobile Sort */}
                <Select
                  value={filters.sortBy}
                  onValueChange={(value) => updateFilter('sortBy', value as any)}
                >
                  <SelectTrigger className="w-[150px] sm:hidden">
                    <SelectValue placeholder="Ordenar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nome</SelectItem>
                    <SelectItem value="price-asc">Menor preço</SelectItem>
                    <SelectItem value="price-desc">Maior preço</SelectItem>
                    <SelectItem value="newest">Novidades</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
                  <p className="text-muted-foreground mb-4">
                    Tente ajustar os filtros ou buscar por outro termo
                  </p>
                  <Button variant="outline" onClick={resetFilters}>
                    Limpar filtros
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
