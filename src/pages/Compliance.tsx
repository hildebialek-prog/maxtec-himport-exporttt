import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  FileSignature,
  ScrollText,
  Stamp,
  Shield,
  Clock4,
  ArrowRight,
  CheckCircle,
  Lock,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Compliance = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    purpose: "",
    ndaAccepted: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.ndaAccepted) {
      toast.error("Please accept the NDA terms to continue");
      return;
    }

    // Generate reference ID
    const refId = `VRF-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;
    setReferenceId(refId);
    setSubmitted(true);

    toast.success("Verification request submitted successfully");
  };

  const documents = [
    {
      title: "Company Information Dossier",
      description: "Complete company profile and business details",
      format: "PDF",
      icon: FileText,
    },
    {
      title: "Compliance Documentation",
      description: "Regulatory compliance and verification materials",
      format: "PDF",
      icon: FileSignature,
    },
    {
      title: "Business Profile",
      description: "Company overview and operational information",
      format: "PDF",
      icon: ScrollText,
    },
    {
      title: "Quality Assurance Documents",
      description: "Quality standards and assurance documentation",
      format: "PDF",
      icon: Stamp,
    },
    {
      title: "Privacy & Compliance Statement",
      description: "Privacy policies and compliance statements",
      format: "PDF",
      icon: Shield,
    },
  ];

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

        <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-[120px] animate-float" />
        <div className="absolute -left-10 top-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px] animate-float-delayed" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-500/8 blur-[100px] animate-orb-float-hero-1" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[length:220px_220px] opacity-30" />
      </div>

      {/* Neon border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 via-purple-400/50 to-transparent" />

      <section className="relative overflow-hidden">
        <div className="section-container relative z-10 py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="group/main-card space-y-8 rounded-[36px] border border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl p-8 shadow-[0_35px_110px_rgba(56,189,248,0.3)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[36px] blur-xl opacity-0 group-hover/main-card:opacity-100 transition-opacity duration-700" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/main-card:opacity-100 transition-opacity duration-500 rounded-[36px]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl px-4 py-1 text-xs font-bold uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                  <ShieldCheck className="h-4 w-4 text-cyan-400 relative z-10 animate-sparkle" />
                  <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                    Verification Desk
                  </span>
                </div>
                <div className="space-y-4 mt-6">
                  <h1 className="font-serif text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.5)] select-none">
                    Company Information & Verification
                  </h1>
                  <p className="text-slate-300 text-lg leading-relaxed select-none">
                    Professional documentation and verification materials for
                    business partners, banks, and regulatory purposes. Secure
                    access with reference IDs for every document release.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                  {[
                    {
                      label: "Established",
                      value: "2026",
                      color: "cyan",
                      size: "text-3xl",
                    },
                    {
                      label: "Status",
                      value: "Active",
                      color: "blue",
                      size: "text-3xl",
                    },
                    {
                      label: "Service",
                      value: "Professional",
                      color: "purple",
                      size: "text-2xl",
                    },
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
                        <p
                          className={`${stat.size} font-bold select-none break-words leading-tight`}
                        >
                          {stat.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    size="lg"
                    className="group/btn relative gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] transition-all duration-300 cursor-pointer select-none"
                    asChild
                  >
                    <a href="#verification">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-lg blur-lg opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500" />

                      <ArrowRight className="h-4 w-4 relative z-10 pointer-events-none" />
                      <span className="relative z-10 pointer-events-none">
                        Request Information
                      </span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group/btn relative gap-2 border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl text-cyan-300 hover:text-white hover:border-cyan-400 hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 cursor-pointer select-none"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-lg blur-lg opacity-0 group-hover/btn:opacity-40 transition-opacity duration-500" />

                    <FileText className="h-4 w-4 relative z-10 pointer-events-none" />
                    <span className="relative z-10 pointer-events-none">
                      View Documents
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="group/side-card rounded-[36px] border border-purple-400/30 bg-slate-900/90 backdrop-blur-2xl p-8 space-y-4 shadow-[0_35px_110px_rgba(168,85,247,0.3)]">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-[36px] blur-xl opacity-0 group-hover/side-card:opacity-100 transition-opacity duration-700" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/side-card:opacity-100 transition-opacity duration-500 rounded-[36px]" />

              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                  Company Information
                </p>
                <h3 className="text-3xl font-serif font-bold text-white mt-2 bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] select-none">
                  MAXTECH IMPORT AND EXPORT LIMITED
                </h3>
                <p className="text-slate-300 mt-4 leading-relaxed select-none">
                  Registered Hong Kong company established in 2026. Professional
                  import and export services with global reach.
                </p>
                <div className="rounded-2xl border border-emerald-400/30 bg-slate-900/80 backdrop-blur-xl p-5 space-y-3 mt-6 group/reg hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/20 text-emerald-400 group-hover/reg:scale-110 transition-transform duration-300">
                      <ShieldCheck className="h-5 w-5 group-hover/reg:drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                      Business Registration Certificate Number
                    </p>
                  </div>
                  <p className="text-xl font-bold text-white group-hover/reg:text-emerald-200 transition-colors select-none break-all">
                    79695478
                  </p>
                </div>
                <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl p-5 space-y-3 mt-4 group/addr hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/20 text-cyan-400 group-hover/addr:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 group-hover/addr:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                      Registered Business Address
                    </p>
                  </div>
                  <p className="text-white leading-relaxed group-hover/addr:text-cyan-200 transition-colors select-none">
                    Unit 2610, APEC Plaza, 49 Hoi Yuen Road, Kwun Tong, Hong
                    Kong
                  </p>
                </div>
                <div className="space-y-3 pt-4 border-t border-purple-400/20">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                    Contact Information
                  </p>
                  <a
                    href="mailto:info@maxtechimport.com"
                    className="group/contact flex items-center gap-3 rounded-xl border border-purple-400/30 bg-slate-900/80 backdrop-blur-xl p-3 hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-400/30 bg-purple-500/20 text-purple-400 group-hover/contact:scale-110 transition-transform duration-300">
                      <Mail className="h-4 w-4 group-hover/contact:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-0.5 group-hover/contact:text-slate-300 transition-colors">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-white group-hover/contact:text-purple-300 transition-colors break-all">
                        info@maxtechimport.com
                      </p>
                    </div>
                    <ArrowRight className="h-3 w-3 text-purple-400 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </a>
                  <a
                    href="tel:+85247485904"
                    className="group/contact flex items-center gap-3 rounded-xl border border-blue-400/30 bg-slate-900/80 backdrop-blur-xl p-3 hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/20 text-blue-400 group-hover/contact:scale-110 transition-transform duration-300">
                      <Phone className="h-4 w-4 group-hover/contact:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 mb-0.5 group-hover/contact:text-slate-300 transition-colors">
                        Phone
                      </p>
                      <p className="text-sm font-semibold text-white group-hover/contact:text-blue-300 transition-colors">
                        +852 47485904
                      </p>
                    </div>
                    <ArrowRight className="h-3 w-3 text-blue-400 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20 space-y-12 relative z-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Status / Legal form",
              value: "Hong Kong Registered Company",
              color: "cyan",
            },
            { label: "Established", value: "2026", color: "blue" },
            {
              label: "Phone",
              value: "+852 47485904",
              color: "purple",
              link: "tel:+85247485904",
            },
            {
              label: "Email",
              value: "info@maxtechimport.com",
              color: "pink",
              link: "mailto:info@maxtechimport.com",
            },
            {
              label: "Document Access",
              value: "Available upon request",
              color: "cyan",
            },
            { label: "Service Level", value: "Professional", color: "blue" },
          ].map((item) => {
            const colorClasses = {
              cyan: "border-cyan-400/30 bg-slate-900/80 hover:border-cyan-400/60 text-cyan-300",
              blue: "border-blue-400/30 bg-slate-900/80 hover:border-blue-400/60 text-blue-300",
              purple:
                "border-purple-400/30 bg-slate-900/80 hover:border-purple-400/60 text-purple-300",
              pink: "border-pink-400/30 bg-slate-900/80 hover:border-pink-400/60 text-pink-300",
            };
            const content = item.link ? (
              <a
                href={item.link}
                className={`${item.value === "Professional" ? "text-lg" : "text-xl"} font-bold select-none break-words leading-tight text-white hover:opacity-80 transition-opacity duration-300 inline-flex items-center gap-2 group/link`}
              >
                <span>{item.value}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </a>
            ) : (
              <p
                className={`${item.value === "Professional" ? "text-lg" : "text-xl"} font-bold select-none break-words leading-tight text-white`}
              >
                {item.value}
              </p>
            );

            return (
              <div
                key={item.label}
                className={`group/item rounded-3xl border backdrop-blur-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] ${colorClasses[item.color as keyof typeof colorClasses]}`}
              >
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold mb-3 select-none">
                  {item.label}
                </p>
                {content}
              </div>
            );
          })}
        </div>

        <div className="group/process rounded-[36px] border border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl p-10 space-y-8 shadow-[0_30px_100px_rgba(56,189,248,0.3)]">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[36px] blur-xl opacity-0 group-hover/process:opacity-100 transition-opacity duration-700" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/process:opacity-100 transition-opacity duration-500 rounded-[36px]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                  Process
                </p>
                <h2 className="font-serif text-3xl font-black bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] select-none">
                  Verification Workflow.
                </h2>
              </div>
              <p className="text-slate-300 max-w-2xl leading-relaxed select-none">
                Every verification follows a streamlined process with request
                submission, review, and secure document delivery.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              {[
                {
                  icon: Mail,
                  title: "Request",
                  copy: "Submit your information and purpose for verification.",
                  color: "cyan",
                },
                {
                  icon: ShieldCheck,
                  title: "Review",
                  copy: "Our team reviews your request and confirms availability.",
                  color: "blue",
                },
                {
                  icon: Lock,
                  title: "Delivery",
                  copy: "Documents shared securely with reference ID.",
                  color: "purple",
                },
              ].map((step, index) => {
                const Icon = step.icon;
                const colorClasses = {
                  cyan: "border-cyan-400/30 bg-slate-900/80 text-cyan-300 hover:border-cyan-400/60",
                  blue: "border-blue-400/30 bg-slate-900/80 text-blue-300 hover:border-blue-400/60",
                  purple:
                    "border-purple-400/30 bg-slate-900/80 text-purple-300 hover:border-purple-400/60",
                };
                return (
                  <div
                    key={step.title}
                    className={`group/step rounded-3xl border backdrop-blur-xl p-6 space-y-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] ${colorClasses[step.color as keyof typeof colorClasses]}`}
                  >
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${step.color === "cyan" ? "border-cyan-400/30 bg-cyan-500/20" : step.color === "blue" ? "border-blue-400/30 bg-blue-500/20" : "border-purple-400/30 bg-purple-500/20"} group-hover/step:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        className={`h-5 w-5 ${step.color === "cyan" ? "text-cyan-400" : step.color === "blue" ? "text-blue-400" : "text-purple-400"} group-hover/step:drop-shadow-[0_0_10px_currentColor]`}
                      />
                    </div>
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                      Step {index + 1}
                    </p>
                    <h3 className="text-xl font-bold text-white select-none">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed select-none">
                      {step.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-24 space-y-12 relative z-10">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold select-none">
                Available Documents
              </p>
              <h2 className="font-serif text-3xl font-black bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] select-none">
                Document Repository.
              </h2>
            </div>
            <p className="text-slate-300 max-w-2xl leading-relaxed select-none">
              Professional documentation available upon request. Each file is
              accessible after verification approval.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              const colors = ["cyan", "blue", "purple", "pink", "cyan"];
              const color = colors[index % colors.length];
              const colorClasses = {
                cyan: "border-cyan-400/30 bg-slate-900/80 hover:border-cyan-400/60",
                blue: "border-blue-400/30 bg-slate-900/80 hover:border-blue-400/60",
                purple:
                  "border-purple-400/30 bg-slate-900/80 hover:border-purple-400/60",
                pink: "border-pink-400/30 bg-slate-900/80 hover:border-pink-400/60",
              };
              const iconColors = {
                cyan: "border-cyan-400/30 bg-cyan-500/20 text-cyan-400",
                blue: "border-blue-400/30 bg-blue-500/20 text-blue-400",
                purple: "border-purple-400/30 bg-purple-500/20 text-purple-400",
                pink: "border-pink-400/30 bg-pink-500/20 text-pink-400",
              };
              return (
                <div
                  key={doc.title}
                  className={`group relative overflow-hidden rounded-[28px] border backdrop-blur-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] ${colorClasses[color as keyof typeof colorClasses]}`}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border group-hover:scale-110 transition-transform duration-300 ${iconColors[color as keyof typeof iconColors]}`}
                      >
                        <Icon className="h-5 w-5 group-hover:drop-shadow-[0_0_10px_currentColor]" />
                      </div>
                      <span className="text-xs font-bold text-slate-300 border border-slate-700/50 bg-slate-900/80 backdrop-blur-xl px-2 py-1 rounded-full select-none">
                        {doc.format}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white select-none">
                      {doc.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed select-none">
                      {doc.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-400 select-none">
                      <Clock4 className="h-3.5 w-3.5" />
                      Request access
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          id="verification"
          className="group/form-section rounded-[36px] border border-cyan-400/30 bg-slate-900/90 backdrop-blur-3xl p-10 space-y-10 shadow-[0_30px_100px_rgba(56,189,248,0.3)]"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[36px] blur-xl opacity-0 group-hover/form-section:opacity-100 transition-opacity duration-700" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/form-section:opacity-100 transition-opacity duration-500 rounded-[36px]" />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
            <div className="space-y-6 select-none cursor-default">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-bold">
                  Request Information
                </p>
                <h2 className="font-serif text-3xl font-black bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] mt-2">
                  Request Company Information.
                </h2>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  "Professional documentation available",
                  "Response within 1–2 business days",
                  "Secure delivery with reference ID",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl px-4 py-3"
                  >
                    <ShieldCheck className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="mailto:info@maxtechimport.com"
                  className="flex items-center gap-2 group/item cursor-pointer"
                >
                  <div className="p-2 rounded-lg border border-purple-400/30 bg-purple-500/10 group-hover/item:border-purple-400/60 group-hover/item:scale-110 transition-all duration-300">
                    <Mail className="h-4 w-4 text-purple-400 group-hover/item:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
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
                    <Phone className="h-4 w-4 text-blue-400 group-hover/item:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                  </div>
                  <span className="text-slate-300 group-hover/item:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2">
                    <span>+852 47485904</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  </span>
                </a>
              </div>
            </div>
            <div className="rounded-[28px] border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-slate-300 font-bold"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2 bg-slate-900/80 border-cyan-400/30 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-cyan-400/30"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-slate-300 font-bold"
                      >
                        Company / Institution *
                      </Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="mt-2 bg-slate-900/80 border-cyan-400/30 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-cyan-400/30"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300 font-bold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2 bg-slate-900/80 border-cyan-400/30 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-cyan-400/30"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="purpose"
                      className="text-slate-300 font-bold"
                    >
                      Purpose of Request *
                    </Label>
                    <Input
                      id="purpose"
                      required
                      placeholder="e.g., Business partnership, Verification purposes"
                      value={formData.purpose}
                      onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                      }
                      className="mt-2 bg-slate-900/80 border-cyan-400/30 text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-cyan-400/30"
                    />
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl p-4">
                    <Checkbox
                      id="nda"
                      checked={formData.ndaAccepted}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          ndaAccepted: checked as boolean,
                        })
                      }
                      className="border-cyan-400/30"
                    />
                    <Label
                      htmlFor="nda"
                      className="text-sm leading-relaxed cursor-pointer text-slate-300 select-none"
                    >
                      I confirm the requested information will be used solely
                      for legitimate business purposes.
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] transition-all duration-300 cursor-pointer select-none"
                  >
                    Submit Request
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-cyan-400/30 bg-cyan-500/20 text-cyan-400 mx-auto shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white select-none">
                    Request Submitted
                  </h3>
                  <p className="text-slate-300 leading-relaxed select-none">
                    Your request has been received. Our team will process your
                    request within 1–2 business days.
                  </p>
                  <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl p-4">
                    <p className="text-sm text-slate-400 mb-2 font-bold select-none">
                      Reference ID
                    </p>
                    <p className="font-mono text-lg font-bold text-cyan-300 select-none">
                      {referenceId}
                    </p>
                  </div>
                  <p className="text-sm text-slate-300 select-none">
                    Save this ID for tracking. An email will be sent to{" "}
                    <strong className="text-white">{formData.email}</strong>{" "}
                    with next steps.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
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

export default Compliance;
