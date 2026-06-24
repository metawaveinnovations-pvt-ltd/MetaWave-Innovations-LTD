import { motion } from 'motion/react';
import { ShieldCheck, Heart, Zap, Award, Globe, HeartPulse, CheckCircle2, AwardIcon, Compass, Sparkles, Scale, RefreshCw, Users, Shield } from 'lucide-react';

export function AboutUs() {
  const namingPillars = [
    {
      term: 'Meta',
      meaning: 'Higher-Level Transformation',
      desc: 'Representing advanced digital thinking and structural transformation. Going beyond standard interfaces to build deep, intelligent software ecosystems.',
      color: 'from-emerald-500 to-[#397A56]'
    },
    {
      term: 'Wave',
      meaning: 'Momentum & Progress',
      desc: 'Defining our dynamic speed of development, continuous momentum, and dedication to deploying modern digital solutions ahead of future curves.',
      color: 'from-[#397A56] to-[#2F6547]'
    },
    {
      term: 'Innovations',
      meaning: 'Continuous Evolution',
      desc: 'Stating our persistent research and execution focus. We do not copy outdated patterns; we engineer custom software modules for business growth.',
      color: 'from-[#059669] to-[#1E293B]'
    }
  ];

  const values = [
    { 
      title: 'Innovation', 
      desc: 'Consistently pushing technological boundaries through advanced R&D, implementing intelligent artificial intelligence and automation models.', 
      icon: Zap, 
      color: 'text-emerald-605', 
      bg: 'bg-emerald-50' 
    },
    { 
      title: 'Integrity', 
      desc: 'Adhering to strict compliance standards, bulletproof NDAs, client-first IP assignments, and complete transparent operational accountability.', 
      icon: Scale, 
      color: 'text-slate-800', 
      bg: 'bg-slate-50 border-slate-150' 
    },
    { 
      title: 'Quality', 
      desc: 'Enforcing the highest systems development standards, strict TypeScript typing, complete regression diagnostics, and flawless latency controls.', 
      icon: ShieldCheck, 
      color: 'text-emerald-500', 
      bg: 'bg-emerald-50' 
    },
    { 
      title: 'Partnership', 
      desc: 'Establishing long-term relationship structures with our international clients, aligning engineering objectives with client revenue growth metrics.', 
      icon: Users, 
      color: 'text-[#397A56]', 
      bg: 'bg-emerald-50' 
    },
    { 
      title: 'Accountability', 
      desc: 'Detailed monthly delivery audits and transparent project logging. We operate with strict corporate SLA assurances and on-time outputs.', 
      icon: Award, 
      color: 'text-slate-700', 
      bg: 'bg-slate-50' 
    },
    { 
      title: 'Continuous Improvement', 
      desc: 'Engaging our talent in continuous system training and individual learning budgets to refine software models as technology paradigms expand.', 
      icon: RefreshCw, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50' 
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200/50 relative overflow-hidden">
      
      {/* Background design elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-b from-white via-slate-50/20 to-white" />
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-500/[0.015] blur-[110px]" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20 animate-fade-in">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-100 bg-white shadow-xs">
              <CheckCircle2 size={11} className="text-[#397A56]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                CORPORATE STEWARDSHIP
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 leading-tight">
              The Strategic Vision Powering <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#397A56] via-[#2F6547] to-[#1E293B] bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              At MetaWave Innovations, we believe high-fidelity software isn\'t just an operational utility—it represents the modern competitive differentiator of the modern enterprise. We write clean, compliant, and highly performant custom codebases that convert ambitious ideas into concrete business growth benchmarks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="bg-[#F8FAFC]/90 border border-slate-200 p-6 rounded-2xl shadow-2xs text-left space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#397A56] tracking-wider uppercase block leading-none">STRATEGIC MISSION</span>
                <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                  To build world-class Enterprise Software ecosystems, custom web applications, SaaS platform layers, and business automation pipelines that scale perfectly on cloud backends.
                </p>
              </div>

              <div className="bg-[#F8FAFC]/90 border border-[#397A56]/25 p-6 rounded-2xl shadow-2xs text-left space-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-emerald-500/[0.04] blur-md" />
                <span className="text-[10px] font-mono font-bold text-slate-900 tracking-wider uppercase block leading-none">STRATEGIC VISION</span>
                <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                  To serve as the ultimate international software center of excellence, bridging advanced code quality, deep cloud architectures, and absolute customer satisfaction.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: High End Interactive Map Overlay */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC]/75 p-6 sm:p-8 space-y-5 text-left relative overflow-hidden shadow-2xs">
              
              <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 rounded-full bg-slate-500/[0.025] blur-xl pointer-events-none" />

              <div className="space-y-1">
                <span className="text-[8px] font-mono font-black text-slate-400 block tracking-wider uppercase leading-none">
                  ORGANISATIONAL HERITAGE
                </span>
                <h4 className="text-sm font-display font-black text-slate-900">
                  Who We Are
                </h4>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                MetaWave Innovations (Private) Limited is structured to support complex software architecture needs for international partners across the United Kingdom, United Arab Emirates, and North America.
              </p>

              <div className="pt-2 divide-y divide-slate-150">
                <div className="py-2.5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">Headquarters</span>
                  <span className="font-bold text-slate-800">Islamabad, PK R&D Hub</span>
                </div>
                <div className="py-2.5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">Filing Governance</span>
                  <span className="font-bold text-slate-800">SECP & Companies Act 2017</span>
                </div>
                <div className="py-2.5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">Quality Focus</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Onshore Delivery</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Naming Foundation Module: Meaning of MetaWave Innovations */}
        <div className="pb-16 mb-20 border-b border-slate-150 text-left">
          <div className="max-w-2xl text-left space-y-3 mb-10">
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#397A56] uppercase block">
              UNDERSTAND THE IDENTITY
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900">
              The Meaning of MetaWave Innovations
            </h3>
            <p className="text-xs text-slate-500 font-normal">
              Every system and file we ship reflects the structural methodology of our naming convention:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {namingPillars.map((p, pIdx) => (
              <div 
                key={p.term}
                className="bg-slate-50/50 border border-slate-200 hover:border-slate-350 p-6 rounded-2xl space-y-3 hover:bg-white hover:shadow-xs transition-all duration-300 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-display font-black text-slate-900">{p.term}</span>
                  <span className="text-[8px] font-mono font-bold text-[#397A56] uppercase tracking-wider">
                    MODULE 0{pIdx + 1}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-[#397A56]">{p.meaning}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="pt-2 text-left">
          <div className="mb-10 space-y-2">
            <span className="text-[9px] font-mono font-bold tracking-widest text-slate-450 uppercase block">
              GUIDING CORPORATE PRINCIPLES
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 leading-none">
              Our Core Operational Values
            </h3>
            <p className="text-xs text-slate-500 max-w-xl font-normal pt-1">
              Six foundational criteria governing how we select personnel, audit output source files, and execute client strategy daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const ValueIcon = v.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-[#F8FAFC]/55 border border-slate-200 p-5 rounded-2xl hover:bg-white hover:border-slate-350 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className={`w-8 h-8 rounded-xl ${v.bg} border border-[#397A56]/15 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                    <ValueIcon size={14} className={v.color} />
                  </div>
                  
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 font-sans tracking-tight leading-none mb-1.5 group-hover:text-[#397A56] transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
