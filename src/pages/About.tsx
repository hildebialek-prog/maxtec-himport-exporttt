import {
  Building2,
  Globe,
  ShieldCheck,
  Users,
  Sparkles,
  Landmark,
  FileSearch,
  Activity,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

const timeline = [
  {
    year: "2026",
    label: "Company Establishment",
    copy: "Maxtech Import and Export Limited was established in Hong Kong, focusing on fashion, technology, and innovative import-export solutions.",
  },
  {
    year: "2026",
    label: "Vision & Mission",
    copy: "Building a professional trading platform with commitment to quality, compliance, and global partnerships.",
  },
  {
    year: "Future",
    label: "Growth & Expansion",
    copy: "Planned expansion into global markets with enhanced logistics, quality assurance, and customer service excellence.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    copy: "Rigorous quality control processes ensuring every product meets our high standards before delivery to customers worldwide.",
    tag: "Quality-first",
    color: "cyan",
  },
  {
    icon: Globe,
    title: "Global Reach",
    copy: "Serving customers across multiple countries with reliable shipping, international trade expertise, and professional service.",
    tag: "Worldwide",
    color: "blue",
  },
  {
    icon: Users,
    title: "Customer Focus",
    copy: "Dedicated customer service team available to assist with inquiries, ensuring satisfaction at every step of the journey.",
    tag: "24/7 Support",
    color: "purple",
  },
  {
    icon: Building2,
    title: "Professional Excellence",
    copy: "Registered Hong Kong company with commitment to transparency, compliance, and building trusted business relationships.",
    tag: "HK Registered",
    color: "pink",
  },
];

const credentials = [
  {
    label: "Company name",
    value: "MAXTECH IMPORT AND EXPORT LIMITED",
  },
  {
    label: "Business Registration Certificate Number",
    value: "79695478",
    icon: FileText,
    color: "emerald",
  },
  { label: "Legal form", value: "Hong Kong Registered Company" },
  {
    label: "Registered Business Address",
    value: "Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong Kong",
    icon: MapPin,
    color: "cyan",
  },
  { label: "Established", value: "2026" },
  { label: "Status", value: "Active" },
];

const About = () => {
  return (
    <div
      className="relative overflow-hidden min-h-screen"
      style={{
        background: `linear-gradient(to bottom, 
        rgba(15, 23, 42, 0.98) 0%, 
        rgba(30, 41, 59, 0.98) 50%, 
        rgba(15, 23, 42, 0.98) 100%),
        linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)`,
        backdropFilter: "blur(16px)",
      }}
    >
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

      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="section-container relative z-10 py-24 space-y-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl px-5 py-2 text-xs font-bold uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(56,189,248,0.3)]">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

            <Sparkles className="h-4 w-4 text-cyan-400 relative z-10 animate-sparkle" />
            <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent select-none">
              Hong Kong Registered • Established 2026
            </span>
            <Sparkles className="h-4 w-4 text-purple-400 relative z-10 animate-sparkle" />
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="group/main-card space-y-6 rounded-[40px] border border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl p-8 lg:p-10 shadow-[0_45px_120px_rgba(56,189,248,0.3)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[40px] blur-xl opacity-0 group-hover/main-card:opacity-100 transition-opacity duration-700" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/main-card:opacity-100 transition-opacity duration-500 rounded-[40px]" />

              <div className="relative z-10">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-black bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.5)] select-none">
                  Professional Trading Excellence Built on Quality and Trust.
                </h1>
                <p className="text-slate-300 text-lg max-w-3xl mt-6 leading-relaxed select-none">
                  Maxtech Import and Export Limited specializes in fashion,
                  technology, and innovative solutions. Operating from Hong Kong
                  with commitment to quality, compliance, and building trusted
                  global partnerships.
                </p>
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                  {[
                    { label: "Established", value: "2026", color: "cyan" },
                    { label: "Focus Areas", value: "Global", color: "blue" },
                    { label: "Commitment", value: "Quality", color: "purple" },
                  ].map((stat) => {
                    const colorClasses = {
                      cyan: "border-cyan-400/30 bg-slate-900/80 text-cyan-300",
                      blue: "border-blue-400/30 bg-slate-900/80 text-blue-300",
                      purple:
                        "border-purple-400/30 bg-slate-900/80 text-purple-300",
                    };
                    return (
                      <div
                        key={stat.label}
                        className={`group/stat rounded-3xl border backdrop-blur-xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] ${colorClasses[stat.color as keyof typeof colorClasses]}`}
                      >
                        <p className="text-xs uppercase tracking-[0.4em] text-slate-400 mb-2 select-none">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold select-none">
                          {stat.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="/compliance"
                    className="group/btn relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] cursor-pointer select-none"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500" />

                    <FileSearch className="h-4 w-4 relative z-10 pointer-events-none" />
                    <span className="relative z-10 pointer-events-none">
                      View Company Details
                    </span>
                  </a>
                  <a
                    href="/contact"
                    className="group/btn relative inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl text-cyan-300 px-6 py-3 text-sm font-bold hover:text-white hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] cursor-pointer select-none"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover/btn:opacity-40 transition-opacity duration-500" />

                    <Users className="h-4 w-4 relative z-10 pointer-events-none" />
                    <span className="relative z-10 pointer-events-none">
                      Contact Us
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="group/side-card relative rounded-[40px] border border-purple-400/30 bg-slate-900/90 backdrop-blur-2xl p-8 space-y-6 shadow-[0_35px_110px_rgba(168,85,247,0.3)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-[40px] blur-xl opacity-0 group-hover/side-card:opacity-100 transition-opacity duration-700" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/side-card:opacity-100 transition-opacity duration-500 rounded-[40px]" />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                  Core Expertise
                </p>
                <h3 className="text-2xl font-serif font-bold text-white mt-2 bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] select-none">
                  Fashion & Technology Solutions in One Professional Platform.
                </h3>
                <p className="text-slate-300 mt-4 leading-relaxed select-none">
                  From premium fashion collections to cutting-edge technology
                  products, we provide comprehensive import-export services with
                  quality assurance and professional support.
                </p>
                <div className="grid gap-4 mt-6">
                  {[
                    {
                      icon: Landmark,
                      label: "Hong Kong Base",
                      value: "Registered company, professional operations",
                      color: "cyan",
                    },
                    {
                      icon: Activity,
                      label: "Quality Focus",
                      value: "Rigorous quality control and verification",
                      color: "purple",
                    },
                  ].map((item) => {
                    const colorClasses = {
                      cyan: "border-cyan-400/30 bg-slate-900/80 text-cyan-300",
                      purple:
                        "border-purple-400/30 bg-slate-900/80 text-purple-300",
                    };
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`group/item flex items-center gap-4 rounded-2xl border backdrop-blur-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] ${colorClasses[item.color as keyof typeof colorClasses]}`}
                      >
                        <span
                          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${item.color === "cyan" ? "border-cyan-400/30 bg-cyan-500/20" : "border-purple-400/30 bg-purple-500/20"} group-hover/item:scale-110 transition-transform duration-300`}
                        >
                          <Icon
                            className={`h-5 w-5 ${item.color === "cyan" ? "text-cyan-400" : "text-purple-400"} group-hover/item:drop-shadow-[0_0_10px_currentColor]`}
                          />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.4em] text-slate-400 mb-1 select-none">
                            {item.label}
                          </p>
                          <p className="text-white font-medium select-none">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-24 space-y-16 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
              Our Journey
            </p>
            <h2 className="font-serif text-4xl font-black bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] select-none">
              Building Excellence from the Ground Up.
            </h2>
            <p className="text-slate-300 max-w-2xl leading-relaxed select-none">
              Maxtech Import and Export Limited is a newly established company
              committed to quality, innovation, and building trusted
              partnerships in the global market.
            </p>
            <div className="relative pl-6 border-l border-cyan-400/30 space-y-10">
              {timeline.map((entry, index) => (
                <div
                  key={`${entry.year}-${index}`}
                  className="relative group animate-fade-rise"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Glowing dot */}
                  <div className="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.8)] group-hover:scale-150 transition-transform duration-300" />
                  <div className="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-cyan-400/30 blur-md" />

                  <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 font-bold mb-2 select-none">
                    {entry.year}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300 select-none">
                    {entry.label}
                  </h3>
                  <p className="text-slate-300 leading-relaxed select-none">
                    {entry.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="group/image-card relative rounded-[36px] overflow-hidden border border-purple-400/30 bg-slate-900/90 backdrop-blur-2xl shadow-[0_35px_120px_rgba(168,85,247,0.3)]">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-[36px] blur-xl opacity-0 group-hover/image-card:opacity-100 transition-opacity duration-700" />

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              alt="Hong Kong skyline"
              className="h-full w-full object-cover opacity-40 transition-opacity duration-500 group-hover/image-card:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white space-y-4 relative z-10">
              <p className="text-xs uppercase tracking-[0.4em] text-purple-300 font-bold select-none">
                Company Location
              </p>
              <h3 className="text-3xl font-serif font-bold bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] select-none">
                Registered in Hong Kong.
              </h3>
              <p className="text-slate-300 max-w-xl leading-relaxed select-none">
                Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong Kong
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                Core Values
              </p>
              <h2 className="font-serif text-3xl font-black bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] select-none">
                Four Pillars Anchoring Maxtech.
              </h2>
            </div>
            <p className="text-slate-300 max-w-3xl leading-relaxed select-none">
              We combine professional service with quality assurance, ensuring
              every partnership is built on trust, excellence, and commitment to
              success.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colorClasses = {
                cyan: "border-cyan-400/30 bg-slate-900/80 text-cyan-300 hover:border-cyan-400/60",
                blue: "border-blue-400/30 bg-slate-900/80 text-blue-300 hover:border-blue-400/60",
                purple:
                  "border-purple-400/30 bg-slate-900/80 text-purple-300 hover:border-purple-400/60",
                pink: "border-pink-400/30 bg-slate-900/80 text-pink-300 hover:border-pink-400/60",
              };
              const glowColors = {
                cyan: "from-cyan-500/20 via-cyan-500/20 to-cyan-500/20",
                blue: "from-blue-500/20 via-blue-500/20 to-blue-500/20",
                purple: "from-purple-500/20 via-purple-500/20 to-purple-500/20",
                pink: "from-pink-500/20 via-pink-500/20 to-pink-500/20",
              };
              return (
                <div
                  key={value.title}
                  className={`group/value-card relative overflow-hidden rounded-[32px] border backdrop-blur-xl p-8 shadow-[0_20px_70px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${colorClasses[value.color as keyof typeof colorClasses]}`}
                >
                  {/* Outer glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${glowColors[value.color as keyof typeof glowColors]} rounded-[32px] blur-xl opacity-0 group-hover/value-card:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover/value-card:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center gap-3 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.4em] ${value.color === "cyan" ? "border-cyan-400/30 bg-cyan-500/10" : value.color === "blue" ? "border-blue-400/30 bg-blue-500/10" : value.color === "purple" ? "border-purple-400/30 bg-purple-500/10" : "border-pink-400/30 bg-pink-500/10"}`}
                    >
                      <Icon
                        className={`h-4 w-4 ${value.color === "cyan" ? "text-cyan-400" : value.color === "blue" ? "text-blue-400" : value.color === "purple" ? "text-purple-400" : "text-pink-400"} group-hover/value-card:drop-shadow-[0_0_10px_currentColor]`}
                      />
                      <span className="text-slate-300 select-none">
                        {value.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white group-hover/value-card:scale-105 transition-transform duration-300 select-none">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-slate-300 leading-relaxed select-none">
                      {value.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="group/credentials rounded-[36px] border border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl p-10 space-y-6 relative overflow-hidden shadow-[0_30px_100px_rgba(56,189,248,0.3)]">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[36px] blur-xl opacity-0 group-hover/credentials:opacity-100 transition-opacity duration-700" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/credentials:opacity-100 transition-opacity duration-500" />

            {/* Animated top border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-400 animate-gradient-flow" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover/credentials:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-6 w-6 group-hover/credentials:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                    Company Information
                  </p>
                  <h3 className="font-serif text-3xl font-bold text-white mt-1 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] select-none">
                    Professional Credentials.
                  </h3>
                </div>
              </div>
              <p className="text-slate-300 mt-4 leading-relaxed select-none">
                Maxtech Import and Export Limited is a registered Hong Kong
                company committed to transparency, compliance, and building
                trusted business relationships.
              </p>
              <div className="grid gap-4 mt-6">
                {credentials.map((row) => {
                  const Icon = row.icon;
                  const colorClasses = {
                    emerald:
                      "border-emerald-400/30 bg-emerald-500/10 text-emerald-400",
                    cyan: "border-cyan-400/30 bg-cyan-500/10 text-cyan-400",
                    default: "border-cyan-400/20",
                  };
                  const borderClasses = {
                    emerald:
                      "border-emerald-400/20 hover:border-emerald-400/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
                    cyan: "border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]",
                    default:
                      "border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]",
                  };
                  const textColorClasses = {
                    emerald: "text-emerald-200",
                    cyan: "text-cyan-200",
                    default: "text-white",
                  };
                  return (
                    <div
                      key={row.label}
                      className={`group/row rounded-2xl border bg-slate-900/80 backdrop-blur-xl p-4 transition-all duration-300 ${borderClasses[row.color as keyof typeof borderClasses] || borderClasses.default}`}
                    >
                      <div className="flex items-start gap-3">
                        {Icon && (
                          <div
                            className={`flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl border ${colorClasses[row.color as keyof typeof colorClasses] || colorClasses.default} group-hover/row:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="h-5 w-5 group-hover/row:drop-shadow-[0_0_10px_currentColor]" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <span className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none block mb-2">
                            {row.label}
                          </span>
                          <span
                            className={`text-sm sm:text-base font-semibold select-none break-words leading-relaxed ${textColorClasses[row.color as keyof typeof textColorClasses] || textColorClasses.default}`}
                          >
                            {row.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="/compliance"
                  className="group/btn relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-5 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] cursor-pointer select-none"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500" />

                  <ArrowRight className="h-4 w-4 relative z-10 pointer-events-none" />
                  <span className="relative z-10 pointer-events-none">
                    View Details
                  </span>
                </a>
                <a
                  href="/contact"
                  className="group/btn relative inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl text-cyan-300 px-5 py-3 text-sm font-bold hover:text-white hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] cursor-pointer select-none"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover/btn:opacity-40 transition-opacity duration-500" />

                  <span className="relative z-10 pointer-events-none">
                    Request Information
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="group/contact rounded-[36px] border border-purple-400/30 bg-slate-900/90 backdrop-blur-3xl p-10 flex flex-col gap-6 shadow-[0_30px_100px_rgba(168,85,247,0.3)]">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-[36px] blur-xl opacity-0 group-hover/contact:opacity-100 transition-opacity duration-700" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 select-none cursor-default">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold">
                Get In Touch
              </p>
              <h3 className="font-serif text-3xl font-bold text-white mt-2 bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                Contact Our Team.
              </h3>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Reach out to discuss partnership opportunities, product
                inquiries, or request company information and documentation.
              </p>
              <form className="space-y-4 mt-6">
                <div className="rounded-2xl border border-purple-400/30 bg-slate-900/80 backdrop-blur-xl px-4 py-3 transition-all duration-300 focus-within:border-purple-400/60 focus-within:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none cursor-text select-text"
                  />
                </div>
                <button
                  type="submit"
                  className="group/btn relative inline-flex items-center justify-center w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] cursor-pointer select-none"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 rounded-2xl blur-lg opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500" />

                  <span className="relative z-10 pointer-events-none">
                    Send Message
                  </span>
                </button>
              </form>
              <div className="flex flex-wrap gap-4 text-sm mt-6">
                <a
                  href="mailto:info@maxtechimport.com"
                  className="flex items-center gap-2 group/item cursor-pointer"
                >
                  <div className="p-2 rounded-lg border border-purple-400/30 bg-purple-500/10 group-hover/item:border-purple-400/60 group-hover/item:scale-110 transition-all duration-300">
                    <Mail className="h-4 w-4 text-purple-400 group-hover/item:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-purple-300 transition-colors duration-300 inline-flex items-center gap-2">
                    <span>info@maxtechimport.com</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  </span>
                </a>
                <a
                  href="tel:+85247485904"
                  className="flex items-center gap-2 group/item cursor-pointer"
                >
                  <div className="p-2 rounded-lg border border-blue-400/30 bg-blue-500/10 group-hover/item:border-blue-400/60 group-hover/item:scale-110 transition-all duration-300">
                    <Phone className="h-4 w-4 text-blue-400 group-hover/item:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2">
                    <span>+852 47485904</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-rise {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-rise {
          animation: fade-rise 0.8s ease forwards;
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 3s linear infinite;
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

export default About;
