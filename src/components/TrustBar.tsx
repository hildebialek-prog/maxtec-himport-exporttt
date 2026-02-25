import {
  ShieldCheck,
  Award,
  MapPin,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe2,
  FileText,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TrustBar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const trustItems = [
    {
      icon: ShieldCheck,
      label: "Verified Company",
      value: "Maxtech Import and Export Limited",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    },
    {
      icon: FileText,
      label: "Business Registration",
      value: "79695478",
      gradient: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Award,
      label: "Certified Business",
      value: "ISO 9001:2015 Certified",
      gradient: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
    },
    {
      icon: MapPin,
      label: "Registered Address",
      value: "Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong Kong",
      gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
    },
    {
      icon: Globe2,
      label: "Global Reach",
      value: "Worldwide Shipping & Distribution",
      gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    },
  ];

  useEffect(() => {
    // Entrance animation with stagger
    setIsVisible(true);

    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Smooth infinite marquee animation using CSS transform
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Calculate total width and set animation
    const updateMarquee = () => {
      const firstChild = marquee.firstElementChild as HTMLElement;
      if (!firstChild) return;

      const totalWidth = Array.from(marquee.children).reduce((sum, child) => {
        return sum + (child as HTMLElement).offsetWidth + 32; // 32px for gap-8
      }, 0);

      // Set animation duration based on content width for consistent speed
      const duration = Math.max(30, totalWidth / 30); // 30px per second
      marquee.style.animation = `marquee-scroll ${duration}s linear infinite`;
    };

    // Start animation after a short delay to ensure DOM is ready
    const startDelay = setTimeout(() => {
      updateMarquee();
    }, 1000);

    // Update on window resize
    window.addEventListener("resize", updateMarquee);

    return () => {
      clearTimeout(startDelay);
      window.removeEventListener("resize", updateMarquee);
    };
  }, []);

  // Dynamic particle generation
  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-accent/40 rounded-full";
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 7000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden border-b border-cyan-200/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
      style={{
        background: `linear-gradient(135deg, 
          rgba(14, 165, 233, 0.08) 0%, 
          rgba(59, 130, 246, 0.1) 25%, 
          rgba(147, 51, 234, 0.08) 50%, 
          rgba(236, 72, 153, 0.1) 75%, 
          rgba(14, 165, 233, 0.08) 100%),
          radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.12) 0%, transparent 60%),
          linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)`,
      }}
    >
      {/* Animated holographic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-xy" />

      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_40%)]" />
      </div>

      {/* Animated wave pattern - subtle */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(56,189,248,0.3)_25%,rgba(168,85,247,0.3)_50%,rgba(236,72,153,0.3)_75%,transparent_100%)] animate-wave-slow" />
      </div>

      {/* Dynamic particles container */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      />

      {/* Glowing orbs with 3D effect - subtle for light background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-[10%] w-64 h-64 bg-cyan-400/8 rounded-full blur-[80px] animate-orb-float-1" />
        <div className="absolute top-1/2 right-[15%] w-48 h-48 bg-purple-400/8 rounded-full blur-[60px] animate-orb-float-2" />
        <div className="absolute bottom-0 left-1/2 w-56 h-56 bg-blue-400/6 rounded-full blur-[70px] animate-orb-float-3" />
        <div className="absolute top-0 right-[30%] w-40 h-40 bg-pink-400/6 rounded-full blur-[50px] animate-orb-float-4" />
      </div>

      {/* Animated grid pattern - subtle */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.15)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-shift" />
      </div>

      {/* Subtle border effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent animate-border-glow" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent animate-border-glow-delayed" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Left side - Premium trust badge with glassmorphism */}
          <div
            className={`hidden lg:flex items-center gap-4 flex-shrink-0 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative group/verified">
              {/* Glowing background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-0 group-hover/verified:opacity-60 blur-sm transition-opacity duration-500 animate-pulse-slow" />

              {/* Glassmorphism card with better contrast */}
              <div className="relative flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-slate-200/60 group-hover/verified:border-cyan-400/80 transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-[0_8px_30px_rgba(56,189,248,0.3)]">
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 opacity-0 group-hover/verified:opacity-100 transition-opacity duration-500" />

                {/* Animated sparkle effect */}
                <Sparkles className="relative h-4 w-4 text-cyan-600 animate-sparkle group-hover/verified:animate-spin-slow" />

                <CheckCircle2 className="relative h-4 w-4 text-emerald-600 animate-pulse-subtle group-hover/verified:scale-125 transition-transform duration-300" />

                <span className="relative text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                  VERIFIED
                </span>
              </div>
            </div>

            {/* Animated separator with glow */}
            <div className="relative h-8 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-pulse-vertical" />
            </div>
          </div>

          {/* Center - Smooth infinite marquee */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <div ref={scrollContainerRef} className="relative w-full">
              {/* Gradient fade edges for smooth effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />

              <div
                ref={marqueeRef}
                className="flex items-center gap-8 will-change-transform"
                style={{
                  width: "fit-content",
                }}
              >
                {/* First set of items */}
                {trustItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={`first-${index}`}
                      className="flex items-center gap-4 flex-shrink-0 group"
                    >
                      {/* 3D Card with glassmorphism */}
                      <div className="relative group/card">
                        {/* Holographic border glow */}
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover/card:opacity-60 blur transition-all duration-500`}
                        />

                        {/* Glass card with better contrast */}
                        <div className="relative flex items-center gap-2.5 px-3.5 py-2 bg-white/90 backdrop-blur-xl rounded-xl border border-slate-200/60 group-hover/card:border-cyan-400/80 transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-1 group-hover/card:shadow-[0_8px_32px_rgba(56,189,248,0.25)]">
                          {/* Animated gradient overlay */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl opacity-0 group-hover/card:opacity-30 transition-opacity duration-500`}
                          />

                          {/* Icon with 3D rotation */}
                          <div className="relative z-10">
                            <Icon className="h-4 w-4 text-cyan-600 flex-shrink-0 transition-all duration-500 group-hover/card:scale-150 group-hover/card:rotate-12 group-hover/card:text-cyan-700 animate-icon-float-3d" />
                          </div>

                          {/* Label with gradient text */}
                          <span className="relative z-10 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 hidden sm:inline group-hover/card:text-slate-900 transition-all duration-300">
                            {item.label}:
                          </span>
                        </div>
                      </div>

                      {/* Value text with better contrast */}
                      <span className="text-xs sm:text-sm font-semibold whitespace-nowrap text-slate-800 transition-all duration-300 group-hover:text-cyan-700 group-hover:drop-shadow-[0_2px_4px_rgba(56,189,248,0.2)]">
                        {item.value}
                      </span>

                      {/* Animated separator with particle effect */}
                      <div className="relative h-6 w-px flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse-vertical-glow" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500 rounded-full animate-ping-slow" />
                      </div>
                    </div>
                  );
                })}

                {/* Duplicate set for seamless loop */}
                {trustItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={`second-${index}`}
                      className="flex items-center gap-4 flex-shrink-0 group"
                    >
                      {/* 3D Card with glassmorphism */}
                      <div className="relative group/card">
                        {/* Holographic border glow */}
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover/card:opacity-60 blur transition-all duration-500`}
                        />

                        {/* Glass card with better contrast */}
                        <div className="relative flex items-center gap-2.5 px-3.5 py-2 bg-white/90 backdrop-blur-xl rounded-xl border border-slate-200/60 group-hover/card:border-cyan-400/80 transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-1 group-hover/card:shadow-[0_8px_32px_rgba(56,189,248,0.25)]">
                          {/* Animated gradient overlay */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl opacity-0 group-hover/card:opacity-30 transition-opacity duration-500`}
                          />

                          {/* Icon with 3D rotation */}
                          <div className="relative z-10">
                            <Icon className="h-4 w-4 text-cyan-600 flex-shrink-0 transition-all duration-500 group-hover/card:scale-150 group-hover/card:rotate-12 group-hover/card:text-cyan-700 animate-icon-float-3d" />
                          </div>

                          {/* Label with gradient text */}
                          <span className="relative z-10 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 hidden sm:inline group-hover/card:text-slate-900 transition-all duration-300">
                            {item.label}:
                          </span>
                        </div>
                      </div>

                      {/* Value text with better contrast */}
                      <span className="text-xs sm:text-sm font-semibold whitespace-nowrap text-slate-800 transition-all duration-300 group-hover:text-cyan-700 group-hover:drop-shadow-[0_2px_4px_rgba(56,189,248,0.2)]">
                        {item.value}
                      </span>

                      {/* Animated separator with particle effect */}
                      <div className="relative h-6 w-px flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse-vertical-glow" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500 rounded-full animate-ping-slow" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - Premium trust badge with magnetic effect */}
          <div
            className={`hidden xl:flex items-center gap-3 flex-shrink-0 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {/* Glowing separator */}
            <div className="relative h-8 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-pulse-vertical-glow" />
            </div>

            {/* Premium badge with holographic effect */}
            <div className="relative group/trusted">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-full opacity-0 group-hover/trusted:opacity-60 blur-md transition-opacity duration-500 animate-rotate-gradient" />

              {/* Glass badge with better contrast */}
              <div className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 backdrop-blur-xl rounded-full border border-amber-300/60 group-hover/trusted:border-amber-400/80 transition-all duration-500 hover:scale-115 hover:shadow-[0_8px_40px_rgba(251,191,36,0.4)]">
                {/* Inner shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover/trusted:opacity-100 animate-shine" />

                {/* Icon with rotation */}
                <Award className="relative h-4 w-4 text-amber-600 z-10 animate-bounce-subtle group-hover/trusted:animate-spin-slow group-hover/trusted:scale-125 transition-transform duration-300" />

                {/* Text with gradient */}
                <span className="relative z-10 text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-amber-700 via-yellow-700 to-orange-700 bg-clip-text text-transparent animate-gradient-text-gold">
                  Trusted
                </span>

                {/* Sparkle particles */}
                <Zap className="absolute -top-1 -right-1 h-3 w-3 text-yellow-600 opacity-0 group-hover/trusted:opacity-100 animate-sparkle-fast transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile optimized layout with modern design */}
        <div
          className={`lg:hidden py-3 space-y-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Main company name with glow */}
          <div className="flex items-center justify-center gap-2.5">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full animate-pulse-slow" />
              <ShieldCheck className="relative h-5 w-5 text-cyan-600 animate-pulse-subtle" />
            </div>
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-700 bg-clip-text text-transparent animate-fade-in">
              Maxtech Import and Export Limited
            </span>
          </div>

          {/* Trust indicators row */}
          <div className="flex items-center justify-center gap-2 text-[10px] flex-wrap">
            <div className="flex items-center gap-1.5 group relative">
              <div className="absolute -inset-1 bg-indigo-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-1.5 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/60 group-hover:border-indigo-400/80 transition-all duration-300">
                <FileText className="h-3.5 w-3.5 text-indigo-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                <span className="text-slate-800 transition-colors duration-300 group-hover:text-indigo-700 font-medium text-[9px] sm:text-[10px]">
                  79695478
                </span>
              </div>
            </div>

            <div className="h-4 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse-vertical" />

            <div className="flex items-center gap-1.5 group relative">
              <div className="absolute -inset-1 bg-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-1.5 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/60 group-hover:border-blue-400/80 transition-all duration-300">
                <Award className="h-3.5 w-3.5 text-blue-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                <span className="text-slate-800 transition-colors duration-300 group-hover:text-blue-700 font-medium">
                  ISO 9001:2015
                </span>
              </div>
            </div>

            <div className="h-4 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse-vertical" />

            <div className="flex items-center gap-1.5 group relative">
              <div className="absolute -inset-1 bg-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-1.5 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/60 group-hover:border-emerald-400/80 transition-all duration-300">
                <MapPin className="h-3.5 w-3.5 text-emerald-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="text-slate-800 transition-colors duration-300 group-hover:text-emerald-700 font-medium text-[9px] sm:text-[10px] max-w-[140px] sm:max-w-none truncate">
                  Unit 2610, APEC Plaza, Kwun Tong
                </span>
              </div>
            </div>

            <div className="h-4 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse-vertical" />

            <div className="flex items-center gap-1.5 group relative">
              <div className="absolute -inset-1 bg-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative flex items-center gap-1.5 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/60 group-hover:border-purple-400/80 transition-all duration-300">
                <Globe2 className="h-3.5 w-3.5 text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="text-slate-800 transition-colors duration-300 group-hover:text-purple-700 font-medium hidden sm:inline">
                  Global Shipping
                </span>
                <span className="text-slate-800 transition-colors duration-300 group-hover:text-purple-700 font-medium sm:hidden">
                  Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Smooth Infinite Marquee Animation */
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Advanced Gradient Animations */
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        @keyframes wave-slow {
          0% { transform: translateX(-100%) translateY(0) scaleY(1); }
          50% { transform: translateX(0%) translateY(-5px) scaleY(1.1); }
          100% { transform: translateX(100%) translateY(0) scaleY(1); }
        }
        
        @keyframes grid-shift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        /* 3D Orb Floating Animations */
        @keyframes orb-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(20px, -30px) scale(1.1) rotate(90deg); }
          50% { transform: translate(-15px, -20px) scale(0.9) rotate(180deg); }
          75% { transform: translate(10px, 15px) scale(1.05) rotate(270deg); }
        }
        
        @keyframes orb-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-25px, 20px) scale(1.15) rotate(120deg); }
          66% { transform: translate(15px, -25px) scale(0.85) rotate(240deg); }
        }
        
        @keyframes orb-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -40px) scale(1.2); }
        }
        
        @keyframes orb-float-4 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-20px, 30px) scale(1.1) rotate(180deg); }
        }
        
        /* Particle Effects */
        @keyframes particle-float {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px) scale(0); opacity: 0; }
        }
        
        /* Border Glow Effects */
        @keyframes border-glow {
          0%, 100% { opacity: 0.5; transform: scaleX(0.8); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        
        @keyframes border-glow-delayed {
          0%, 100% { opacity: 0.3; transform: scaleX(0.9); }
          50% { opacity: 0.8; transform: scaleX(1.1); }
        }
        
        /* Icon Animations */
        @keyframes icon-float-3d {
          0%, 100% { transform: translateY(0) rotateY(0deg) rotateX(0deg); }
          25% { transform: translateY(-3px) rotateY(90deg) rotateX(5deg); }
          50% { transform: translateY(-5px) rotateY(180deg) rotateX(0deg); }
          75% { transform: translateY(-3px) rotateY(270deg) rotateX(-5deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          25% { opacity: 0.7; transform: scale(1.2) rotate(90deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
          75% { opacity: 0.8; transform: scale(1.15) rotate(270deg); }
        }
        
        @keyframes sparkle-fast {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
        }
        
        /* Pulse Animations */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }
        
        @keyframes pulse-vertical-glow {
          0%, 100% { opacity: 0.3; transform: scaleY(1); filter: blur(0px); }
          50% { opacity: 0.8; transform: scaleY(1.3); filter: blur(2px); }
        }
        
        @keyframes ping-slow {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }
        
        /* Rotation Animations */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Text Gradient Animations */
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-text-gold {
          0%, 100% { background-position: 0% 50%; filter: hue-rotate(0deg); }
          50% { background-position: 100% 50%; filter: hue-rotate(20deg); }
        }
        
        /* Shine Effect */
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        /* Fade Animations */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Animation Classes */
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
        
        .animate-wave-slow {
          animation: wave-slow 10s ease-in-out infinite;
        }
        
        .animate-grid-shift {
          animation: grid-shift 20s linear infinite;
        }
        
        .animate-orb-float-1 {
          animation: orb-float-1 12s ease-in-out infinite;
        }
        
        .animate-orb-float-2 {
          animation: orb-float-2 14s ease-in-out infinite;
        }
        
        .animate-orb-float-3 {
          animation: orb-float-3 10s ease-in-out infinite;
        }
        
        .animate-orb-float-4 {
          animation: orb-float-4 16s ease-in-out infinite;
        }
        
        .animate-border-glow {
          animation: border-glow 3s ease-in-out infinite;
        }
        
        .animate-border-glow-delayed {
          animation: border-glow-delayed 3s ease-in-out infinite 1.5s;
        }
        
        .animate-icon-float-3d {
          animation: icon-float-3d 4s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-sparkle-fast {
          animation: sparkle-fast 1.5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2.5s ease-in-out infinite;
        }
        
        .animate-pulse-vertical-glow {
          animation: pulse-vertical-glow 2s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-rotate-gradient {
          animation: rotate-gradient 3s linear infinite;
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
        
        .animate-gradient-text-gold {
          background-size: 200% 200%;
          animation: gradient-text-gold 4s ease infinite;
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        /* Scrollbar Hide */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* 3D Transform Support */
        .group\/card:hover {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
