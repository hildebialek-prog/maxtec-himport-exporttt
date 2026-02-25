import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  ChevronDown,
  Sparkles,
  Cpu,
  Monitor,
  Video,
  Wrench,
  Zap,
  Star,
  Loader2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { products, Product, ProductCategory } from "@/data/products";

const categoryLabels: Record<ProductCategory, string> = {
  men: "Men",
  women: "Women",
  accessories: "Accessories",
  "tech-gear": "Tech Gear",
  workspace: "Workspace",
  "creator-studio": "Creator Studio",
  "smart-tools": "Smart Tools",
};

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for interactive background effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const header = headerRef.current;
    if (header) {
      header.addEventListener("mousemove", handleMouseMove);
      return () => header.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Advanced dynamic particle generation with multiple types
  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const createParticle = (type: "sparkle" | "glow" | "star") => {
      const particle = document.createElement("div");
      const colors = {
        sparkle: "rgba(56, 189, 248, 0.6)",
        glow: "rgba(168, 85, 247, 0.5)",
        star: "rgba(236, 72, 153, 0.4)",
      };

      particle.className = `absolute rounded-full`;
      const size =
        type === "star" ? Math.random() * 3 + 1 : Math.random() * 2 + 0.5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.backgroundColor = colors[type];
      particle.style.boxShadow = `0 0 ${size * 2}px ${colors[type]}`;
      particle.style.animation = `particle-float-header-${type} ${2 + Math.random() * 4}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 6000);
    };

    const interval1 = setInterval(() => createParticle("sparkle"), 300);
    const interval2 = setInterval(() => createParticle("glow"), 500);
    const interval3 = setInterval(() => createParticle("star"), 800);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  // Search functionality with debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      const query = searchQuery.toLowerCase().trim();
      const results = products
        .filter((product) => {
          const nameMatch = product.name.toLowerCase().includes(query);
          const descMatch =
            product.shortDescription.toLowerCase().includes(query) ||
            product.fullDescription.toLowerCase().includes(query);
          const categoryMatch = categoryLabels[product.category]
            .toLowerCase()
            .includes(query);
          return nameMatch || descMatch || categoryMatch;
        })
        .slice(0, 8); // Limit to 8 results

      setSearchResults(results);
      setIsSearching(false);
      setSelectedResultIndex(-1);
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close search on route change
  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  }, [location.pathname]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    if (!searchOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(target) &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(target)
      ) {
        // Don't close if clicking on the search button
        const searchButton = document.querySelector(
          'button[class*="group/search"]',
        );
        if (searchButton && searchButton.contains(target)) {
          return;
        }
        setSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
        setSelectedResultIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  // Keyboard navigation for search results
  useEffect(() => {
    if (!searchOpen || searchResults.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedResultIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedResultIndex((prev) =>
          prev > 0 ? prev - 1 : searchResults.length - 1,
        );
      } else if (e.key === "Enter" && selectedResultIndex >= 0) {
        e.preventDefault();
        const selectedProduct = searchResults[selectedResultIndex];
        navigate(`/product/${selectedProduct.id}`);
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen, searchResults, selectedResultIndex, navigate]);

  // Scroll selected result into view
  useEffect(() => {
    if (selectedResultIndex >= 0 && searchResultsRef.current) {
      const selectedElement = searchResultsRef.current.children[
        selectedResultIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedResultIndex]);

  const clothingMenu = [
    { label: "Men", to: "/category/men", icon: "👔" },
    { label: "Women", to: "/category/women", icon: "👗" },
    { label: "Accessories", to: "/category/accessories", icon: "👜" },
    // { label: "New Arrivals", to: "/shop/clothing/new", icon: "✨" },
    // { label: "Sale", to: "/shop/clothing/sale", icon: "🔥" },
  ];

  const technologyMenu = [
    {
      label: "Tech Gear",
      to: "/category/tech-gear",
      icon: <Cpu className="h-4 w-4 text-accent" />,
    },
    {
      label: "Workspace",
      to: "/category/workspace",
      icon: <Monitor className="h-4 w-4 text-foreground/80" />,
    },
    {
      label: "Creator Studio",
      to: "/category/creator-studio",
      icon: <Video className="h-4 w-4 text-trust" />,
    },
    {
      label: "Smart Tools",
      to: "/category/smart-tools",
      icon: <Wrench className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setSelectedResultIndex(-1);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-[100] transition-all duration-700 ${
          scrolled
            ? "shadow-2xl shadow-cyan-500/20 border-b border-cyan-400/30"
            : "border-b border-cyan-400/20"
        }`}
        style={{
          isolation: "isolate",
          background: scrolled
            ? `linear-gradient(135deg, 
                rgba(15, 23, 42, 0.98) 0%, 
                rgba(30, 41, 59, 0.98) 25%, 
                rgba(51, 65, 85, 0.98) 50%, 
                rgba(30, 41, 59, 0.98) 75%, 
                rgba(15, 23, 42, 0.98) 100%),
                radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.25) 0%, transparent 50%),
                linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)`
            : `linear-gradient(135deg, 
                rgba(15, 23, 42, 0.95) 0%, 
                rgba(30, 41, 59, 0.95) 25%, 
                rgba(51, 65, 85, 0.95) 50%, 
                rgba(30, 41, 59, 0.95) 75%, 
                rgba(15, 23, 42, 0.95) 100%),
                radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.2) 0%, transparent 60%),
                linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)`,
          backdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
        }}
      >
        {/* Background container with overflow hidden */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated holographic gradient background - vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 via-purple-600/10 via-pink-600/10 to-rose-600/10 animate-gradient-xy-header" />

          {/* Dynamic mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.4),transparent_50%)] animate-pulse-slow" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.4),transparent_50%)] animate-pulse-slow-delayed" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)] animate-pulse-slow-delayed-2" />
          </div>

          {/* Animated wave pattern - vibrant */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(56,189,248,0.5)_25%,rgba(168,85,247,0.5)_50%,rgba(236,72,153,0.5)_75%,transparent_100%)] animate-wave-header" />
          </div>

          {/* Dynamic particles container */}
          <div
            ref={particlesRef}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          />

          {/* Glowing orbs with 3D effect - vibrant */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-[5%] w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px] animate-orb-float-header-1" />
            <div className="absolute top-1/2 right-[10%] w-56 h-56 bg-purple-500/15 rounded-full blur-[70px] animate-orb-float-header-2" />
            <div className="absolute top-0 left-1/2 w-60 h-60 bg-blue-500/12 rounded-full blur-[75px] animate-orb-float-header-3" />
            <div className="absolute bottom-0 right-[20%] w-48 h-48 bg-pink-500/12 rounded-full blur-[65px] animate-orb-float-header-4" />
          </div>

          {/* Animated grid pattern - neon */}
          <div className="absolute inset-0 opacity-[0.1]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-shift-header" />
          </div>

          {/* Neon border glow effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-purple-400 to-transparent animate-border-glow-header" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          </div>

          {/* Shimmer effect on scroll - enhanced */}
          {scrolled && (
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(56,189,248,0.4)_50%,transparent_100%)] animate-shimmer-header" />
          )}

          {/* Scanning line effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
          </div>
        </div>

        {/* Content container - no overflow hidden to allow dropdowns */}
        <div
          className="section-container relative z-10"
          style={{ isolation: "isolate" }}
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with neon and 3D effects - Focal Point Design */}
            <Link
              to="/"
              className="flex items-center group relative z-10 h-full"
              aria-label="Home"
            >
              <div className="relative h-full flex items-center">
                {/* Outer glow ring - always visible for prominence */}
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-xl animate-pulse-slow" />

                {/* Inner glow - enhanced */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                {/* Logo image container with professional effects */}
                <div className="relative h-full flex items-center">
                  {/* Glow backdrop for logo - always visible */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/40 via-blue-400/40 via-purple-400/40 to-pink-400/40 opacity-40 group-hover:opacity-100 blur-lg transition-opacity duration-500 rounded-xl" />

                  {/* Logo image with white background - larger and wider */}
                  <div className="relative bg-white rounded-xl shadow-2xl border-[3px] border-cyan-400/40 group-hover:border-cyan-400/90 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(56,189,248,1)] group-hover:scale-[1.03] h-[56px] lg:h-[72px] px-4 lg:px-6 flex items-center justify-center min-w-[140px] lg:min-w-[200px]">
                    {/* White background base */}
                    <div className="absolute inset-0 bg-white rounded-xl" />

                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/40 rounded-xl opacity-95" />

                    {/* Animated pulse effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 rounded-xl animate-logo-pulse opacity-60" />

                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 rounded-xl" />

                    {/* Animated border glow - always visible */}
                    <div className="absolute -inset-0.5 rounded-xl border-[3px] border-cyan-400/40 group-hover:border-cyan-400/90 transition-all duration-500 pointer-events-none opacity-60 group-hover:opacity-100 animate-border-pulse" />

                    {/* Logo image - significantly larger and wider */}
                    <div className="relative z-10 flex items-center justify-center h-full w-full">
                      <img
                        src="/logo-maxtech.png"
                        alt="MAXTECH Logo"
                        className="h-[44px] w-auto sm:h-[52px] md:h-[56px] lg:h-[64px] xl:h-[68px] object-contain transition-all duration-500 group-hover:brightness-110 group-hover:scale-[1.08] group-hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.9)]"
                        style={{
                          filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        onError={(e) => {
                          // Fallback to text if image not found
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const fallback =
                            target.parentElement?.querySelector(
                              ".logo-fallback",
                            );
                          if (fallback) {
                            (fallback as HTMLElement).style.display = "flex";
                          }
                        }}
                      />
                    </div>

                    {/* Fallback text logo (hidden by default, shown if image fails to load) */}
                    <div className="logo-fallback hidden items-center justify-center h-full w-full font-serif text-xl sm:text-2xl lg:text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent px-3 group-hover:from-cyan-500 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-500">
                      MAXTECH
                    </div>
                  </div>

                  {/* Outer animated border glow - always visible */}
                  <div className="absolute -inset-1 rounded-xl border-2 border-cyan-400/30 group-hover:border-cyan-400/70 transition-all duration-500 pointer-events-none opacity-50 group-hover:opacity-100 blur-sm animate-border-glow" />

                  {/* Floating particles effect */}
                  <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-float-particle-1" />
                    <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float-particle-2" />
                    <div className="absolute top-1/2 left-0 w-1 h-1 bg-purple-400 rounded-full animate-float-particle-3" />
                  </div>
                </div>
              </div>

              {/* Sparkle icon with rotation - positioned next to logo */}
              <div className="relative ml-3 hidden sm:block">
                <div className="absolute inset-0 bg-cyan-400/40 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
                <Sparkles className="relative h-5 w-5 lg:h-6 lg:w-6 text-cyan-400 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:animate-spin-slow group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,1)]" />
              </div>

              {/* Zap icon */}
              <Zap className="h-4 w-4 lg:h-5 lg:w-5 text-purple-400 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce group-hover:scale-125 hidden sm:block ml-2" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 relative z-50">
              {/* Clothing Dropdown */}
              <div
                className="relative z-50"
                onMouseEnter={() => setActiveDropdown("clothing")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to="/category/men"
                  className="relative px-4 py-2.5 text-sm font-bold tracking-wider transition-all duration-500 group/nav rounded-lg"
                  activeClassName="text-cyan-400"
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover/nav:opacity-100 rounded-lg transition-opacity duration-500 blur-sm" />

                  {/* Border glow */}
                  <div className="absolute inset-0 border border-cyan-400/0 group-hover/nav:border-cyan-400/50 rounded-lg transition-all duration-500" />

                  <span className="relative z-10 text-slate-300 group-hover/nav:text-cyan-300 transition-colors duration-300 group-hover/nav:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
                    CLOTHING
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 group-hover/nav:w-full transition-all duration-500 rounded-full" />
                  <ChevronDown
                    className={`inline-block h-3.5 w-3.5 ml-1.5 text-cyan-400 transition-all duration-500 ${
                      activeDropdown === "clothing"
                        ? "rotate-180 scale-125"
                        : "group-hover/nav:scale-125"
                    }`}
                  />
                </NavLink>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-300 z-[9999] ${
                    activeDropdown === "clothing"
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <div
                    className="relative rounded-2xl p-4 w-72 mt-2 space-y-1 overflow-visible group/dropdown"
                    style={{ zIndex: 9999 }}
                  >
                    {/* Enhanced background with better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-900/98 to-slate-800/95 backdrop-blur-2xl rounded-2xl border border-cyan-400/40 shadow-[0_25px_80px_rgba(56,189,248,0.5)]" />

                    {/* Bright overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/3 to-white/5 rounded-2xl" />

                    {/* Neon accent overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 rounded-2xl opacity-50" />

                    {/* Outer glow - enhanced */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-60 group-hover/dropdown:opacity-100 transition-opacity duration-700" />

                    {/* Animated border with glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50 group-hover/dropdown:border-cyan-400/80 transition-all duration-500 shadow-[0_0_20px_rgba(56,189,248,0.4)]" />

                    {/* Inner glow ring */}
                    <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/dropdown:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 space-y-1">
                      {clothingMenu.map((item, index) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-500/20 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-blue-500/15 hover:to-purple-500/20 transition-all duration-500 group/item relative overflow-hidden backdrop-blur-sm"
                          style={{
                            animationDelay: `${index * 50}ms`,
                          }}
                        >
                          {/* Item background for better visibility */}
                          <div className="absolute inset-0 bg-slate-800/30 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />

                          {/* Item glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 rounded-xl" />

                          {/* Item border glow */}
                          <div className="absolute inset-0 border border-cyan-400/0 group-hover/item:border-cyan-400/50 rounded-xl transition-all duration-500 shadow-[0_0_15px_rgba(56,189,248,0.3)]" />

                          <span className="text-xl group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                            {item.icon}
                          </span>
                          <span className="flex-1 font-bold text-sm text-slate-200 group-hover/item:text-cyan-200 transition-colors duration-300 group-hover/item:drop-shadow-[0_0_10px_rgba(56,189,248,0.9)] relative z-10">
                            {item.label}
                          </span>
                          <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/item:w-8 transition-all duration-500 rounded-full relative z-10 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Dropdown */}
              <div
                className="relative z-50"
                onMouseEnter={() => setActiveDropdown("technology")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to="/category/tech-gear"
                  className="relative px-4 py-2.5 text-sm font-bold tracking-wider transition-all duration-500 group/nav rounded-lg"
                  activeClassName="text-purple-400"
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover/nav:opacity-100 rounded-lg transition-opacity duration-500 blur-sm" />

                  {/* Border glow */}
                  <div className="absolute inset-0 border border-purple-400/0 group-hover/nav:border-purple-400/50 rounded-lg transition-all duration-500" />

                  <span className="relative z-10 text-slate-300 group-hover/nav:text-purple-300 transition-colors duration-300 group-hover/nav:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                    TECHNOLOGY
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 group-hover/nav:w-full transition-all duration-500 rounded-full" />
                  <ChevronDown
                    className={`inline-block h-3.5 w-3.5 ml-1.5 text-purple-400 transition-all duration-500 ${
                      activeDropdown === "technology"
                        ? "rotate-180 scale-125"
                        : "group-hover/nav:scale-125"
                    }`}
                  />
                </NavLink>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-300 z-[9999] ${
                    activeDropdown === "technology"
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{
                    isolation: "isolate",
                  }}
                >
                  <div
                    className="relative rounded-2xl p-4 w-72 mt-2 space-y-1 overflow-visible group/dropdown"
                    style={{ zIndex: 9999 }}
                  >
                    {/* Enhanced background with better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-900/98 to-slate-800/95 backdrop-blur-2xl rounded-2xl border border-purple-400/40 shadow-[0_25px_80px_rgba(168,85,247,0.5)]" />

                    {/* Bright overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/3 to-white/5 rounded-2xl" />

                    {/* Neon accent overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-rose-500/15 rounded-2xl opacity-50" />

                    {/* Outer glow - enhanced */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-rose-500/30 rounded-2xl blur-xl opacity-60 group-hover/dropdown:opacity-100 transition-opacity duration-700" />

                    {/* Animated border with glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 group-hover/dropdown:border-purple-400/80 transition-all duration-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]" />

                    {/* Inner glow ring */}
                    <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/dropdown:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 space-y-1">
                      {technologyMenu.map((item, index) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-500/20 hover:bg-gradient-to-r hover:from-purple-500/20 hover:via-pink-500/15 hover:to-rose-500/20 transition-all duration-500 group/item relative overflow-hidden backdrop-blur-sm"
                          style={{
                            animationDelay: `${index * 50}ms`,
                          }}
                        >
                          {/* Item background for better visibility */}
                          <div className="absolute inset-0 bg-slate-800/30 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />

                          {/* Item glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 rounded-xl" />

                          {/* Item border glow */}
                          <div className="absolute inset-0 border border-purple-400/0 group-hover/item:border-purple-400/50 rounded-xl transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]" />

                          <span className="relative z-10 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                            {item.icon}
                          </span>
                          <span className="flex-1 font-bold text-sm text-slate-200 group-hover/item:text-purple-200 transition-colors duration-300 group-hover/item:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)] relative z-10">
                            {item.label}
                          </span>
                          <div className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover/item:w-8 transition-all duration-500 rounded-full relative z-10 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Links */}
              {[
                { to: "/about", label: "ABOUT", color: "cyan" },
                { to: "/compliance", label: "COMPLIANCE", color: "blue" },
                { to: "/contact", label: "CONTACT", color: "purple" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2.5 text-sm font-bold tracking-wider transition-all duration-500 group/nav rounded-lg ${
                    link.color === "cyan"
                      ? "active:text-cyan-400"
                      : link.color === "blue"
                        ? "active:text-blue-400"
                        : "active:text-purple-400"
                  }`}
                  activeClassName={
                    link.color === "cyan"
                      ? "text-cyan-400"
                      : link.color === "blue"
                        ? "text-blue-400"
                        : "text-purple-400"
                  }
                >
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      link.color === "cyan"
                        ? "from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
                        : link.color === "blue"
                          ? "from-blue-500/0 via-blue-500/20 to-blue-500/0"
                          : "from-purple-500/0 via-purple-500/20 to-purple-500/0"
                    } opacity-0 group-hover/nav:opacity-100 rounded-lg transition-opacity duration-500 blur-sm`}
                  />

                  {/* Border glow */}
                  <div
                    className={`absolute inset-0 border ${
                      link.color === "cyan"
                        ? "border-cyan-400/0 group-hover/nav:border-cyan-400/50"
                        : link.color === "blue"
                          ? "border-blue-400/0 group-hover/nav:border-blue-400/50"
                          : "border-purple-400/0 group-hover/nav:border-purple-400/50"
                    } rounded-lg transition-all duration-500`}
                  />

                  <span
                    className={`relative z-10 text-slate-300 group-hover/nav:${
                      link.color === "cyan"
                        ? "text-cyan-300"
                        : link.color === "blue"
                          ? "text-blue-300"
                          : "text-purple-300"
                    } transition-colors duration-300 group-hover/nav:drop-shadow-[0_0_8px_${
                      link.color === "cyan"
                        ? "rgba(56,189,248,0.8)"
                        : link.color === "blue"
                          ? "rgba(59,130,246,0.8)"
                          : "rgba(168,85,247,0.8)"
                    }]`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${
                      link.color === "cyan"
                        ? "from-cyan-400 via-blue-400 to-purple-400"
                        : link.color === "blue"
                          ? "from-blue-400 via-cyan-400 to-purple-400"
                          : "from-purple-400 via-pink-400 to-rose-400"
                    } group-hover/nav:w-full transition-all duration-500 rounded-full`}
                  />
                </NavLink>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <div className="relative hidden lg:block z-50">
                {searchOpen ? (
                  <div className="relative animate-slide-in-right">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400/70 pointer-events-none z-10" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products..."
                          className="w-80 pl-10 pr-4 py-2.5 bg-slate-900/95 backdrop-blur-xl border-2 border-cyan-400/40 rounded-xl text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/60 transition-all duration-300 focus:bg-slate-900/98 focus:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              handleSearchClose();
                            }
                          }}
                          onFocus={() => setSelectedResultIndex(-1)}
                        />
                        {isSearching && (
                          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400 animate-spin pointer-events-none" />
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleSearchClose}
                        className="h-9 w-9 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 rounded-lg border border-cyan-400/30"
                      >
                        <X className="h-4 w-4 text-slate-300 hover:text-cyan-400" />
                      </Button>
                    </div>

                    {/* Search Results Dropdown */}
                    {searchQuery.trim() && (
                      <div className="absolute top-full left-0 mt-2 w-80 max-h-[500px] overflow-hidden rounded-2xl border-2 border-cyan-400/50 bg-gradient-to-br from-slate-800/98 via-slate-900/98 to-slate-800/98 backdrop-blur-3xl shadow-[0_30px_100px_rgba(56,189,248,0.6)] z-[9999]">
                        {/* Outer glow - enhanced */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-500/40 rounded-2xl blur-2xl opacity-70" />

                        {/* Main background with better contrast */}
                        <div className="absolute inset-0 bg-slate-900/95 rounded-2xl" />

                        {/* Bright overlay for better readability - enhanced */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/5 to-white/8 rounded-2xl" />

                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_70%)] rounded-2xl" />

                        {/* Neon accent overlay - more subtle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/8 to-purple-500/10 rounded-2xl" />

                        {/* Inner border glow */}
                        <div className="absolute inset-[1px] rounded-2xl border border-cyan-400/20" />

                        <div className="relative z-10 max-h-[500px] overflow-y-auto custom-scrollbar bg-slate-900/30">
                          {isSearching ? (
                            <div className="p-8 text-center bg-slate-900/40">
                              <div className="relative inline-block mb-4">
                                <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full animate-pulse" />
                                <Loader2 className="relative h-8 w-8 text-cyan-400 animate-spin mx-auto drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
                              </div>
                              <p className="text-sm font-bold text-slate-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                                Searching...
                              </p>
                            </div>
                          ) : searchResults.length > 0 ? (
                            <>
                              <div className="p-3 border-b-2 border-cyan-400/30 bg-gradient-to-r from-slate-800/80 via-slate-900/80 to-slate-800/80 backdrop-blur-xl">
                                {/* Header glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/8 to-purple-500/10 opacity-50" />
                                <div className="relative z-10 flex items-center gap-2 text-xs font-bold">
                                  <div className="p-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/30">
                                    <TrendingUp className="h-3.5 w-3.5 text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                                  </div>
                                  <span className="text-cyan-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                                    {searchResults.length}{" "}
                                    {searchResults.length === 1
                                      ? "result"
                                      : "results"}{" "}
                                    found
                                  </span>
                                </div>
                              </div>
                              <div
                                ref={searchResultsRef}
                                className="p-2 bg-slate-900/20"
                              >
                                {searchResults.map((product, index) => {
                                  const isSelected =
                                    index === selectedResultIndex;

                                  return (
                                    <Link
                                      key={product.id}
                                      to={`/product/${product.id}`}
                                      onClick={() => {
                                        setSearchOpen(false);
                                        setSearchQuery("");
                                      }}
                                      className={`group/item relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 mb-1.5 ${
                                        isSelected
                                          ? "bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-purple-500/40 border-2 border-cyan-400/70 shadow-[0_0_25px_rgba(56,189,248,0.5)] scale-[1.02]"
                                          : "bg-slate-800/60 border-2 border-slate-700/50 hover:bg-slate-800/80 hover:border-cyan-400/50"
                                      }`}
                                    >
                                      {/* Item background - enhanced */}
                                      <div
                                        className={`absolute inset-0 rounded-xl ${
                                          isSelected
                                            ? "bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-purple-500/25"
                                            : "bg-slate-800/40 group-hover/item:bg-slate-800/60"
                                        } transition-all duration-300`}
                                      />

                                      {/* Bright overlay for selected */}
                                      {isSelected && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-xl" />
                                      )}

                                      {/* Item glow - enhanced */}
                                      {isSelected && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 rounded-xl opacity-100 shadow-[inset_0_0_20px_rgba(56,189,248,0.3)]" />
                                      )}

                                      {/* Hover glow effect */}
                                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                                      {/* Product Image */}
                                      <div
                                        className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 bg-slate-900/80 backdrop-blur-sm transition-all duration-300 ${
                                          isSelected
                                            ? "border-cyan-400/70 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                                            : "border-slate-700/60 group-hover/item:border-cyan-400/60"
                                        }`}
                                      >
                                        <img
                                          src={product.image}
                                          alt={product.name}
                                          className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                                        />
                                        {/* Image overlay for better contrast */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
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

                                      {/* Product Info */}
                                      <div className="flex-1 min-w-0 relative z-10">
                                        <h4
                                          className={`text-sm font-bold mb-1.5 truncate ${
                                            isSelected
                                              ? "text-cyan-100 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                                              : "text-slate-100 group-hover/item:text-cyan-200"
                                          } transition-colors duration-300`}
                                        >
                                          {product.name}
                                        </h4>
                                        <p
                                          className={`text-xs mb-2 line-clamp-1 ${
                                            isSelected
                                              ? "text-slate-300"
                                              : "text-slate-400 group-hover/item:text-slate-300"
                                          } transition-colors duration-300`}
                                        >
                                          {product.shortDescription}
                                        </p>
                                        <div className="flex items-center gap-2">
                                          <span
                                            className={`text-xs px-2 py-0.5 rounded-md border ${
                                              isSelected
                                                ? "text-cyan-200 border-cyan-400/40 bg-cyan-500/10"
                                                : "text-slate-400 border-slate-700/50 bg-slate-800/50 group-hover/item:text-slate-300 group-hover/item:border-cyan-400/30"
                                            } transition-all duration-300`}
                                          >
                                            {categoryLabels[product.category]}
                                          </span>
                                        </div>
                                      </div>

                                      {/* Arrow indicator */}
                                      <div
                                        className={`flex-shrink-0 transition-all duration-300 ${
                                          isSelected
                                            ? "translate-x-1 opacity-100"
                                            : "translate-x-0 opacity-0 group-hover/item:opacity-100"
                                        }`}
                                      >
                                        <ChevronDown className="h-4 w-4 text-cyan-400 rotate-[-90deg]" />
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </>
                          ) : (
                            <div className="p-8 text-center bg-slate-900/40">
                              <div className="relative inline-block mb-4">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
                                <Search className="relative h-10 w-10 text-slate-400 mx-auto opacity-60" />
                              </div>
                              <p className="text-sm font-bold text-slate-300 mb-1 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                                No results found
                              </p>
                              <p className="text-xs text-slate-400">
                                Try a different search term
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSearchToggle}
                    className="h-10 w-10 hover:bg-cyan-500/20 transition-all duration-500 hover:scale-110 rounded-lg group/search relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 opacity-0 group-hover/search:opacity-100 transition-opacity duration-500" />
                    <Search className="relative h-5 w-5 text-slate-300 group-hover/search:text-cyan-400 transition-all duration-500 group-hover/search:scale-125 group-hover/search:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  </Button>
                )}
              </div>

              {/* Shopping Cart */}
              {/* <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
              >
                <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute top-1 right-1 h-4 w-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  0
                </span>
              </Button> */}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-10 w-10 relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      mobileMenuOpen
                        ? "opacity-0 rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      mobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden border-t border-cyan-400/30 bg-slate-900/98 backdrop-blur-2xl overflow-hidden transition-all duration-700 relative ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Mobile menu background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(56,189,248,0.15)_50%,transparent_100%)] animate-wave-header" />

          {/* Glowing orbs for mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[70px]" />
          </div>
          <div className="section-container py-6 space-y-1 relative z-10">
            {/* Clothing Mobile Menu */}
            <div className="space-y-1">
              <Link
                to="/category/men"
                className="block px-4 py-3 text-base font-bold rounded-xl hover:bg-cyan-500/10 transition-all duration-500 text-slate-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] relative overflow-hidden group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Clothing</span>
              </Link>
              <div className="pl-6 space-y-1">
                {clothingMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-400 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-500 relative overflow-hidden group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Technology Mobile Menu */}
            <div className="space-y-1">
              <Link
                to="/category/tech-gear"
                className="block px-4 py-3 text-base font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <div className="pl-6 space-y-1">
                {technologyMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-400 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-500 relative overflow-hidden group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            {[
              { to: "/about", label: "About" },
              { to: "/compliance", label: "Compliance & Verification" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-base font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <style>{`
        /* Advanced Gradient Animations */
        @keyframes gradient-xy-header {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        @keyframes wave-header {
          0% { transform: translateX(-100%) translateY(0) scaleY(1); }
          50% { transform: translateX(0%) translateY(-3px) scaleY(1.1); }
          100% { transform: translateX(100%) translateY(0) scaleY(1); }
        }
        
        @keyframes grid-shift-header {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        /* 3D Orb Floating Animations for Header - Enhanced */
        @keyframes orb-float-header-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(20px, -25px) scale(1.1) rotate(90deg); }
          50% { transform: translate(-15px, -20px) scale(0.9) rotate(180deg); }
          75% { transform: translate(10px, 15px) scale(1.05) rotate(270deg); }
        }
        
        @keyframes orb-float-header-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-25px, 20px) scale(1.15) rotate(120deg); }
          66% { transform: translate(15px, -25px) scale(0.85) rotate(240deg); }
        }
        
        @keyframes orb-float-header-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -35px) scale(1.2); }
        }
        
        @keyframes orb-float-header-4 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-20px, 30px) scale(1.1) rotate(180deg); }
        }
        
        /* Particle Effects - Multiple Types */
        @keyframes particle-float-header-sparkle {
          0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px) scale(0) rotate(360deg); opacity: 0; }
        }
        
        @keyframes particle-float-header-glow {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-90px) translateX(-15px) scale(0); opacity: 0; }
        }
        
        @keyframes particle-float-header-star {
          0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110px) translateX(25px) scale(0) rotate(720deg); opacity: 0; }
        }
        
        /* Border Glow Effects - Enhanced */
        @keyframes border-glow-header {
          0%, 100% { opacity: 0.6; transform: scaleX(0.95); filter: brightness(1); }
          50% { opacity: 1; transform: scaleX(1); filter: brightness(1.5); }
        }
        
        /* Shimmer Effect - Enhanced */
        @keyframes shimmer-header {
          0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) skewX(-15deg); opacity: 0; }
        }
        
        /* Scan Line Effect */
        @keyframes scan-line {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        /* Glow Text Neon */
        @keyframes glow-text-neon {
          0%, 100% { text-shadow: 0 0 10px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.3), 0 0 30px rgba(56, 189, 248, 0.2); }
          50% { text-shadow: 0 0 20px rgba(56, 189, 248, 0.8), 0 0 40px rgba(56, 189, 248, 0.6), 0 0 60px rgba(56, 189, 248, 0.4); }
        }
        
        /* Pulse Slow */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        
        @keyframes pulse-slow-delayed-2 {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        /* Spin Slow */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Bounce */
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        /* Logo Pulse Animation */
        @keyframes logo-pulse {
          0%, 100% { opacity: 0.4; transform: scaleX(1); }
          50% { opacity: 0.8; transform: scaleX(1.05); }
        }
        
        /* Border Pulse Animation */
        @keyframes border-pulse {
          0%, 100% { opacity: 0.6; box-shadow: 0 0 10px rgba(56, 189, 248, 0.4); }
          50% { opacity: 1; box-shadow: 0 0 20px rgba(56, 189, 248, 0.8), 0 0 30px rgba(56, 189, 248, 0.6); }
        }
        
        /* Border Glow Animation */
        @keyframes border-glow {
          0%, 100% { opacity: 0.5; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.3); }
        }
        
        /* Floating Particles */
        @keyframes float-particle-1 {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(20px, -30px) scale(1.5); opacity: 0; }
        }
        
        @keyframes float-particle-2 {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-25px, 25px) scale(1.3); opacity: 0; }
        }
        
        @keyframes float-particle-3 {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(30px, 15px) scale(1.4); opacity: 0; }
        }
        
        /* Animation Classes */
        .animate-gradient-xy-header {
          background-size: 400% 400%;
          animation: gradient-xy-header 18s ease infinite;
        }
        
        .animate-wave-header {
          animation: wave-header 10s ease-in-out infinite;
        }
        
        .animate-grid-shift-header {
          animation: grid-shift-header 30s linear infinite;
        }
        
        .animate-orb-float-header-1 {
          animation: orb-float-header-1 14s ease-in-out infinite;
        }
        
        .animate-orb-float-header-2 {
          animation: orb-float-header-2 16s ease-in-out infinite;
        }
        
        .animate-orb-float-header-3 {
          animation: orb-float-header-3 12s ease-in-out infinite;
        }
        
        .animate-orb-float-header-4 {
          animation: orb-float-header-4 18s ease-in-out infinite;
        }
        
        .animate-border-glow-header {
          animation: border-glow-header 2.5s ease-in-out infinite;
        }
        
        .animate-shimmer-header {
          animation: shimmer-header 4s ease-in-out infinite;
        }
        
        .animate-scan-line {
          animation: scan-line 3s ease-in-out infinite;
        }
        
        .animate-glow-text-neon {
          animation: glow-text-neon 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 3.5s ease-in-out infinite 0.5s;
        }
        
        .animate-pulse-slow-delayed-2 {
          animation: pulse-slow-delayed-2 4s ease-in-out infinite 1s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .animate-logo-pulse {
          animation: logo-pulse 3s ease-in-out infinite;
        }
        
        .animate-border-pulse {
          animation: border-pulse 2s ease-in-out infinite;
        }
        
        .animate-border-glow {
          animation: border-glow 2.5s ease-in-out infinite;
        }
        
        .animate-float-particle-1 {
          animation: float-particle-1 3s ease-in-out infinite;
        }
        
        .animate-float-particle-2 {
          animation: float-particle-2 3.5s ease-in-out infinite 0.5s;
        }
        
        .animate-float-particle-3 {
          animation: float-particle-3 4s ease-in-out infinite 1s;
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        
        /* Custom Scrollbar for Search Results */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(56, 189, 248, 0.5), rgba(168, 85, 247, 0.5));
          border-radius: 4px;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(56, 189, 248, 0.7), rgba(168, 85, 247, 0.7));
        }
      `}</style>
    </>
  );
};

export default Header;
