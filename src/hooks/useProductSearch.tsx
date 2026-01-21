import { useState, useMemo } from 'react';
import { products, Product } from '@/data/products';

export interface SearchFilters {
  query: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  colors: string[];
  sortBy: 'name' | 'price-asc' | 'price-desc' | 'newest';
  onlyNew: boolean;
  onlyBestSeller: boolean;
  onlySale: boolean;
}

const defaultFilters: SearchFilters = {
  query: '',
  category: 'all',
  minPrice: 0,
  maxPrice: 2000,
  colors: [],
  sortBy: 'name',
  onlyNew: false,
  onlyBestSeller: false,
  onlySale: false,
};

export const useProductSearch = () => {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);

  // Get all unique colors from products
  const availableColors = useMemo(() => {
    const colors = new Set(products.map(p => p.color));
    return Array.from(colors).sort();
  }, []);

  // Get price range
  const priceRange = useMemo(() => {
    const prices = products.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Text search
    if (filters.query) {
      const query = filters.query.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.color.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Price filter
    result = result.filter(
      p => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    // Color filter
    if (filters.colors.length > 0) {
      result = result.filter(p => filters.colors.includes(p.color));
    }

    // Special filters
    if (filters.onlyNew) {
      result = result.filter(p => p.isNew);
    }
    if (filters.onlyBestSeller) {
      result = result.filter(p => p.isBestSeller);
    }
    if (filters.onlySale) {
      result = result.filter(p => p.originalPrice !== undefined);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [filters]);

  const updateFilter = <K extends keyof SearchFilters>(
    key: K,
    value: SearchFilters[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const toggleColor = (color: string) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color],
    }));
  };

  return {
    filters,
    filteredProducts,
    availableColors,
    priceRange,
    updateFilter,
    resetFilters,
    toggleColor,
    totalResults: filteredProducts.length,
  };
};
