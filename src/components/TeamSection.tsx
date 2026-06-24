import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Mail, 
  Linkedin, 
  Copy, 
  Check, 
  Globe, 
  Users2, 
  ShieldCheck, 
  Cpu, 
  Compass, 
  PhoneCall, 
  Users, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface TeamMember {
  name: string;
  initials: string;
  roles: string[];
  email: string;
  badge: string;
  focus: string;
  color: string;
  bgGradient: string;
  tagline: string;
  skills: string[];
}

export function TeamSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const coreLeaders: TeamMember[] = [
    {
      name: "Ali Hassan Chand",
      initials: "AHC",
      roles: ["Founder", "Chief Executive Officer (CEO)", "Managing Director (MD)"],
      email: "leadership@metawaveinnovations.com",
      badge: "FOUNDER & BOARD MEMBER",
      focus: "Directs long-term corporate governance, executive partnerships, and strategic tech deployment pipelines.",
      color: "text-emerald-700 bg-emerald-50 border-emerald-100",
      bgGradient: "from-emerald-600 to-[#326E45]",
      tagline: "Steering the frontier of modern software engineering.",
      skills: ["Strategic Governance", "Enterprise Partnerships", "Venture Growth"]
    },
    {
      name: "Suhail Siyal",
      initials: "SS",
      roles: ["Partner", "Director of Marketing & Business Growth"],
      email: "suhail.md@metawaveinnovations.com",
      badge: "PARTNER & STRATEGIST",
      focus: "Manages international corporate client relationships, brand capitalization, and global market positioning.",
      color: "text-blue-700 bg-blue-50 border-blue-100",
      bgGradient: "from-blue-600 to-indigo-700",
      tagline: "Catalyzing scalable commercial architectures.",
      skills: ["Global Scale", "Brand Capitalization", "Client Stewardship"]
    },
    {
      name: "Muntaha Sheikh",
      initials: "MS",
      roles: ["Partner", "Lead Full-Stack & Mobile Solutions Architect"],
      email: "muntaha@metawaveinnovations.com",
      badge: "PARTNER & SYSTEMS LEAD",
      focus: "Architects high-density, cloud-native backend environments and premium mobile applications for scale.",
      color: "text-purple-700 bg-purple-50 border-purple-100",
      bgGradient: "from-purple-600 to-violet-700",
      tagline: "Translating extreme operational logic into pristine code.",
      skills: ["Systems Architecture", "Cloud-Native", "Mobile Engineering"]
    },
    {
      name: "Abdul Ahad Arain",
      initials: "AAA",
      roles: ["Partner", "Front-End Development Supervisor & UI/UX Specialist"],
      email: "ahad@metawaveinnovations.com",
      badge: "PARTNER & CREATIVE LEAD",
      focus: "Supervises interactive layout development, front-end quality engineering, and high-fidelity product design.",
      color: "text-teal-700 bg-teal-50 border-teal-100",
      bgGradient: "from-teal-600 to-emerald-600",
      tagline: "Refining visual hierarchy into ultimate human interfaces.",
      skills: ["UI/UX Engineering", "Design Systems", "Web Performance"]
    }
  ];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };

  return (
    <section id="executive-team" className="py-24 bg-slate-50/50 border-b border-slate-200/60 relative overflow-hidden">
      
      {/* Decorative Grid Line System */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:16px_28px] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-[350px] h-[350px] bg-[#326E45]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-100 bg-white shadow-3xs">
            <Sparkles size={11} className="text-[#326E45] animate-pulse" />
            <span className="text-[10px] font-mono font-extrabold tracking-widest text-[#326E45] uppercase">
              EXECUTIVE BOARD & ARCHITECTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            The Master Assembly of <span className="bg-gradient-to-r from-[#326E45] via-[#245032] to-[#1a3d24] bg-clip-text text-transparent">Elite Leadership</span>
          </h2>
          <p className="text-sm sm:text-[14.5px] text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
            Our governance board fuses business-growth mastery with rigorous technical supervision to guarantee flawless product deliveries.
          </p>
        </div>

        {/* Master Team Grid (4 Members) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {coreLeaders.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.015)] hover:shadow-[0_20px_45px_rgba(50,110,69,0.05)] hover:border-[#326E45]/25 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Internal subtle header shine card */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#326E45]/40 via-emerald-600/30 to-[#326E45]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-6 space-y-5">
                {/* Visual Avatar Monogram */}
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.bgGradient} p-0.5 shadow-md shadow-slate-200/40 group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden group-hover:bg-slate-50/50 transition-colors">
                      {/* Stylized visual vector network in background */}
                      <div className="absolute inset-0 bg-[radial-gradient(#326E45_1px,transparent_1px)] [background-size:6px_6px] opacity-10" />
                      <span className="text-base font-display font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent relative z-10">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                  
                  <span className={`px-2.5 py-0.5 rounded text-[8.5px] font-mono font-extrabold tracking-wider ${member.color}`}>
                    {member.badge}
                  </span>
                </div>

                {/* Team member Identity details */}
                <div className="space-y-1.5 text-left">
                  <h3 className="text-base font-display font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-[#326E45] transition-colors">
                    {member.name}
                  </h3>
                  
                  {/* List out all official roles with delicate separator borders */}
                  <div className="flex flex-col gap-1 pt-1">
                    {member.roles.map((role, rIdx) => (
                      <span key={rIdx} className="text-[11.5px] text-slate-500 font-medium leading-none flex items-center gap-1">
                        {rIdx === 0 ? (
                          <span className="w-1 h-1 rounded-full bg-[#326E45]" />
                        ) : (
                          <span className="w-1 h-1 rounded-full bg-slate-300" />
                        )}
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Narrative focus description with a border accent */}
                <div className="text-left border-l border-slate-100 pl-3 pt-0.5">
                  <p className="text-[11.5px] text-slate-400 italic font-medium leading-relaxed mb-2">
                    "{member.tagline}"
                  </p>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed">
                    {member.focus}
                  </p>
                </div>
              </div>

              {/* Bottom footer compartment of card with email interactions */}
              <div className="px-6 py-4.5 bg-slate-50/70 border-t border-slate-100/80 flex items-center justify-between gap-2">
                <div className="flex flex-col items-start truncate min-w-0">
                  <span className="text-[8px] font-mono text-slate-400 font-extrabold tracking-wider uppercase leading-none">
                    SECURED MAILBOX
                  </span>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-[11px] font-mono font-semibold text-[#326E45] hover:text-[#20462c] transition-colors truncate block mt-0.5"
                    title={member.email}
                  >
                    {member.email}
                  </a>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopyEmail(member.email)}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-[#326E45] hover:border-[#326E45]/20 hover:bg-[#326E45]/5 transition-all shadow-3xs cursor-pointer flex items-center justify-center relative"
                    title="Copy Email Address"
                  >
                    <AnimatePresence mode="wait">
                      {copiedEmail === member.email ? (
                        <motion.div
                          key="copied"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Check size={11} className="text-emerald-600" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Copy size={11} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Talent Network Bottom Section */}
        <div className="bg-gradient-to-br from-[#245032]/[0.015] via-transparent to-transparent border border-[#326E45]/15 rounded-3xl p-6 lg:p-8 text-left relative overflow-hidden">
          {/* Subtle graphic layout nodes */}
          <div className="absolute inset-0 bg-[radial-gradient(#326E45_1px,transparent_1px)] [background-size:12px_12px] opacity-5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#326E45]/[0.03] to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Vetted 30 members network description */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/60 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#326E45]"></span>
                </span>
                <span className="text-[9.5px] font-mono font-bold text-[#326E45] tracking-widest uppercase">
                  GLOBAL TALENT NETWORK // VETTING DIVISION
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 leading-snug">
                Frictionless Scaling Powered by <span className="bg-gradient-to-r from-[#326E45] to-[#245032] bg-clip-text text-transparent">30+ Vetted Engineers</span>
              </h3>
              
              <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed max-w-3xl">
                Behind our executive strategic leadership operates a dedicated global engineering matrix of over <strong className="text-slate-800 font-semibold">30 elite professionals</strong>. Each resource undergoes strict engineering assessment and procedural vetting covering cloud reliability, modern interface development, and security protocols. This deep pool allows us to deploy highly specialized teams at lightning-fast speed, providing custom systems that are completely aligned with enterprise-grade standards.
              </p>

              {/* Badges signifying professional domains */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Cloud Infrastructure Labs", "Native iOS & Android Engineers", "Security Audit Masters", "Full-Stack Deployment Experts", "Quality Assurance Engineers"].map((domain, index) => (
                  <span key={index} className="px-2.5 py-1 bg-[#326E45]/6 border border-[#326E45]/15 rounded-lg text-[9.5px] font-mono font-bold text-[#245032] tracking-wide">
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* General & Support Operations Mailbox Sub-grid */}
            <div className="lg:col-span-4 bg-white/70 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-5 space-y-4 shadow-3xs">
              <span className="text-[9px] font-mono font-extrabold text-slate-400 tracking-wider uppercase block border-b border-slate-100 pb-2">
                OPERATIONAL ENGAGEMENT NODES
              </span>

              {/* General Operations Node */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="font-bold text-slate-600">General Team Operations</span>
                  <span className="text-[8px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded uppercase font-extrabold border border-emerald-100">
                    2HR SLA
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2 bg-slate-50 border border-slate-150 rounded-xl">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Mail size={12} className="text-slate-400 shrink-0" />
                    <a 
                      href="mailto:team@metawaveinnovations.com"
                      className="text-[11.5px] font-mono font-bold text-[#326E45] hover:text-[#20462c] transition-colors truncate"
                    >
                      team@metawaveinnovations.com
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopyEmail("team@metawaveinnovations.com")}
                    className="p-1.5 rounded bg-white border border-slate-200 text-slate-400 hover:text-[#326E45] hover:bg-slate-50 transition-colors cursor-pointer"
                    title="Copy Address"
                  >
                    {copiedEmail === "team@metawaveinnovations.com" ? (
                      <Check size={10} className="text-emerald-600" />
                    ) : (
                      <Copy size={10} />
                    )}
                  </button>
                </div>
              </div>

              {/* Client Support Node */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="font-bold text-slate-600">Client Support & Service Desk</span>
                  <span className="text-[8px] bg-[#326E45]/8 text-[#245032] px-1.5 py-0.5 rounded uppercase font-extrabold border border-[#326E45]/15">
                    24/7 ACTIVE
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2 bg-slate-50 border border-slate-150 rounded-xl">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <ShieldCheck size={12} className="text-slate-400 shrink-0" />
                    <a 
                      href="mailto:support@metawaveinnovations.com"
                      className="text-[11.5px] font-mono font-bold text-[#326E45] hover:text-[#20462c] transition-colors truncate"
                    >
                      support@metawaveinnovations.com
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopyEmail("support@metawaveinnovations.com")}
                    className="p-1.5 rounded bg-white border border-slate-200 text-slate-400 hover:text-[#326E45] hover:bg-slate-50 transition-colors cursor-pointer"
                    title="Copy Address"
                  >
                    {copiedEmail === "support@metawaveinnovations.com" ? (
                      <Check size={10} className="text-emerald-600" />
                    ) : (
                      <Copy size={10} />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="pt-1 text-center">
                <span className="text-[8.5px] font-mono text-slate-400 tracking-wide block">
                  All support transactions are fully end-to-end encrypted.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
