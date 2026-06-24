import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Code2, 
  Database, 
  Layers, 
  CloudLightning, 
  Cpu, 
  Smartphone, 
  BrainCircuit, 
  CheckCircle,
  Zap,
  Terminal,
  Box,
  RefreshCw,
  Server,
  ArrowUpRight
} from 'lucide-react';

export function TechnologyStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Frontend');

  const categories = [
    {
      name: 'Frontend',
      items: [
        { name: 'React v19', desc: 'Component engine', icon: Code2 },
        { name: 'Next.js 15', desc: 'Headless pre-render', icon: Server },
        { name: 'Tailwind CSS', desc: 'Design tokens', icon: Layers },
        { name: 'Vite', desc: 'Hot bundler', icon: Zap }
      ]
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', desc: 'Asynchronous event', icon: Terminal },
        { name: 'Express.js', desc: 'API router', icon: Server },
        { name: 'Go (Golang)', desc: 'High concurrency', icon: Zap },
        { name: 'Python', desc: 'Scientific math', icon: Terminal }
      ]
    },
    {
      name: 'Database',
      items: [
        { name: 'PostgreSQL', desc: 'Relational ACID', icon: Database },
        { name: 'Redis Cache', desc: 'Sub-ms key-value', icon: CloudLightning },
        { name: 'Supabase', desc: 'Serverless sockets', icon: CloudLightning },
        { name: 'Cloud SQL', desc: 'High availability SQL', icon: Database }
      ]
    },
    {
      name: 'DevOps & Cloud',
      items: [
        { name: 'AWS Cloud', desc: 'Scalable cloud nodes', icon: Layers },
        { name: 'Docker Containers', desc: 'Immutable sandbox', icon: Box },
        { name: 'GitHub CI/CD', desc: 'Automated release', icon: RefreshCw },
        { name: 'Google Cloud Platform', desc: 'Cloud Run host', icon: Layers }
      ]
    },
    {
      name: 'AI & Engineering',
      items: [
        { name: 'Gemini AI SDK', desc: 'Intelligent inference', icon: Sparkles },
        { name: 'TensorFlow', desc: 'Neural graphs', icon: BrainCircuit },
        { name: 'PyTorch', desc: 'Weight regression', icon: Cpu },
        { name: 'Vector Database', desc: 'Semantic recall', icon: Database }
      ]
    }
  ];

  const currentCategoryObj = categories.find((cat) => cat.name === selectedCategory) || categories[0];

  return (
    <section id="tech-stack" className="py-24 bg-white border-b border-slate-200/50 relative overflow-hidden">
      
      {/* Background soft color filters */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-b from-white via-slate-50/20 to-white" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-100 bg-white shadow-xs">
            <Sparkles size={11} className="text-[#326E45]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#326E45] uppercase">
              CERTIFIED ENTERPRISE TECH STACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900">
            Vetted Technical Architectures
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto font-normal">
            We operate on standard corporate frameworks to yield maximum security, stellar response latency, and total developer portability.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto border border-slate-200/50">
          {categories.map((cat) => {
            const IsSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  IsSelected ? 'text-white bg-[#326E45] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Categories Details Row */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {currentCategoryObj.items.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -5, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    className="group relative rounded-2xl border border-slate-200/90 bg-white hover:border-[#326E45]/35 transition-all duration-300 p-5.5 flex flex-col justify-between min-h-[160px] shadow-[0_2px_12px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_30px_-6px_rgba(57,122,86,0.065)] overflow-hidden text-left"
                  >
                    {/* Glossy background radial accent highlight on hover */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/[0.01] to-teal-500/[0.01] rounded-full blur-xl group-hover:from-emerald-500/[0.04] group-hover:to-teal-500/[0.04] transition-all duration-300 pointer-events-none" />

                    <div>
                      {/* Top compartment with icon and code stamp */}
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center group-hover:bg-[#326E45]/10 group-hover:border-[#326E45]/20 transition-all duration-300 shadow-xs">
                          <ItemIcon size={18} className="text-[#326E45] group-hover:scale-105 transition-transform" />
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          <span className="text-[8px] font-mono tracking-wider font-extrabold text-slate-450 group-hover:text-[#326E45] bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded transition-colors select-none">
                            V-{idx + 1}.0
                          </span>
                          <ArrowUpRight size={13} className="text-slate-350 group-hover:text-[#326E45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Stack Content Block */}
                      <div className="mt-4.5 space-y-1">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight group-hover:text-[#326E45] transition-colors leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom visual verification detail */}
                    <div className="mt-5 pt-3 border-t border-slate-100/80 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[8.5px] font-mono font-bold text-slate-400 group-hover:text-emerald-700 uppercase tracking-widest transition-colors select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-pulse" />
                        PROD_ACTIVE
                      </div>
                      
                      <span className="text-[8px] font-mono font-bold text-slate-350 group-hover:text-slate-500">
                        LATENCY &lt; 8ms
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small footer assurance banner regarding framework sovereignty */}
        <div className="mt-12 text-center text-[10px] font-mono text-slate-400 max-w-xl mx-auto uppercase tracking-widest">
          🛡️ Fully compiled on-premise // Zero vendor lock-ins // HIPAA compliance audited
        </div>

      </div>
    </section>
  );
}
