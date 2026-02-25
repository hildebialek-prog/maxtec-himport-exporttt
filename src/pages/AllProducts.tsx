import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Grid2X2,
  Rows4,
  Filter,
  Search,
  Sparkles,
  Star,
  ChevronDown,
  X,
  SlidersHorizontal,
  TrendingUp,
  Package,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/ProductCard";
import { products, ProductCategory } from "@/data/products";

const categoryLabels: Record<ProductCategory, string> = {
  men: "Men's Collection",
  women: "Women's Collection",
  accessories: "Accessories",
  "tech-gear": "Tech Gear",
  workspace: "Workspace Essentials",
  "creator-studio": "Creator Studio",
  "smart-tools": "Smart Tools",
};

type SortOption = "featured" | "rating" | "newest" | "alphabetical" | "price-low" | "price-high";

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [onlyNew, setOnlyNew] = useState(false);
  const [onlyOnSale, setOnlyOnSale] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          product.fullDescription.toLowerCase().includes(query) ||
          categoryLabels[product.category].toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // New filter
      if (onlyNew && !product.isNew) {
        return false;
      }

      // Sale filter
      if (onlyOnSale && !product.onSale) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && product.rating < minRating) {
        return false;
      }

      return true;
    });

    // Sort products
    const sorted = [...filtered];
    sorted.sort((a, b) => {
      switch (sortOption) {
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return Number(b.isNew) - Number(a.isNew);
        case "alphabetical":
          return a.name.localeCompare(b.name);
        case "price-low":
          return (a.onSale ? a.salePrice || a.price : a.price) - (b.onSale ? b.salePrice || b.price : b.price);
        case "price-high":
          return (b.onSale ? b.salePrice || b.price : b.price) - (a.onSale ? a.salePrice || a.price : a.price);
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchQuery, selectedCategories, onlyNew, onlyOnSale, minRating, sortOption]);

  const toggleCategory = (category: ProductCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setOnlyNew(false);
    setOnlyOnSale(false);
    setMinRating(0);
    setSortOption("featured");
  };

  const hasActiveFilters =
    searchQuery.trim() ||
    selectedCategories.length > 0 ||
    onlyNew ||
    onlyOnSale ||
    minRating > 0 ||
    sortOption !== "featured";

  return (
    <div className="relative overflow-hidden min-h-screen" style={{
      background: `linear-gradient(to bottom, 
        rgba(15, 23, 42, 0.98) 0%, 
        rgba(30, 41, 59, 0.98) 50%, 
        rgba(15, 23, 42, 0.98) 100%),
        linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)`,
      backdropFilter: "blur(16px)",
    }}>
      {/* Background layers with neon effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated holographic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/8 via-blue-600/8 via-purple-600/8 to-pink-600/8 animate-gradient-xy-hero opacity-50" />
        
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-cyan-500/12 blur-[120px] animate-float" />
        <div className="absolute top-48 -left-32 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px] animate-float-delayed" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-500/8 blur-[100px] animate-orb-float-hero-1" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[length:220px_220px] opacity-30" />
      </div>

      {/* Neon border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 via-purple-400/50 to-transparent" />
      
      <div className="section-container relative z-10 py-12 lg:py-20">
        {/* Hero Section */}
        <div ref={sectionRef} className="text-center mb-12 lg:mb-16 animate-fade-in select-none cursor-default">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(56,189,248,0.3)] mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400 animate-sparkle" />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
              Complete Collection
            </span>
            <Package className="h-4 w-4 text-purple-400 animate-sparkle" />
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
            All Products
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our complete collection of premium fashion and cutting-edge technology products. 
            Find exactly what you're looking for with our advanced filters and search.
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          {[
            { icon: Package, label: "Total Products", value: products.length, color: "cyan" },
            { icon: TrendingUp, label: "Showing", value: filteredProducts.length, color: "purple" },
            { icon: Star, label: "Avg Rating", value: (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1), color: "blue" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              cyan: "border-cyan-400/30 bg-cyan-500/20 text-cyan-300",
              purple: "border-purple-400/30 bg-purple-500/20 text-purple-300",
              blue: "border-blue-400/30 bg-blue-500/20 text-blue-300",
            };
            return (
              <div
                key={stat.label}
                className={`group relative rounded-2xl border ${colorClasses[stat.color as keyof typeof colorClasses]} backdrop-blur-xl p-4 shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300 hover:scale-105`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-cyan-400/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search and Controls Bar */}
        <div className={`mb-8 space-y-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`} style={{ transitionDelay: "200ms" }}>
          {/* Search Bar */}
          <div className="relative group/search">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400/70 pointer-events-none z-10" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, description, or category..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 backdrop-blur-xl border-2 border-cyan-400/40 rounded-xl text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/60 transition-all duration-300 focus:bg-slate-900/95 focus:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                <X className="h-4 w-4 text-cyan-400" />
              </button>
            )}
          </div>

          {/* Controls Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-cyan-500/30 text-xs font-bold">
                  {[
                    searchQuery && 1,
                    selectedCategories.length,
                    onlyNew && 1,
                    onlyOnSale && 1,
                    minRating > 0 && 1,
                  ].filter(Boolean).length}
                </span>
              )}
            </Button>

            {/* Sort and View Mode */}
            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <div className="relative group/sort">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="appearance-none pl-4 pr-10 py-2.5 bg-slate-900/80 backdrop-blur-xl border-2 border-cyan-400/30 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/60 transition-all duration-300 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Highest Rated</option>
                  <option value="alphabetical">A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 p-1 rounded-xl border-2 border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                      : "text-slate-400 hover:text-cyan-300"
                  }`}
                >
                  <Grid2X2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                      : "text-slate-400 hover:text-cyan-300"
                  }`}
                >
                  <Rows4 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 p-4 rounded-xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur-xl">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/30 text-sm text-cyan-300">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="hover:text-cyan-200">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              )}
              {selectedCategories.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-400/30 text-sm text-purple-300"
                >
                  {categoryLabels[cat]}
                  <button onClick={() => toggleCategory(cat)} className="hover:text-purple-200">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              ))}
              {onlyNew && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/20 border border-blue-400/30 text-sm text-blue-300">
                  New Only
                  <button onClick={() => setOnlyNew(false)} className="hover:text-blue-200">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              )}
              {onlyOnSale && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/20 border border-pink-400/30 text-sm text-pink-300">
                  On Sale
                  <button onClick={() => setOnlyOnSale(false)} className="hover:text-pink-200">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              )}
              {minRating > 0 && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-500/20 border border-yellow-400/30 text-sm text-yellow-300">
                  {minRating}+ Stars
                  <button onClick={() => setMinRating(0)} className="hover:text-yellow-200">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="ml-auto px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300 hover:bg-slate-800/80 hover:text-white transition-colors"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className={`mb-8 rounded-2xl border-2 border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl p-6 shadow-[0_25px_80px_rgba(56,189,248,0.3)] transition-all duration-500 ${
            showFilters ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-bold text-cyan-300 mb-4 uppercase tracking-wider">Categories</h3>
                <div className="space-y-2">
                  {(Object.keys(categoryLabels) as ProductCategory[]).map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer group/item"
                    >
                      <Checkbox
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                        className="border-cyan-400/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-400"
                      />
                      <span className="text-sm text-slate-300 group-hover/item:text-cyan-300 transition-colors">
                        {categoryLabels[category]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status Filters */}
              <div>
                <h3 className="text-sm font-bold text-purple-300 mb-4 uppercase tracking-wider">Status</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer group/item">
                    <Checkbox
                      checked={onlyNew}
                      onCheckedChange={(checked) => setOnlyNew(checked === true)}
                      className="border-purple-400/30 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400"
                    />
                    <span className="text-sm text-slate-300 group-hover/item:text-purple-300 transition-colors">
                      New Arrivals Only
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group/item">
                    <Checkbox
                      checked={onlyOnSale}
                      onCheckedChange={(checked) => setOnlyOnSale(checked === true)}
                      className="border-purple-400/30 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400"
                    />
                    <span className="text-sm text-slate-300 group-hover/item:text-purple-300 transition-colors">
                      On Sale Only
                    </span>
                  </label>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="text-sm font-bold text-blue-300 mb-4 uppercase tracking-wider">Minimum Rating</h3>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-2 cursor-pointer group/item"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="w-4 h-4 text-blue-500 bg-slate-800 border-blue-400/30 focus:ring-blue-500/50"
                      />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${
                              i < rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-slate-700 text-slate-700"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-slate-300 group-hover/item:text-blue-300 transition-colors ml-1">
                          {rating}+
                        </span>
                      </div>
                    </label>
                  ))}
                  <button
                    onClick={() => setMinRating(0)}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors mt-2"
                  >
                    Clear rating filter
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-bold text-pink-300 mb-4 uppercase tracking-wider">Quick Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300 hover:bg-slate-800/80 hover:text-white transition-colors text-left"
                  >
                    Clear All Filters
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/30 text-sm text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`} style={{ transitionDelay: "300ms" }}>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group/product-wrapper relative transition-all duration-700"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover/product-wrapper:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                    
                    <div className="relative bg-slate-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-xl overflow-hidden shadow-lg group-hover/product-wrapper:shadow-2xl transition-all duration-500 group-hover/product-wrapper:scale-[1.02] group-hover/product-wrapper:-translate-y-1">
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        hoverImage={product.hoverImage}
                        category={categoryLabels[product.category]}
                        isNew={product.isNew}
                        onSale={product.onSale}
                        salePrice={product.salePrice}
                        hidePrice
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product, index) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className={`group/product block relative rounded-2xl border border-cyan-400/30 bg-slate-900/90 backdrop-blur-xl p-4 lg:p-6 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:scale-[1.01]`}
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {/* Item glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative flex items-center gap-6 z-10">
                      {/* Image */}
                      <div className="relative flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden border-2 border-cyan-400/20 group-hover/product:border-cyan-400/50 transition-all duration-300">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover/product:scale-110 transition-transform duration-300"
                        />
                        {product.isNew && (
                          <div className="absolute top-1 left-1 bg-cyan-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg">
                            NEW
                          </div>
                        )}
                        {product.onSale && (
                          <div className="absolute top-1 right-1 bg-purple-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg">
                            SALE
                          </div>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="text-lg lg:text-xl font-bold text-white mb-1 group-hover/product:text-cyan-200 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm text-slate-400 line-clamp-2">
                              {product.shortDescription}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-sm font-bold">{product.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                          <span className="px-2 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/30 text-cyan-300">
                            {categoryLabels[product.category]}
                          </span>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex-shrink-0 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
                        <ChevronDown className="h-5 w-5 text-cyan-400 rotate-[-90deg]" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 lg:py-24">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
              <Search className="relative h-16 w-16 text-slate-500 mx-auto opacity-60" />
            </div>
            <h3 className="text-2xl font-bold text-slate-300 mb-2">No products found</h3>
            <p className="text-slate-400 mb-6">Try adjusting your filters or search terms</p>
            <Button
              onClick={clearFilters}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.4)]"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-xy-hero {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(8px);
          }
          66% {
            transform: translateY(8px) translateX(-8px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(8px) translateX(-8px);
          }
          66% {
            transform: translateY(-15px) translateX(8px);
          }
        }
        @keyframes orb-float-hero-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        .animate-gradient-xy-hero {
          background-size: 200% 200%;
          animation: gradient-xy-hero 15s ease infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-orb-float-hero-1 {
          animation: orb-float-hero-1 20s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AllProducts;
