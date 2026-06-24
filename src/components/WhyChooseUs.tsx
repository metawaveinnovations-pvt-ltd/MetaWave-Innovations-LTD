import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Check, X, Sparkles, ArrowRight, Table, Briefcase, Award, Zap, Cloud, Shield, HeartHandshake, MessageSquare, ChevronRight } from 'lucide-react';

// Newly generated high-fidelity asset path
const cloudArchitectureVisual = '/src/assets/images/cloud_architecture_visual_1782045903167.jpg';

interface Differentiator {
  title: string;
  desc: string;
  icon: any;
}

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const differentiators: Differentiator[] = [
    { title: 'Business-First Approach', desc: 'We align raw technical outputs directly with your corporate KPIs, conversion statistics, and operating margins to ensure a clear financial ROI.', icon: Briefcase },
    { title: 'Engineering Excellence', desc: 'Writing strictly typed, air-gapped, pristine TypeScript codebases following military-grade architectural practices.', icon: Award },
    { title: 'AI-Driven Innovation', desc: 'Directly integrating intelligent LLMs, cognitive assistants, predictive analytics models, and advanced automation pipelines.', icon: Zap },
    { title: 'Scalable Solutions', desc: 'Engineering modular container pipelines and distributed cloud networks capable of supporting millions of active sessions.', icon: Cloud },
    { title: 'International Delivery', desc: 'Strategically matching high-authority Consulting Hubs in London/Dubai with our state-of-the-art offshore R&D centers.', icon: Sparkles },
    { title: 'Quality-Focused Processes', desc: 'Enforcing standardized testing coverage, complete regression validations, and strict performance latency metrics.', icon: Shield },
    { title: 'Long-Term Partnerships', desc: 'Advisory structures supporting our client partners long after product launch to manage scale, security, and updates.', icon: HeartHandshake },
    { title: 'Transparent Communication', desc: 'Providing absolute visibility with comprehensive sprint boards, weekly audits, direct communication channels, and clear logs.', icon: MessageSquare },
    { title: 'Agile Execution', desc: 'Using iterative rapid sprints to roll out complete functional software features in recorded weeks rather than months.', icon: ChevronRight }
  ];

  const criteriaList = [
    {
      id: 0,
      title: 'Service Scope & Depth',
      metawave: 'Enterprise codebases, custom SaaS platforms, AI-driven pipelines, and high-throughput cloud middleware.',
      agency: 'Simple marketing landing layouts, basic WordPress templates, and static digital brochures.',
      freelancer: 'Isolated bug adjustments, fragile scripts, and short-term code overrides.',
      detail: 'MetaWave designs deep architectural environments, whereas typical contractors supply superficial templates.'
    },
    {
      id: 1,
      title: 'Reliability & IP Trust',
      metawave: 'Full-time corporate engineers, strict legally-binding NDAs, complete IP ownership assignment, and SECP filing backing.',
      agency: 'Fluid, high-turnover freelancer staffing pools, ambiguous templates, and prolonged onboarding times.',
      freelancer: 'High delivery risks, sudden visual dropouts, and zero statutory legal assets or enforcement recourse.',
      detail: 'Our corporate registration protects your IP absolutely. We support client operations 24/7 without developer dependency risks.'
    },
    {
      id: 2,
      title: 'Engineering Rigour',
      metawave: 'Pristine TypeScript, rigorous ESLint syntax compliance, automated regression testing, and dense architecture wikis.',
      agency: 'Standard open-source boilerplates, minimal testing, and thin developer-facing documentation logs.',
      freelancer: 'Unstable or undocumented scripts, manual file transfers, and highly varying technology standards.',
      detail: 'Every single file we ship compiles cleanly through automated pipelines to ensure seamless updates and code handovers.'
    },
    {
      id: 3,
      title: 'Support Compliance SLA',
      metawave: 'Proactive round-the-clock server health tracking, rapid hotfix staging paths, and dedicated strategy advisors.',
      agency: 'Standard operating hours only. Urgent weekend outages remain ignored until standard business hours resume.',
      freelancer: 'Asynchronous, highly delayed email cycles with zero availability indicators or server monitoring tools.',
      detail: 'We provide immediate deployment paths and telemetry alerts so that your systems experience absolute maximum uptime.'
    }
  ];

  return (
    <section id="why-metawave" className="py-24 bg-white border-b border-slate-200/50 relative overflow-hidden">
      
      {/* Background soft color blurs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] rounded-full bg-emerald-500/[0.012] blur-[110px]" />
        <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-slate-500/[0.012] blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-xs">
            <HelpCircle size={11} className="text-[#326E45]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#326E45] uppercase">
              THE METAWAVE DIFFERENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            A New Paradigm of <span className="bg-gradient-to-r from-[#326E45] via-[#245032] to-[#1a3d24] bg-clip-text text-transparent">Technology Delivery</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
            By combining high-end consulting leadership with rigid onshore engineering standards, we eliminate common software delivery bottlenecks.
          </p>
        </div>

        {/* 9 Corporate Differentiators Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {differentiators.map((diff, dIdx) => {
            const DiffIcon = diff.icon;
            
            // Refined corporate color scheme mapping that aligns with MetaWave green/charcoal
            const colors = [
              { text: 'text-[#326E45]', bg: 'bg-[#326E45]/8', border: 'border-[#326E45]/15', badge: 'bg-[#326E45]/6 text-[#326E45]', status: 'ALIGN_KPI' },
              { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', badge: 'bg-indigo-50 text-indigo-700', status: 'MIL_SPEC' },
              { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', badge: 'bg-purple-50 text-purple-700', status: 'COGNITIVE' },
              { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', badge: 'bg-blue-50 text-blue-700', status: 'POD_SCALE' },
              { text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-100', badge: 'bg-sky-50 text-sky-700', status: 'GLOBAL_RND' },
              { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', badge: 'bg-emerald-50 text-emerald-700', status: 'TEST_100' },
              { text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100', badge: 'bg-teal-50 text-teal-700', status: 'LONG_TERM' },
              { text: 'text-slate-700', bg: 'bg-slate-50', border: 'border-slate-150', badge: 'bg-slate-50 text-slate-700', status: 'LIVE_AUDIT' },
              { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', badge: 'bg-amber-50 text-amber-700', status: 'RAPID_ITER' },
            ][dIdx] || { text: 'text-[#326E45]', bg: 'bg-[#326E45]/8', border: 'border-[#326E45]/15', badge: 'bg-[#326E45]/6 text-[#326E45]', status: 'ACTIVE' };

            return (
              <motion.div 
                key={diff.title}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative p-6.5 rounded-2xl border border-slate-200/80 bg-white hover:border-[#326E45]/30 hover:shadow-[0_16px_36px_rgba(50,110,69,0.06)] transition-all duration-300 text-left flex flex-col justify-between overflow-hidden"
              >
                {/* Modern subtle corner gradient accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#326E45]/[0.02] to-transparent rounded-bl-full pointer-events-none group-hover:from-[#326E45]/[0.06] transition-all duration-300" />
                
                <div className="space-y-4.5">
                  {/* Card Header with Icon & Tech Meta Node */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} transition-all duration-300 group-hover:scale-105`}>
                      <DiffIcon size={19} strokeWidth={2.2} />
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-wider ${colors.badge}`}>
                        {colors.status}
                      </span>
                      <span className="font-mono text-[9px] font-extrabold tracking-widest text-slate-400 group-hover:text-[#326E45] transition-colors">
                        [0{dIdx + 1}]
                      </span>
                    </div>
                  </div>

                  {/* Colored Headings tailored for corporate design */}
                  <div className="space-y-2">
                    <h4 className="text-[14px] sm:text-[15px] font-display font-extrabold text-[#245032] tracking-tight leading-snug group-hover:text-[#326E45] transition-colors">
                      {diff.title}
                    </h4>
                    <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                      {diff.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom line highly-structured decorative indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#326E45]/50 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#326E45]/80"></span>
                    </span>
                    <span className="text-[8.5px] font-mono tracking-wider text-slate-400 font-bold uppercase select-none group-hover:text-slate-500">
                      SYSTEM_OK // METRICS
                    </span>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#326E45]/5 text-slate-400 group-hover:text-[#326E45] border border-slate-100/80 group-hover:border-[#326E45]/20 flex items-center justify-center transition-all shadow-3xs shrink-0">
                    <ArrowRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Production Framework Visual Blueprint Block */}
        <div className="my-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto p-6 sm:p-10 rounded-[2.5rem] bg-slate-50/70 border border-slate-150 relative overflow-hidden text-left shadow-2xs">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-100 bg-white shadow-3xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#326E45] animate-pulse" />
              <span className="text-[8.5px] font-mono font-black tracking-widest text-[#326E45] uppercase">
                Enterprise Scale Architecture
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 leading-tight">
              Ultra-Scalable <span className="bg-gradient-to-r from-[#326E45] to-[#245032] bg-clip-text text-transparent">Distributed Delivery</span> System
            </h3>
            
            <p className="text-[12px] text-slate-500 leading-relaxed font-normal">
              Our custom pipeline decouples dynamic user requests from secure database backplanes. This protects client systems from standard cloud service failures and guarantees latency averages under 8ms.
            </p>

            <div className="space-y-4.5 pt-1">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 text-[#326E45] shrink-0 flex items-center justify-center mt-0.5">
                  <Check size={11} strokeWidth={3} />
                </span>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-800 block">Encrypted Transport Layers</span>
                  <span className="text-[10.5px] text-slate-450 block leading-relaxed font-normal">Pristine secure handshakes implementing standard corporate compliance.</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 text-[#326E45] shrink-0 flex items-center justify-center mt-0.5">
                  <Check size={11} strokeWidth={3} />
                </span>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-800 block">Dynamic Auto-Scaling Pods</span>
                  <span className="text-[10.5px] text-slate-450 block leading-relaxed font-normal">Autonomic orchestration scripts configured to buffer micro-peaks gracefully.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            {/* Ambient behind neon glare */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#326E45]/5 to-transparent rounded-[1.8rem] blur-xl opacity-80" />
            
            <div className="relative rounded-[1.8rem] overflow-hidden border border-slate-200/90 shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={cloudArchitectureVisual} 
                alt="MetaWave Distributed Cloud Architecture Blueprint" 
                className="w-full object-cover rounded-[1.8rem] aspect-16/10 transform group-hover:scale-[1.015] transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-150 font-mono text-[9px] font-black text-slate-700 tracking-wide">
                ACTIVE PIPELINE // ZONE SECURE
              </div>
            </div>
          </div>

        </div>

        {/* Section Divider Subheader */}
        <div className="text-left max-w-4xl mx-auto mb-8 border-b border-slate-100 pb-4">
          <span className="text-[8px] font-mono font-black text-[#326E45] tracking-widest uppercase block mb-1">AUDIT MATRIX</span>
          <h3 className="text-sm sm:text-base font-display font-extrabold text-slate-800">
            Interactive side-by-side <span className="bg-gradient-to-r from-[#326E45] to-[#245032] bg-clip-text text-transparent">contractor comparisons</span>
          </h3>
        </div>

        {/* Dynamic Comparison Matrix Tabs */}
        <div className="max-w-5xl mx-auto mb-10" id="matrix-tabs-container">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 p-2 bg-slate-50 border border-slate-200/80 rounded-[2rem] shadow-3xs">
            {criteriaList.map((crit, idx) => (
              <button
                key={crit.id}
                id={`matrix-tab-btn-${idx}`}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3.5 rounded-2xl text-xs font-bold tracking-tight transition-all relative flex items-center gap-2.5 cursor-pointer outline-none select-none ${
                  activeTab === idx
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                {activeTab === idx && (
                  <motion.div 
                    layoutId="activeMatrixTabIndicator" 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-[#326E45] to-[#245032] rounded-2xl -z-10 shadow-sm" 
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className={`text-[9px] font-mono font-black ${activeTab === idx ? 'text-emerald-250' : 'text-slate-400'}`}>
                  0{crit.id + 1}
                </span>
                <span className="font-sans">{crit.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Comparison Matrix Panel */}
        <div className="max-w-5xl mx-auto mb-12" id="matrix-panel-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`matrix-panel-node-${activeTab}`}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200/70 border-t-4 border-t-[#326E45] rounded-3xl p-6 lg:p-9 shadow-[0_24px_56px_rgba(50,110,69,0.03)] space-y-8 text-left relative overflow-hidden"
            >
              {/* Visual grid pattern background layer for tech aesthetic */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#326E45]/[0.025] via-transparent to-transparent rounded-bl-full pointer-events-none" />

              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 relative z-10" id="matrix-header-row">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#326E45]/60 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#326E45]"></span>
                    </span>
                    <span className="text-[9px] font-mono font-bold text-[#326E45] tracking-widest uppercase bg-[#326E45]/8 px-2.5 py-0.5 rounded-md">
                      EVALUATION SEGMENT // 0{activeTab + 1}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-extrabold text-[#245032] tracking-tight leading-tight">
                    {criteriaList[activeTab].title}
                  </h4>
                </div>
                
                <div className="px-3.5 py-1.5 bg-[#326E45]/8 border border-[#326E45]/15 rounded-xl flex items-center gap-2 self-start sm:self-center shadow-3xs" id="matrix-audit-badge">
                  <Sparkles size={13} className="text-[#326E45] animate-pulse" />
                  <span className="text-[9.5px] font-mono text-[#245032] font-black tracking-wider uppercase">
                    METRAX AUDIT ENGINE
                  </span>
                </div>
              </div>

              {/* Comparison Core Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10" id="matrix-grid">
                
                {/* MetaWave - The Vetted Enterprise Option */}
                <div className="md:col-span-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#326E45]/[0.04] via-emerald-50/[0.04] to-transparent border-2 border-[#326E45]/30 hover:border-[#326E45]/50 shadow-[0_8px_30px_rgba(50,110,69,0.03)] hover:shadow-[0_12px_40px_rgba(50,110,69,0.06)] transition-all duration-300 relative flex flex-col justify-between overflow-hidden group/card" id="metawave-card">
                  {/* Background glows and accents */}
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#326E45]/[0.02] rounded-full blur-2xl group-hover/card:bg-[#326E45]/[0.05] transition-all duration-300" />
                  <div className="absolute top-0 right-0">
                    <span className="text-[8px] font-mono font-extrabold text-white bg-gradient-to-r from-[#326E45] to-[#245032] px-3.5 py-1.5 rounded-bl-xl uppercase tracking-wider select-none shadow-sm">
                      RECOMMENDED HUB
                    </span>
                  </div>
                  
                  <div className="space-y-4.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#326E45] to-[#245032] flex items-center justify-center text-white shadow-md shadow-[#326E45]/10 group-hover/card:scale-105 transition-transform">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono uppercase font-black tracking-widest text-[#326E45]">
                          ENTERPRISE STACK
                        </span>
                        <span className="text-sm font-sans font-bold text-slate-900 leading-none">
                          MetaWave Innovations
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-[13.5px] sm:text-[14px] text-slate-800 font-semibold leading-relaxed font-sans border-l-2 border-[#326E45]/30 pl-3">
                      {criteriaList[activeTab].metawave}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#326E45]/15 flex items-center justify-between text-[9px] font-mono text-[#326E45] font-extrabold tracking-wider">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#326E45]" />
                      SECURED DELIVERABLE
                    </span>
                    <span>100% IP ASSURED</span>
                  </div>
                </div>

                {/* Traditional Sourcing Options */}
                <div className="md:col-span-6 flex flex-col gap-4" id="alternative-options-wrapper">
                  
                  {/* Traditional agencies */}
                  <div className="p-5 rounded-2xl bg-slate-50/50 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex-1 flex flex-col justify-between group/agency" id="agencies-card">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 group-hover/agency:text-red-400 group-hover/agency:border-red-200 group-hover/agency:bg-red-50 transition-colors">
                            <X size={11} strokeWidth={3} />
                          </div>
                          <span className="text-[10px] font-mono uppercase font-extrabold tracking-wider text-slate-500">Traditional Agencies</span>
                        </div>
                        <span className="text-[8px] font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded uppercase">LEGACY MODEL</span>
                      </div>
                      <p className="text-[11.5px] sm:text-[12px] text-slate-600 leading-relaxed font-medium">
                        {criteriaList[activeTab].agency}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-[8px] font-mono text-slate-400 font-bold tracking-wider">
                      <span>CAPACITY CAP: VARIABLE</span>
                      <span>ADMIN OVERHEAD</span>
                    </div>
                  </div>

                  {/* Outsource freelancers */}
                  <div className="p-5 rounded-2xl bg-slate-50/50 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex-1 flex flex-col justify-between group/freelance" id="freelance-card">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 group-hover/freelance:text-red-400 group-hover/freelance:border-red-200 group-hover/freelance:bg-red-50 transition-colors">
                            <X size={11} strokeWidth={3} />
                          </div>
                          <span className="text-[10px] font-mono uppercase font-extrabold tracking-wider text-slate-500">Individual Freelance</span>
                        </div>
                        <span className="text-[8px] font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded uppercase">HIGH RISK</span>
                      </div>
                      <p className="text-[11.5px] sm:text-[12px] text-slate-600 leading-relaxed font-medium">
                        {criteriaList[activeTab].freelancer}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-[8px] font-mono text-slate-400 font-bold tracking-wider">
                      <span>SINGLE SPOF RISK</span>
                      <span>IP LEAKAGE POTENTIAL</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Verdict Box with exquisite layout */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-slate-50/80 to-[#326E45]/5 rounded-2xl border-l-4 border-l-[#326E45] border-y border-r border-slate-200/70 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10 shadow-xs" id="verdict-card">
                <div className="p-2.5 bg-white border border-slate-200/80 rounded-xl shrink-0 text-[#326E45] shadow-sm flex items-center justify-center">
                  <Sparkles size={16} className="animate-pulse" />
                </div>
                
                <div className="space-y-1 text-left">
                  <span className="text-[9px] font-mono text-[#326E45] font-extrabold tracking-widest block uppercase">
                    EXPERT AUDIT DIAGNOSIS // VERDICT
                  </span>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-600 leading-relaxed font-medium">
                    {criteriaList[activeTab].detail}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
