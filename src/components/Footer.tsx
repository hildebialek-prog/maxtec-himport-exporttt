import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  FileCheck,
  Sparkles,
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Clock,
  ChevronRight,
  FileText,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    const node = footerRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden pt-16 lg:pt-24"
      style={{
        background: `linear-gradient(to bottom, 
          rgba(15, 23, 42, 0.98) 0%, 
          rgba(30, 41, 59, 0.98) 50%, 
          rgba(15, 23, 42, 0.98) 100%),
          linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)`,
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Neon top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 via-purple-400/50 to-transparent" />

      {/* Background layers with neon effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated holographic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/8 via-blue-600/8 via-purple-600/8 to-pink-600/8 animate-gradient-xy-hero opacity-50" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[length:220px_220px] opacity-30" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-cyan-500/12 blur-[160px] footer-float-delay" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[180px] footer-float" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-blue-500/8 blur-[140px] animate-orb-float-hero-1" />
      </div>

      <div className="section-container relative z-10 py-16 lg:py-20">
        <div
          className={`grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] rounded-[32px] border border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl px-8 py-10 lg:px-12 lg:py-14 shadow-[0_30px_120px_rgba(56,189,248,0.3)] transition-all duration-1000 group/footer ${
            isVisible
              ? "opacity-100 translate-y-0 hover:shadow-[0_40px_140px_rgba(56,189,248,0.4)]"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[32px] blur-xl opacity-0 group-hover/footer:opacity-100 transition-opacity duration-700" />

          {/* Left column */}
          <div className="space-y-10 relative z-10">
            {/* Brand */}
            <div className="group/brand relative space-y-5 overflow-hidden rounded-[28px] border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(56,189,248,0.2)]">
              {/* Glowing orbs */}
              <span className="pointer-events-none footer-orbit absolute -top-12 -left-16 h-32 w-32 rounded-full bg-cyan-500/15 blur-2xl" />
              <span className="pointer-events-none footer-orbit-delay absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-purple-500/15 blur-2xl" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/brand:opacity-100 transition-opacity duration-500" />

              <div className="relative inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                <Sparkles className="h-4 w-4 text-cyan-400 relative z-10 animate-sparkle" />
                <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                  Established 2026
                </span>
                <Clock className="h-4 w-4 text-purple-400 relative z-10 animate-sparkle" />
              </div>
              <div className="relative z-10">
                {/* Logo with professional effects - Larger for Footer */}
                <Link
                  to="/"
                  className="group/logo inline-block mb-6"
                  aria-label="Home"
                >
                  <div className="relative">
                    {/* Outer glow ring - enhanced */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 opacity-30 group-hover/logo:opacity-100 blur-3xl transition-opacity duration-700 rounded-2xl animate-pulse-slow" />

                    {/* Inner glow - enhanced */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 opacity-50 group-hover/logo:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    {/* Logo image container */}
                    <div className="relative">
                      {/* Glow backdrop - enhanced */}
                      <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/40 via-blue-400/40 via-purple-400/40 to-pink-400/40 opacity-40 group-hover/logo:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl" />

                      {/* Logo image with white background - significantly larger */}
                      <div className="relative bg-white rounded-2xl shadow-2xl border-[4px] border-cyan-400/50 group-hover/logo:border-cyan-400/100 transition-all duration-500 group-hover/logo:shadow-[0_0_60px_rgba(56,189,248,1)] group-hover/logo:scale-[1.04] h-[80px] sm:h-[96px] md:h-[112px] lg:h-[128px] xl:h-[140px] px-6 sm:px-8 md:px-10 lg:px-12 flex items-center justify-center min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px]">
                        {/* White background base */}
                        <div className="absolute inset-0 bg-white rounded-2xl" />

                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/50 rounded-2xl opacity-95" />

                        {/* Animated pulse effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 rounded-2xl animate-logo-pulse opacity-60" />

                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover/logo:opacity-100 -translate-x-full group-hover/logo:translate-x-full transition-all duration-1000 rounded-2xl" />

                        {/* Animated border glow */}
                        <div className="absolute -inset-1 rounded-2xl border-[4px] border-cyan-400/50 group-hover/logo:border-cyan-400/100 transition-all duration-500 pointer-events-none opacity-60 group-hover/logo:opacity-100 animate-border-pulse" />

                        {/* Logo image - much larger */}
                        <div className="relative z-10 flex items-center justify-center h-full w-full">
                          <img
                            src="/logo-maxtech.png"
                            alt="MAXTECH Logo"
                            className="h-[64px] w-auto sm:h-[80px] md:h-[96px] lg:h-[112px] xl:h-[120px] object-contain transition-all duration-500 group-hover/logo:brightness-110 group-hover/logo:scale-[1.1] group-hover/logo:drop-shadow-[0_0_40px_rgba(56,189,248,1)]"
                            style={{
                              filter:
                                "drop-shadow(0 6px 16px rgba(0, 0, 0, 0.3))",
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
                                (fallback as HTMLElement).style.display =
                                  "flex";
                              }
                            }}
                          />
                        </div>

                        {/* Fallback text logo */}
                        <div className="logo-fallback hidden items-center justify-center h-full w-full font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent px-4 group-hover/logo:from-cyan-500 group-hover/logo:via-blue-500 group-hover/logo:to-purple-500 transition-all duration-500">
                          MAXTECH
                        </div>
                      </div>

                      {/* Outer animated border glow - enhanced */}
                      <div className="absolute -inset-2 rounded-2xl border-2 border-cyan-400/30 group-hover/logo:border-cyan-400/80 transition-all duration-500 pointer-events-none opacity-50 group-hover/logo:opacity-100 blur-md animate-border-glow" />

                      {/* Floating particles effect - enhanced with more particles */}
                      <div className="absolute -inset-6 pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-float-particle-1 shadow-[0_0_12px_rgba(56,189,248,1)]" />
                        <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float-particle-2 shadow-[0_0_12px_rgba(59,130,246,1)]" />
                        <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-400 rounded-full animate-float-particle-3 shadow-[0_0_12px_rgba(168,85,247,1)]" />
                        <div
                          className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-particle-1 shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                          style={{ animationDelay: "1.5s" }}
                        />
                        <div
                          className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-float-particle-2 shadow-[0_0_10px_rgba(251,113,133,0.8)]"
                          style={{ animationDelay: "2s" }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-300 max-w-lg">
                  A dynamic import and export company specializing in fashion,
                  technology, and innovative solutions. Building trusted
                  partnerships worldwide with professional excellence and
                  commitment to quality.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 relative z-10">
                <div className="group/badge inline-flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-slate-900/80 backdrop-blur-xl px-4 py-2 text-sm font-bold text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <FileText className="h-4 w-4 relative z-10 group-hover/badge:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  <span className="relative z-10 text-xs">Reg: 79695478</span>
                </div>
                <div className="group/badge inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl px-4 py-2 text-sm font-bold text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <ShieldCheck className="h-4 w-4 relative z-10 group-hover/badge:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  <span className="relative z-10">HK Registered</span>
                </div>
                <div className="group/badge inline-flex items-center gap-2 rounded-2xl border border-purple-400/30 bg-slate-900/80 backdrop-blur-xl px-4 py-2 text-sm font-bold text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <FileCheck className="h-4 w-4 relative z-10 group-hover/badge:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  <span className="relative z-10">Professional Service</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 relative z-10">
                {[
                  {
                    icon: Linkedin,
                    href: "#",
                    label: "LinkedIn",
                    color: "cyan",
                  },
                  {
                    icon: Instagram,
                    href: "#",
                    label: "Instagram",
                    color: "purple",
                  },
                  {
                    icon: Facebook,
                    href: "#",
                    label: "Facebook",
                    color: "blue",
                  },
                  { icon: Twitter, href: "#", label: "Twitter", color: "pink" },
                ].map((social) => {
                  const Icon = social.icon;
                  const colorClasses = {
                    cyan: "border-cyan-400/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-200",
                    purple:
                      "border-purple-400/30 text-purple-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-purple-200",
                    blue: "border-blue-400/30 text-blue-300 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200",
                    pink: "border-pink-400/30 text-pink-300 hover:border-pink-400 hover:bg-pink-500/20 hover:text-pink-200",
                  };
                  const glowColors = {
                    cyan: "from-cyan-400/20 to-cyan-400/20",
                    purple: "from-purple-400/20 to-purple-400/20",
                    blue: "from-blue-400/20 to-blue-400/20",
                    pink: "from-pink-400/20 to-pink-400/20",
                  };
                  return (
                    <Link
                      key={social.label}
                      to={social.href}
                      aria-label={social.label}
                      className={`group relative flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] ${colorClasses[social.color as keyof typeof colorClasses]}`}
                      onClick={handleNavigate}
                    >
                      {/* Glow effect */}
                      <span
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${glowColors[social.color as keyof typeof glowColors]} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100`}
                      />
                      <Icon className="h-4 w-4 relative z-10 group-hover:drop-shadow-[0_0_10px_currentColor]" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Navigation clusters */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Shop",
                  links: [
                    { label: "Clothing", href: "/shop/clothing" },
                    { label: "Technology", href: "/shop/technology" },
                    { label: "New Arrivals", href: "/shop/clothing/new" },
                    { label: "Sale", href: "/shop/clothing/sale" },
                  ],
                },
                {
                  title: "Information",
                  links: [
                    { label: "About Us", href: "/about" },
                    { label: "Company Details", href: "/compliance" },
                    { label: "Policies", href: "/policies" },
                    { label: "Contact", href: "/contact" },
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    { label: "Partner Portal", href: "#" },
                    { label: "Documentation", href: "/compliance" },
                    { label: "Lookbook", href: "#" },
                    { label: "Support", href: "#" },
                  ],
                },
              ].map((section, index) => (
                <div
                  key={section.title}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 120}ms` }}
                >
                  <h4 className="mb-4 text-xs font-bold tracking-[0.3em] bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                    {section.title.toUpperCase()}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="group flex items-center gap-3 text-slate-300 transition-all duration-300 hover:text-cyan-300"
                          onClick={handleNavigate}
                        >
                          <span className="footer-link-dot h-1.5 w-1.5 rounded-full bg-cyan-400/30 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-125 group-hover:bg-cyan-400" />
                          <span className="relative">
                            {link.label}
                            <span className="footer-underline absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6 relative z-10">
            {/* Contact & Verification */}
            <div className="group/contact relative overflow-hidden rounded-[28px] border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(56,189,248,0.2)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[28px] blur-xl opacity-0 group-hover/contact:opacity-100 transition-opacity duration-700" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500" />

              {/* Shimmer effect */}
              <div className="absolute -inset-1 footer-card-shimmer opacity-0 group-hover/contact:opacity-20" />

              <div className="relative z-10 select-none cursor-default">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold tracking-[0.3em] text-slate-400">
                      CONTACT
                    </p>
                    <p className="text-lg font-bold text-white mt-2 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                      Get In Touch
                    </p>
                  </div>
                  <div className="rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl px-4 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                    Available
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <a
                    href="https://maps.google.com/?q=Unit+2610,+APEC+Plaza,+49+Hoi+Yuen+Road,+Kwun+Tong,+Hong+Kong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item flex gap-3 cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-slate-900/80 backdrop-blur-xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover/item:border-emerald-400/60 group-hover/item:shadow-[0_0_25px_rgba(16,185,129,0.4)] group-hover/item:scale-110 transition-all duration-300">
                      <MapPin className="h-4 w-4 group-hover/item:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-1 group-hover/item:text-slate-300 transition-colors">
                        Registered Business Address
                      </p>
                      <p className="text-slate-300 group-hover/item:text-emerald-200 transition-colors leading-relaxed">
                        Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong
                        Kong
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@maxtechimport.com"
                    className="group/item flex gap-3 items-center cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-purple-400/30 bg-slate-900/80 backdrop-blur-xl text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover/item:border-purple-400/60 group-hover/item:shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover/item:scale-110 transition-all duration-300">
                      <Mail className="h-4 w-4 group-hover/item:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-1 group-hover/item:text-slate-300 transition-colors">
                        Email
                      </p>
                      <span className="text-slate-300 group-hover/item:text-purple-300 transition-colors inline-flex items-center gap-2">
                        <span className="break-all">
                          info@maxtechimport.com
                        </span>
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      </span>
                    </div>
                  </a>
                  <a
                    href="tel:+85247485904"
                    className="group/item flex gap-3 items-center cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/30 bg-slate-900/80 backdrop-blur-xl text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover/item:border-blue-400/60 group-hover/item:shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover/item:scale-110 transition-all duration-300">
                      <Phone className="h-4 w-4 group-hover/item:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-1 group-hover/item:text-slate-300 transition-colors">
                        Phone
                      </p>
                      <span className="text-slate-300 group-hover/item:text-blue-300 transition-colors inline-flex items-center gap-2">
                        <span>+852 47485904</span>
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      </span>
                    </div>
                  </a>
                </div>
                <Link
                  to="/compliance"
                  className="group/link relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200 transition-all duration-300 hover:scale-105 cursor-pointer select-none"
                  onClick={handleNavigate}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />

                  <span className="relative z-10 pointer-events-none">
                    View Company Information
                  </span>
                  <ChevronRight className="h-4 w-4 relative z-10 transition-transform group-hover/link:translate-x-2 group-hover/link:scale-125 pointer-events-none" />
                </Link>
              </div>
            </div>

            {/* Legal / Verification */}
            <div className="group/legal relative overflow-hidden rounded-[28px] border border-purple-400/30 bg-slate-900/80 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(168,85,247,0.2)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-[28px] blur-xl opacity-0 group-hover/legal:opacity-100 transition-opacity duration-700" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/legal:opacity-100 transition-opacity duration-500" />

              {/* Shimmer effect */}
              <div className="absolute -inset-1 footer-card-shimmer opacity-0 group-hover/legal:opacity-20" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-slate-900/80 backdrop-blur-xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover/legal:border-emerald-400/60 group-hover/legal:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">
                    <FileText className="h-5 w-5 group-hover/legal:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.3em] text-slate-400">
                      COMPANY VERIFICATION
                    </p>
                    <p className="text-lg font-bold text-white mt-1 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                      Legal Information
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-purple-400/20">
                  <p className="font-bold text-white text-sm drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    MAXTECH IMPORT AND EXPORT LIMITED
                  </p>

                  <div className="group/info flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)] group-hover/info:border-emerald-400/60 group-hover/info:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
                        <ShieldCheck className="h-4 w-4 group-hover/info:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-1 group-hover/info:text-slate-300 transition-colors">
                        Business Registration Certificate Number
                      </p>
                      <p className="text-sm font-semibold text-white group-hover/info:text-emerald-200 transition-colors break-all">
                        79695478
                      </p>
                    </div>
                  </div>

                  <div className="group/info flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.2)] group-hover/info:border-cyan-400/60 group-hover/info:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300">
                        <MapPin className="h-4 w-4 group-hover/info:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-1 group-hover/info:text-slate-300 transition-colors">
                        Registered Business Address
                      </p>
                      <p className="text-sm font-semibold text-white leading-relaxed group-hover/info:text-cyan-200 transition-colors">
                        Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong
                        Kong
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-purple-400/20">
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Established 2026 • Hong Kong Registered Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cyan-400/20 pt-6 text-xs lg:flex-row">
          <p className="text-slate-400">
            © {new Date().getFullYear()} MAXTECH IMPORT AND EXPORT LIMITED. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link
              to="/policies"
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              to="/policies"
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              to="/compliance"
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              Compliance
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes footer-float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(12px); }
        }

        @keyframes footer-float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(12px) translateX(-10px); }
        }

        @keyframes footer-orbit {
          0% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 0.7; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.4; }
        }

        @keyframes footer-orbit-delay {
          0% { transform: rotate(0deg) scale(0.9); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.6; }
          100% { transform: rotate(360deg) scale(0.9); opacity: 0.3; }
        }

        @keyframes footer-card-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes gradient-xy-hero {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        /* Logo Pulse Animation */
        @keyframes logo-pulse {
          0%, 100% { opacity: 0.3; transform: scaleX(1); }
          50% { opacity: 0.7; transform: scaleX(1.05); }
        }
        
        /* Border Pulse Animation */
        @keyframes border-pulse {
          0%, 100% { opacity: 0.5; box-shadow: 0 0 10px rgba(56, 189, 248, 0.4); }
          50% { opacity: 1; box-shadow: 0 0 20px rgba(56, 189, 248, 0.8), 0 0 30px rgba(56, 189, 248, 0.6); }
        }
        
        /* Border Glow Animation */
        @keyframes border-glow {
          0%, 100% { opacity: 0.4; filter: brightness(1); }
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

        /* Pulse Slow */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .footer-float {
          animation: footer-float 18s ease-in-out infinite;
        }

        .footer-float-delay {
          animation: footer-float-delay 20s ease-in-out infinite;
        }

        .footer-orbit {
          animation: footer-orbit 24s linear infinite;
        }

        .footer-orbit-delay {
          animation: footer-orbit-delay 28s linear infinite;
        }

        .footer-card-shimmer {
          background: linear-gradient(120deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.35) 35%, rgba(168,85,247,0) 70%);
          background-size: 200% 100%;
          animation: footer-card-shimmer 8s linear infinite;
        }

        .animate-gradient-xy-hero {
          background-size: 200% 200%;
          animation: gradient-xy-hero 15s ease infinite;
        }

        .animate-orb-float-hero-1 {
          animation: orb-float-hero-1 20s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
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

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
