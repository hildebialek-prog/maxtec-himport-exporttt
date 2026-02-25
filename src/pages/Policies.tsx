import { useState } from "react";
import {
  FileText,
  Shield,
  Lock,
  Package,
  Truck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  AlertCircle,
  Eye,
  Globe,
  FileCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const policies = [
  {
    id: "terms",
    title: "Terms of Service",
    icon: FileText,
    color: "cyan",
    lastUpdated: "2026-01-01",
    sections: [
      {
        heading: "1. Agreement to Terms",
        content: "By accessing and using the services of Maxtech Import and Export Limited, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      },
      {
        heading: "2. Company Information",
        content: "Maxtech Import and Export Limited is a Hong Kong registered company established in 2026. We specialize in import and export services for fashion, technology, and innovative solutions.",
      },
      {
        heading: "3. Services Provided",
        content: "We provide import and export services, product sourcing, quality assurance, logistics coordination, and related business services. All services are subject to availability and our professional assessment.",
      },
      {
        heading: "4. User Responsibilities",
        content: "Users are responsible for providing accurate information, complying with applicable laws and regulations, and ensuring proper authorization for all transactions. Any misrepresentation may result in service termination.",
      },
      {
        heading: "5. Limitation of Liability",
        content: "Maxtech Import and Export Limited shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, except as required by applicable Hong Kong law.",
      },
      {
        heading: "6. Modifications",
        content: "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: Shield,
    color: "purple",
    lastUpdated: "2026-01-01",
    sections: [
      {
        heading: "1. Information We Collect",
        content: "We collect information that you provide directly to us, including name, email address, phone number, company details, and transaction information. We also collect technical data such as IP addresses and browser information.",
      },
      {
        heading: "2. How We Use Your Information",
        content: "We use collected information to provide and improve our services, process transactions, communicate with you, comply with legal obligations, and protect our business interests. We do not sell your personal information to third parties.",
      },
      {
        heading: "3. Data Security",
        content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
      },
      {
        heading: "4. Data Retention",
        content: "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
      },
      {
        heading: "5. Your Rights",
        content: "You have the right to access, correct, delete, or restrict processing of your personal data. You may also object to processing or request data portability. To exercise these rights, please contact us.",
      },
      {
        heading: "6. International Data Transfers",
        content: "As an import and export company, we may transfer your data internationally. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.",
      },
    ],
  },
  {
    id: "returns",
    title: "Return & Refund Policy",
    icon: Package,
    color: "blue",
    lastUpdated: "2026-01-01",
    sections: [
      {
        heading: "1. Return Eligibility",
        content: "Products may be returned within 14 days of delivery, provided they are in original condition, unused, and in original packaging. Custom orders, perishable items, and items marked as non-returnable are excluded.",
      },
      {
        heading: "2. Return Process",
        content: "To initiate a return, please contact our customer service team with your order number and reason for return. We will provide return authorization and shipping instructions. Returns must be authorized before shipping.",
      },
      {
        heading: "3. Refund Processing",
        content: "Once we receive and inspect the returned item, we will process your refund within 7-14 business days. Refunds will be issued to the original payment method. Shipping costs are non-refundable unless the return is due to our error.",
      },
      {
        heading: "4. Damaged or Defective Items",
        content: "If you receive a damaged or defective item, please contact us immediately with photos and description. We will arrange for replacement or full refund, including return shipping costs.",
      },
      {
        heading: "5. International Returns",
        content: "For international orders, return shipping costs are the responsibility of the customer unless the return is due to our error. Customs duties and taxes are non-refundable.",
      },
      {
        heading: "6. Exchanges",
        content: "We currently do not offer direct exchanges. To exchange an item, please return the original item for a refund and place a new order for the desired item.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    icon: Truck,
    color: "pink",
    lastUpdated: "2026-01-01",
    sections: [
      {
        heading: "1. Shipping Methods",
        content: "We offer various shipping methods including standard shipping, express shipping, and freight services for bulk orders. Available methods depend on destination, product type, and order value.",
      },
      {
        heading: "2. Shipping Times",
        content: "Standard shipping typically takes 7-14 business days for international orders and 3-7 business days for domestic orders. Express shipping is available for faster delivery (3-7 business days internationally). Actual delivery times may vary based on customs processing.",
      },
      {
        heading: "3. Shipping Costs",
        content: "Shipping costs are calculated based on destination, weight, dimensions, and shipping method selected. Costs are displayed at checkout before order confirmation. Free shipping may be available for orders above a certain value.",
      },
      {
        heading: "4. Customs and Duties",
        content: "International orders may be subject to customs duties, taxes, and fees imposed by the destination country. These charges are the responsibility of the customer and are not included in our shipping costs.",
      },
      {
        heading: "5. Order Tracking",
        content: "Once your order ships, you will receive a tracking number via email. You can track your order status through our website or the carrier's tracking system.",
      },
      {
        heading: "6. Delivery Issues",
        content: "If you experience delivery issues, please contact us immediately. We will work with the carrier to resolve the issue. Claims for lost or damaged shipments must be filed within 30 days of expected delivery date.",
      },
    ],
  },
  {
    id: "quality",
    title: "Quality Assurance Policy",
    icon: CheckCircle2,
    color: "cyan",
    lastUpdated: "2026-01-01",
    sections: [
      {
        heading: "1. Quality Standards",
        content: "Maxtech Import and Export Limited is committed to maintaining the highest quality standards. All products undergo rigorous quality control processes before shipment to ensure they meet our specifications and customer expectations.",
      },
      {
        heading: "2. Quality Control Process",
        content: "Our quality control process includes supplier verification, pre-shipment inspections, sample testing, and final quality checks. We work with certified quality assurance professionals and follow international quality standards.",
      },
      {
        heading: "3. Supplier Standards",
        content: "We partner only with verified suppliers who meet our quality, ethical, and compliance standards. Regular audits and assessments ensure ongoing compliance with our requirements.",
      },
      {
        heading: "4. Product Specifications",
        content: "All products are verified against specified requirements including dimensions, materials, functionality, and appearance. Any deviations are documented and addressed before shipment.",
      },
      {
        heading: "5. Quality Issues",
        content: "If you receive a product that does not meet quality standards, please contact us immediately. We will investigate and provide appropriate resolution, including replacement, repair, or refund as applicable.",
      },
      {
        heading: "6. Continuous Improvement",
        content: "We continuously review and improve our quality assurance processes based on customer feedback, industry best practices, and technological advancements to ensure the highest level of service.",
      },
    ],
  },
  {
    id: "data-protection",
    title: "Data Protection Policy",
    icon: Lock,
    color: "purple",
    lastUpdated: "2026-01-01",
    sections: [
      {
        heading: "1. Data Protection Principles",
        content: "We are committed to protecting your personal data in accordance with applicable data protection laws, including the Hong Kong Personal Data (Privacy) Ordinance and GDPR where applicable.",
      },
      {
        heading: "2. Lawful Basis for Processing",
        content: "We process personal data based on lawful bases including consent, contract performance, legal obligations, legitimate interests, and vital interests. We ensure transparency in our data processing activities.",
      },
      {
        heading: "3. Data Minimization",
        content: "We collect and process only the personal data that is necessary for the specified purposes. We do not collect excessive or irrelevant data, and we regularly review and update our data collection practices.",
      },
      {
        heading: "4. Security Measures",
        content: "We implement technical and organizational security measures including encryption, access controls, regular security audits, staff training, and secure data storage to protect your personal data.",
      },
      {
        heading: "5. Third-Party Sharing",
        content: "We may share your data with trusted third parties such as shipping partners, payment processors, and service providers, only when necessary and with appropriate safeguards in place.",
      },
      {
        heading: "6. Data Breach Response",
        content: "In the event of a data breach, we will notify affected individuals and relevant authorities as required by law. We have incident response procedures in place to minimize impact and prevent future breaches.",
      },
    ],
  },
];

const Policies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: "border-cyan-400/30",
        bg: "bg-cyan-500/20",
        text: "text-cyan-300",
        icon: "text-cyan-400",
        hoverBorder: "hover:border-cyan-400/60",
        hoverShadow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]",
        glow: "rgba(56,189,248,0.3)",
        gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
      },
      purple: {
        border: "border-purple-400/30",
        bg: "bg-purple-500/20",
        text: "text-purple-300",
        icon: "text-purple-400",
        hoverBorder: "hover:border-purple-400/60",
        hoverShadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]",
        glow: "rgba(168,85,247,0.3)",
        gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
      },
      blue: {
        border: "border-blue-400/30",
        bg: "bg-blue-500/20",
        text: "text-blue-300",
        icon: "text-blue-400",
        hoverBorder: "hover:border-blue-400/60",
        hoverShadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]",
        glow: "rgba(59,130,246,0.3)",
        gradient: "from-blue-500/20 via-cyan-500/20 to-purple-500/20",
      },
      pink: {
        border: "border-pink-400/30",
        bg: "bg-pink-500/20",
        text: "text-pink-300",
        icon: "text-pink-400",
        hoverBorder: "hover:border-pink-400/60",
        hoverShadow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]",
        glow: "rgba(236,72,153,0.3)",
        gradient: "from-pink-500/20 via-rose-500/20 to-purple-500/20",
      },
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

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
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in select-none cursor-default">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(56,189,248,0.3)] mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400 animate-sparkle" />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
              Legal & Policies
            </span>
            <FileCheck className="h-4 w-4 text-purple-400 animate-sparkle" />
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
            Policies & Legal Information
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive policies and legal information for Maxtech Import and Export Limited. 
            Please review our terms, privacy practices, and service policies.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-fade-in">
          {policies.map((policy) => {
            const colors = getColorClasses(policy.color);
            const Icon = policy.icon;
            return (
              <button
                key={policy.id}
                onClick={() => {
                  const element = document.getElementById(policy.id);
                  element?.scrollIntoView({ behavior: "smooth", block: "start" });
                  setExpandedPolicy(policy.id);
                }}
                className={`group relative rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-xl p-4 text-center transition-all duration-300 ${colors.hoverBorder} ${colors.hoverShadow}`}
                style={{ boxShadow: `0 0 15px ${colors.glow}` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                
                <Icon className={`h-6 w-6 mx-auto mb-2 ${colors.icon} group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300 relative z-10`} />
                <p className={`text-xs font-bold ${colors.text} relative z-10 select-none`}>
                  {policy.title.split(" ")[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Policies List */}
        <div className="space-y-6">
          {policies.map((policy) => {
            const colors = getColorClasses(policy.color);
            const Icon = policy.icon;
            const isExpanded = expandedPolicy === policy.id;

            return (
              <div
                key={policy.id}
                id={policy.id}
                className={`group/policy relative rounded-[32px] border ${colors.border} bg-slate-900/90 backdrop-blur-3xl transition-all duration-500 overflow-hidden ${
                  isExpanded ? colors.hoverShadow : ""
                }`}
                style={{ boxShadow: `0 20px 60px ${colors.glow}` }}
              >
                {/* Outer glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-[32px] blur-xl opacity-0 group-hover/policy:opacity-100 transition-opacity duration-700`} />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/policy:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Policy Header */}
                  <button
                    onClick={() => togglePolicy(policy.id)}
                    className="w-full p-6 lg:p-8 flex items-center justify-between text-left cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`p-3 rounded-2xl border ${colors.border} ${colors.bg}`} style={{ boxShadow: `0 0 15px ${colors.glow}` }}>
                        <Icon className={`h-6 w-6 ${colors.icon} drop-shadow-[0_0_10px_currentColor]`} />
                      </div>
                      <div className="flex-1">
                        <h2 className={`text-xl lg:text-2xl font-black ${colors.text} mb-2`} style={{ textShadow: `0 0 15px ${colors.glow}` }}>
                          {policy.title}
                        </h2>
                        <p className="text-sm text-slate-400">
                          Last updated: {policy.lastUpdated}
                        </p>
                      </div>
                    </div>
                    <div className={`p-2 rounded-xl border ${colors.border} ${colors.bg} transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                      {isExpanded ? (
                        <ChevronUp className={`h-5 w-5 ${colors.icon}`} />
                      ) : (
                        <ChevronDown className={`h-5 w-5 ${colors.icon}`} />
                      )}
                    </div>
                  </button>

                  {/* Policy Content */}
                  {isExpanded && (
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 animate-fade-in">
                      <div className="space-y-6 border-t border-slate-700/50 pt-6">
                        {policy.sections.map((section, index) => (
                          <div
                            key={index}
                            className="group/section rounded-2xl border border-slate-700/30 bg-slate-900/60 backdrop-blur-xl p-5 hover:border-slate-600/50 transition-all duration-300"
                          >
                            <h3 className="text-lg font-bold text-white mb-3 select-none">
                              {section.heading}
                            </h3>
                            <p className="text-slate-300 leading-relaxed select-none">
                              {section.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 group/contact relative rounded-[32px] border border-purple-400/30 bg-slate-900/90 backdrop-blur-3xl p-8 lg:p-12 shadow-[0_30px_100px_rgba(168,85,247,0.3)]">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-[32px] blur-xl opacity-0 group-hover/contact:opacity-100 transition-opacity duration-700" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500 rounded-[32px]" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-slate-900/80 backdrop-blur-xl px-4 py-1.5 text-xs font-bold text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] mb-4">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>Questions?</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black mb-4 bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] select-none">
              Need More Information?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto select-none">
              If you have questions about our policies or need clarification on any terms, 
              please don't hesitate to contact us. Our team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-purple-400/30 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer select-none"
            >
              <span className="pointer-events-none">Contact Us</span>
              <Eye className="h-4 w-4 pointer-events-none" />
            </Link>
          </div>
        </div>
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

export default Policies;
