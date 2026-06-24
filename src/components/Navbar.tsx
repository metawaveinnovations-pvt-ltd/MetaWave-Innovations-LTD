import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Search, 
  ChevronDown, 
  Globe, 
  Check, 
  Sparkles,
  TrendingUp,
  LineChart,
  Users,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Layers,
  Cpu,
  Grid,
  Command,
  Sun,
  Home,
  Terminal,
  Folder,
  ChevronRight,
  Sparkle,
  Newspaper
} from 'lucide-react';
import MetaWaveLogo from './MetaWaveLogo';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
  isBannerOpen?: boolean;
}

// Magnetic Wrapper Component for high-fidelity visual cursor interactions
function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

// Concrete solutions from User Attachment Pic 2
const PICTURE_SOLUTIONS = [
  { 
    name: 'POS and Billing System', 
    desc: 'Fast billing, sales reports & payment integration.', 
    icon: Cpu,
    highlights: ['20ms Multi-lane invoice creation', 'Dual-Offline synchronization backup', 'Native thermal printing compatible'],
    useCase: 'Best for Retail & Supermarkets',
    statLabel: 'BILLING VELOCITY',
    statVal: '99.98% uptime',
    brief: 'Our POS and Billing System handles concurrent multi-register lanes easily. It features continuous off-line state queuing, so your cashier transactions never stop even during networking drops. Automatic nightly reports compile locally then push to centralized cloud dashboards instantly.'
  },
  { 
    name: 'Educational and Department System', 
    desc: 'Smart management for modern educational institutions.', 
    icon: Layers,
    highlights: ['Automated visual study roster sheets', 'Parent SMS updates dispatch triggers', 'Cross-department secure access credentials'],
    useCase: 'Best for Colleges & Academies',
    statLabel: 'ADMIN EFFICIENCY',
    statVal: 'Save 35hrs/week',
    brief: 'Manage student records, enrollment classes, parent relations, grading boards, and student rosters seamlessly. It contains a beautiful interactive timeline scheduler to help build balanced course schedules without conflicting resource reservations.'
  },
  { 
    name: 'Restaurant Management System', 
    desc: 'Simplify restaurant operations and daily management.', 
    icon: Activity,
    highlights: ['Microsecond kitchen dispatcher logs', 'Visual multi-floor dining tables layout', 'Instant customer checkout splitter'],
    useCase: 'Best for Cafes & Restaurants',
    statLabel: 'KITCHEN SPEED',
    statVal: '12% faster turnover',
    brief: 'Connect your waiters, cashiers, kitchen staff, and management on an integrated platform. Includes visual tables floor-plan design editor, instant split-bill math tools, online food delivery channels sync, and direct kitchen display triggers.'
  },
  { 
    name: 'AI Powered Business Analytics', 
    desc: 'Turn business data into smart decisions with adaptive reporting portals.', 
    icon: LineChart,
    highlights: ['Dynamic trend prediction loops', 'Fraudulent transaction signal rules', 'Custom PDF spreadsheet builder'],
    useCase: 'Best for SaaS & FinTech',
    statLabel: 'FORECASTER LIFT',
    statVal: '4.2x better ROI',
    brief: 'An elegant AI-powered telemetry reporting portal that reads multiple data databases or offline csv sheets. Generates direct trend forecasting charts, notifies anomalies immediately, and outputs professional grade cards about enterprise health indices.'
  },
  { 
    name: 'Business & Warehouse Management', 
    desc: 'Manage inventory and warehouse operations efficiently with automated ledgers.', 
    icon: ShieldCheck,
    highlights: ['Suppliers auto-restocking thresholds', 'Hardware barcode scan protocols', 'Double-entry audit trial ledger'],
    useCase: 'Best for Logistical Nodes',
    statLabel: 'STOCK ACCURACY',
    statVal: '99.9% precise logs',
    brief: 'Maintain an absolute digital ledger tracking products, ingredients, products batches, and warehouse locations. Program automated vendor purchase ordering when items hit critical thresholds, preventing stockout emergencies and logistical bottlenecks.'
  }
];

// Concrete services from User Attachment Pic 1
const PICTURE_SERVICES = [
  { 
    name: 'Website Design & Development', 
    desc: 'High-performance websites built for branding, growth, and online presence.', 
    icon: Globe,
    highlights: ['100/100 Google Lighthouse audit scores', 'Self-owned custom CMS configurations', 'Structured metadata schemas for search indexing'],
    useCase: 'Handcrafted React & Next.js',
    statLabel: 'SPEED SCORE',
    statVal: '0.4s load latency',
    brief: 'We build beautiful and lightning-fast websites using modern web development practices. Our products highlight clean layout spacing, pristine typography, smooth framer keyframe entries, and state-of-the-art page transition routes.'
  },
  { 
    name: 'Mobile App Development', 
    desc: 'Scalable mobile solutions designed for performance and engagement.', 
    icon: Cpu,
    highlights: ['Perfect native 60 FPS transitions', 'Cross-platform single-base programming', 'Direct Apple & Google Play verification'],
    useCase: 'Hybrid Flutter & React Native',
    statLabel: 'PROD RELIABILITY',
    statVal: '99.9% Crash-Free',
    brief: 'Our mobile engineers craft flawless native applications for touch targets on both iOS and Android. With offline-resilient local sync, automatic background push telemetry, and clean modular structures, your application remains robust anywhere.'
  },
  { 
    name: 'UI/UX & Brand Experience Design', 
    desc: 'Modern design systems focused on usability and strong user experience.', 
    icon: Sparkles,
    highlights: ['Structured layout component wireframes', 'Responsive high fidelity visual guides', 'Cohesive typography & color matching systems'],
    useCase: 'Branding & Figma guidelines',
    statLabel: 'ENGAGEMENT LIFT',
    statVal: '+44% retention rate',
    brief: 'We sculpt elegant visual assets, customized balance grids, specific color pairings, and interactive prototypes. Every design is focused on strong ergonomic readability, keeping your brand modern, trustworthy, and visually irresistible.'
  },
  { 
    name: 'Digital Growth Strategy & Marketing', 
    desc: 'Accelerating brands through masterclass strategic digital marketing loops.', 
    icon: TrendingUp,
    highlights: ['Data-driven target retargeting tracking', 'Surgical campaign optimization systems', 'Transparent weekly leads metrics reports'],
    useCase: 'SEO, PPC & Funnel Building',
    statLabel: 'LEAD ACQUISITION',
    statVal: '+180% growth scale',
    brief: 'We align modern data marketing paths to target high-intent customer accounts. We structure perfect conversion funnels and lead generation templates to optimize marketing budgets and grow organic, compounding traffic channels.'
  },
  { 
    name: 'SEO & Performance Optimization', 
    desc: 'Optimized speed solutions to improve organic ranking, latency, and site visibility.', 
    icon: Activity,
    highlights: ['Green Core Web Vitals audit pass', 'High authority key-phrase structuring', 'Rich Google local results schema indexing'],
    useCase: 'Speed & page index authority',
    statLabel: 'CONVERSION GAIN',
    statVal: '+28% customer signups',
    brief: 'We rebuild sluggish landing platforms to reduce server response lag and client-side page load bottlenecks. This drastically drops bounce rates, pushes search ranking results higher, and secures a competitive edge on digital search results.'
  }
];

export function Navbar({ onNavClick, activeSection, isBannerOpen = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dynamic detail tracking indices for hoverable subtabs
  const [activeSolutionIdx, setActiveSolutionIdx] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  // Active subtab data selection helpers
  const currentSolution = PICTURE_SOLUTIONS[activeSolutionIdx] || PICTURE_SOLUTIONS[0];
  const SolIcon = currentSolution.icon;

  const currentService = PICTURE_SERVICES[activeServiceIdx] || PICTURE_SERVICES[0];
  const ServIcon = currentService.icon;

  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Keyboard shortcut listener for K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnterMenu = (menu: 'solutions' | 'services') => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeaveMenu = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 280);
  };

  const handleNavActions = (targetId: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    onNavClick(targetId);
  };

  // Enterprise navigation modules with an elegant blog addition
  const navModules = [
    { id: 'home', label: 'Home', icon: Home, type: 'link' as const, targetId: 'home' },
    { id: 'stewardship', label: 'About Us', icon: Users, type: 'link' as const, targetId: 'about' },
    { id: 'solutions', label: 'Solutions', icon: Cpu, type: 'dropdown' as const, targetId: 'solutions' },
    { id: 'services', label: 'Services', icon: Sparkles, type: 'dropdown' as const, targetId: 'services' },
    { id: 'endeavors', label: 'Work', icon: Folder, type: 'link' as const, targetId: 'portfolio' },
    { id: 'blog', label: 'Blog', icon: Newspaper, type: 'link' as const, targetId: 'blog' },
    { id: 'ingress', label: 'Connect', icon: Terminal, type: 'link' as const, targetId: 'contact' }
  ];

  // Map state ID to active index element
  const getActiveModuleId = () => {
    if (activeMenu) return activeMenu;
    if (activeSection === 'home') return 'home';
    if (activeSection === 'about') return 'stewardship';
    if (activeSection === 'solutions') return 'solutions';
    if (activeSection === 'services') return 'services';
    if (activeSection === 'portfolio') return 'endeavors';
    if (activeSection === 'blog' || activeSection.startsWith('blog-post-')) return 'blog';
    if (activeSection === 'contact') return 'ingress';
    return null;
  };

  const activeModuleId = getActiveModuleId();

  // Search filter options
  const searchableEntries = [
    { name: 'POS and Billing System', text: 'Fast billing, sales reports & payment integration.', id: 'solutions', category: 'Solutions Product' },
    { name: 'Educational and Department System', text: 'Smart management for modern educational institutions.', id: 'solutions', category: 'Solutions Product' },
    { name: 'Restaurant Management System', text: 'Simplify restaurant operations and daily management.', id: 'solutions', category: 'Solutions Product' },
    { name: 'AI Powered Business Analytics', text: 'Turn business data into smart decisions with adaptive reporting portals.', id: 'solutions', category: 'AI Intelligence' },
    { name: 'Business & Warehouse Management', text: 'Manage inventory and warehouse operations efficiently with automated ledgers.', id: 'solutions', category: 'Enterprise Solution' },
    { name: 'Website Design & Development', text: 'High-performance websites built for branding, growth, and online presence.', id: 'services', category: 'Expert Services' },
    { name: 'Mobile App Development', text: 'Scalable mobile solutions designed for performance and engagement.', id: 'services', category: 'Expert Services' },
    { name: 'UI/UX & Brand Experience Design', text: 'Modern design systems focused on usability and strong user experience.', id: 'services', category: 'Expert Services' },
    { name: 'Digital Growth Strategy & Marketing', text: 'Accelerating brands through masterclass strategic digital marketing loops.', id: 'services', category: 'Growth Services' },
    { name: 'SEO & Performance Optimization', text: 'Optimized speed solutions to improve organic ranking, latency, and site visibility.', id: 'services', category: 'Growth Services' },
    { name: 'About Us & Leadership Hub', text: 'Who we are, our core mission, and our multi-decade engineering legacy.', id: 'about', category: 'Company Profile' }
  ];

  const searchResults = searchableEntries.filter(entry => 
    (entry.name + ' ' + entry.text + ' ' + entry.category).toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length > 1
  );

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-[500ms] ${
          isBannerOpen
            ? isScrolled 
              ? 'top-[6px] sm:top-[8px] h-[64px]' 
              : 'top-[50px] md:top-[58px] h-[80px]'
            : isScrolled
              ? 'top-[6px] sm:top-[8px] h-[64px]'
              : 'top-[12px] sm:top-[16px] h-[80px]'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* CSS KEY SELECTOR 1: Inner container wrapper */}
        <div
          className={`w-[94%] xl:w-[90%] max-w-7xl h-full flex items-center justify-between transition-all duration-[500ms] pointer-events-auto ${
            isScrolled
              ? 'px-4 md:px-5 py-2 rounded-[20px] bg-white/95 backdrop-blur-[24px] border-2 border-emerald-600/40 shadow-[0_16px_36px_-10px_rgba(57,122,86,0.16)] ring-1 ring-emerald-500/10 scale-[1.00]'
              : 'px-6 py-4 rounded-[26px] bg-white/90 backdrop-blur-[16px] border-2 border-slate-200/90 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.06)] hover:border-emerald-600/30'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* ================================================= */}
          {/* LEFT ZONE: BRAND CORE LAUNCHER WITH NESTED LOGO   */}
          {/* ================================================= */}
          <button
            onClick={() => handleNavActions('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none cursor-pointer shrink-0"
            id="brand-core-launcher"
          >
            {/* Direct clean and plain logo with responsive hover transition */}
            <MetaWaveLogo size={54} className="transition-transform duration-300 group-hover:scale-[1.06] active:scale-95" />

            {/* BRAND TEXT LAYER MATCHING SELECTORS 3 AND 4 */}
            <div className="leading-tight flex flex-col">
              {/* CSS KEY SELECTOR 3: brand name primary string */}
              <span className="font-sans font-black text-[15.5px] text-slate-900 tracking-tight leading-none block">
                MetaWave
              </span>
              {/* CSS KEY SELECTOR 4: brand name secondary string */}
              <span className="block text-[8px] font-mono tracking-[0.2em] text-[#326E45] font-black uppercase mt-1 leading-none">
                Innovations
              </span>
            </div>
          </button>

          {/* ================================================= */}
          {/* CENTER ZONE: PILL NAVIGATION GRID - SELECTOR 5   */}
          {/* ================================================= */}
          <nav 
            className="hidden lg:flex items-center gap-1 bg-slate-100/60 border border-slate-200/40 rounded-full p-1 relative"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navModules.map((module) => {
              const IconComponent = module.icon;
              const isDropdown = module.type === 'dropdown';
              const isActive = activeModuleId === module.id;
              const isHovered = hoveredItem === module.id;

              return (
                <button
                  key={module.id}
                  onMouseEnter={() => {
                    setHoveredItem(module.id);
                    if (isDropdown) handleMouseEnterMenu(module.id as any);
                  }}
                  onMouseLeave={() => {
                    if (isDropdown) handleMouseLeaveMenu();
                  }}
                  onClick={() => {
                    if (module.targetId) {
                      handleNavActions(module.targetId);
                    }
                  }}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-full cursor-pointer transition-all duration-300 select-none text-[13.2px] font-bold tracking-wide leading-none ${
                    isActive ? 'text-[#326E45] font-extrabold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {/* Active background fluid tracker bubble */}
                  {isActive && (
                    <motion.div
                      layoutId="activeModuleBackgroundIndicator"
                      className="absolute inset-0 rounded-full -z-10 p-[1.5px] bg-gradient-to-r from-[#326E45] via-emerald-600 to-[#1E293B] shadow-[0_4px_12px_rgba(50,110,69,0.12)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    >
                      <div className="w-full h-full bg-white rounded-full" />
                    </motion.div>
                  )}

                  {/* Hover capsule spotlight effect */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hoverHighlight"
                      className="absolute inset-0 bg-slate-200/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    />
                  )}

                  <IconComponent size={12} className={isActive ? 'text-[#326E45]' : 'text-slate-400'} />
                  
                  {/* CSS SELECTORS 6 - 11: Text Label Span */}
                  <span>{module.label}</span>

                  {isDropdown && (
                    <ChevronDown size={10} className={`text-slate-400 transition-transform duration-300 ${activeMenu === module.id ? 'rotate-180' : ''}`} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ================================================= */}
          {/* RIGHT ZONE: ACTIONS & COMPLIANCE TELEMETRIES       */}
          {/* ================================================= */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 font-sans">
            
            {/* CSS SELECTOR 12: Advanced search trigger capsule */}
            <button
               onClick={() => setSearchOpen(true)}
               className="flex items-center gap-2 px-3 py-2 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 text-slate-500 hover:text-slate-800 rounded-full transition-all cursor-pointer shadow-2xs group active:scale-95"
               aria-label="Open Command Search"
               title="Global Command Palette (⌘K)"
            >
              <Search size={12} className="text-slate-400 group-hover:text-[#326E45] transition-colors" />
              <span className="text-[10px] font-bold tracking-tight pr-1 text-slate-400 group-hover:text-slate-600 font-mono">⌘K</span>
            </button>



            {/* CSS SELECTOR 15: Corporate System Ingress custom magnetic launcher button */}
            <Magnetic>
              <button
                onClick={() => onNavClick('contact')}
                className="relative px-5 py-2.5 rounded-full text-[11px] font-mono font-black tracking-wider uppercase text-white bg-gradient-to-r from-[#326E45] to-[#1E293B] hover:brightness-[1.03] active:scale-95 transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(50,110,69,0.25)] flex items-center gap-1.5 group cursor-pointer overflow-hidden"
                id="magnetic-nav-launcher"
              >
                <span className="absolute inset-y-0 left-0 w-12 bg-white/10 -skew-x-[25deg] -translate-x-full group-hover:translate-x-[450%] transition-transform duration-[1200ms] pointer-events-none" />
                <span>Consult Now</span>
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Magnetic>
          </div>

          {/* MOBILE MENU INTERACTIVE TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:text-[#326E45] hover:bg-slate-100 transition-all font-sans font-bold text-[11px] select-none cursor-pointer active:scale-95 shadow-2xs"
          >
            <Grid size={13} className="text-[#326E45] animate-pulse" />
            <span>Launch Hub</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* DROPDOWN MEGA-MENUS PANELS SYSTEMS                          */}
        {/* ========================================================= */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current); }}
              onMouseLeave={() => { setActiveMenu(null); }}
              className="absolute top-full left-[2%] right-[2%] max-w-7xl mx-auto rounded-[24px] border border-slate-250 bg-white/95 backdrop-blur-[32px] p-6 shadow-[0_22px_55px_-12px_rgba(15,23,42,0.1)] pointer-events-auto z-40 outline-none"
            >
              {activeMenu === 'solutions' && (
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Side: Photo Solutions List (Picture 2) */}
                  <div className="col-span-8 space-y-4">
                    <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black text-[#326E45] uppercase tracking-wider">
                        Enterprise Solutions Portfolio
                      </span>
                      <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded uppercase leading-none font-bold">
                        99.9% Reliable SLA
                      </span>
                    </div>
 
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {PICTURE_SOLUTIONS.map((item, idx) => {
                        const Icon = item.icon;
                        const isHoveredActive = activeSolutionIdx === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleNavActions('solutions')}
                            onMouseEnter={() => setActiveSolutionIdx(idx)}
                            className={`text-left group flex gap-3.5 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                              isHoveredActive
                                ? 'bg-white border-[#326E45] shadow-sm ring-2 ring-[#326E45]/10'
                                : 'border-dashed border-slate-150 bg-slate-50/50 hover:bg-white hover:border-solid hover:border-[#326E45]/40 hover:shadow-xs'
                            }`}
                          >
                            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                              isHoveredActive 
                                ? 'bg-[#326E45] border-[#326E45] text-white scale-105' 
                                : 'bg-slate-50 border-[#326E45]/15 text-[#326E45] group-hover:scale-105'
                            }`}>
                              <Icon size={15} />
                            </div>
                            <div className="space-y-0.5">
                              <span className={`block text-xs font-bold transition-colors leading-tight ${
                                isHoveredActive ? 'text-[#326E45]' : 'text-slate-800'
                              }`}>
                                {item.name}
                              </span>
                              <span className="block text-[10.5px] text-slate-450 font-normal leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
 
                  {/* Right Side: Dynamic Interactive Preview Page/Details Page */}
                  <div className="col-span-4 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between overflow-hidden relative min-h-[300px]">
                    <div className="absolute top-[-30px] right-[-30px] w-48 h-48 bg-emerald-550/[0.04] rounded-full blur-2xl pointer-events-none" />
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSolutionIdx}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="space-y-4 flex flex-col h-full justify-between"
                      >
                        <div className="space-y-4">
                          {/* Tab Indicator & Dynamic Label */}
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono font-extrabold text-[#326E45] bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider leading-none">
                              {currentSolution.useCase}
                            </span>
                            <span className="text-[8px] font-mono font-extrabold text-slate-400 tracking-wider">
                              NODE_DASHBOARD
                            </span>
                          </div>
 
                          {/* Heading & description of subtab */}
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-slate-950">
                              <div className="w-5 h-5 rounded-md bg-[#326E45]/15 flex items-center justify-center text-[#326E45]">
                                <SolIcon size={12} />
                              </div>
                              <h4 className="text-[12.5px] font-sans font-black tracking-tight">
                                {currentSolution.name}
                              </h4>
                            </div>
                            <p className="text-[10.5px] leading-relaxed text-slate-600 font-normal">
                              {currentSolution.brief}
                            </p>
                          </div>
 
                          {/* Interactive Specifications Checklist */}
                          <div className="space-y-2 bg-white/80 border border-slate-150 rounded-xl p-3 shadow-2xs">
                            <span className="text-[8px] font-mono font-bold tracking-widest text-[#326E45]/80 uppercase block">
                              Core Specifications:
                            </span>
                            <div className="space-y-1.5">
                              {currentSolution.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-1.5 text-[9.5px]">
                                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-550/10 text-[#326E45] shrink-0 flex items-center justify-center mt-0.5">
                                    <Check size={8} strokeWidth={3} />
                                  </span>
                                  <span className="text-slate-600 font-semibold">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
 
                        {/* Dynamic Live Metric Feed Footer */}
                        <div className="pt-2">
                          <div className="p-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-850 flex items-center justify-between font-mono text-[9px] h-10 w-full">
                            <div className="flex items-center gap-1.5">
                              <Terminal size={10} className="text-[#326E45]" />
                              <span className="text-slate-400 font-extrabold">{currentSolution.statLabel}:</span>
                              <span className="text-emerald-300 font-black tracking-wide">{currentSolution.statVal}</span>
                            </div>
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}
 
              {activeMenu === 'services' && (
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Side: Photo Services List (Picture 1) */}
                  <div className="col-span-8 space-y-4">
                    <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black text-[#326E45] uppercase tracking-wider">
                        Core Development & Growth Services
                      </span>
                      <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded uppercase leading-none font-bold">
                        Vanguard Engineering
                      </span>
                    </div>
 
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {PICTURE_SERVICES.map((item, idx) => {
                        const Icon = item.icon;
                        const isHoveredActive = activeServiceIdx === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleNavActions('services')}
                            onMouseEnter={() => setActiveServiceIdx(idx)}
                            className={`text-left group flex gap-3.5 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                              isHoveredActive
                                ? 'bg-white border-[#326E45] shadow-sm ring-2 ring-[#326E45]/10'
                                : 'border-dashed border-slate-150 bg-slate-50/50 hover:bg-white hover:border-solid hover:border-[#326E45]/40 hover:shadow-xs'
                            }`}
                          >
                            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                              isHoveredActive 
                                ? 'bg-[#326E45] border-[#326E45] text-white scale-105' 
                                : 'bg-slate-50 border-[#326E45]/15 text-[#326E45] group-hover:scale-105'
                            }`}>
                              <Icon size={15} />
                            </div>
                            <div className="space-y-0.5">
                              <span className={`block text-xs font-bold transition-colors leading-tight ${
                                isHoveredActive ? 'text-[#326E45]' : 'text-slate-800'
                              }`}>
                                {item.name}
                              </span>
                              <span className="block text-[10.5px] text-slate-455 font-normal leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
 
                  {/* Right Side: Dynamic Interactive Preview Page/Details Page for Services */}
                  <div className="col-span-4 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between overflow-hidden relative min-h-[300px]">
                    <div className="absolute top-[-30px] right-[-30px] w-48 h-48 bg-emerald-550/[0.04] rounded-full blur-2xl pointer-events-none" />
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeServiceIdx}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="space-y-4 flex flex-col h-full justify-between"
                      >
                        <div className="space-y-4">
                          {/* Tab Indicator & Dynamic Label */}
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono font-extrabold text-[#326E45] bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider leading-none">
                              {currentService.useCase}
                            </span>
                            <span className="text-[8px] font-mono font-extrabold text-slate-400 tracking-wider">
                              SERVICE_BLUEPRINT
                            </span>
                          </div>
 
                          {/* Heading & description of subtab */}
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-slate-950">
                              <div className="w-5 h-5 rounded-md bg-[#326E45]/15 flex items-center justify-center text-[#326E45]">
                                <ServIcon size={12} />
                              </div>
                              <h4 className="text-[12.5px] font-sans font-black tracking-tight">
                                {currentService.name}
                              </h4>
                            </div>
                            <p className="text-[10.5px] leading-relaxed text-slate-600 font-normal">
                              {currentService.brief}
                            </p>
                          </div>
 
                          {/* Interactive Specifications Checklist */}
                          <div className="space-y-2 bg-white/80 border border-slate-150 rounded-xl p-3 shadow-2xs">
                            <span className="text-[8px] font-mono font-bold tracking-widest text-[#326E45]/80 uppercase block">
                              Methodology & Key Metrics:
                            </span>
                            <div className="space-y-1.5">
                              {currentService.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-1.5 text-[9.5px]">
                                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-555/10 text-[#326E45] shrink-0 flex items-center justify-center mt-0.5">
                                    <Check size={8} strokeWidth={3} />
                                  </span>
                                  <span className="text-slate-600 font-semibold">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
 
                        {/* Direct action consult button inside the card footer */}
                        <div className="pt-2">
                          <button
                            onClick={() => handleNavActions('contact')}
                            className="w-full py-2.5 bg-slate-900 border border-transparent hover:border-[#326E45]/30 hover:bg-slate-850 text-white rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs hover:shadow-[0_4px_12px_rgba(50,110,69,0.1)] active:scale-95 duration-200"
                          >
                            <span>Initialize Technical Ingress</span>
                            <ArrowRight size={10} />
                          </button>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========================================================= */}
      {/* MOBILE TRIGGER SYSTEM DASHBOARD OVERLAY PANEL             */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Slide-Up Container sheet resembling modern layout */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative w-full max-h-[92vh] bg-white rounded-t-[28px] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-t border-slate-200 pointer-events-auto"
            >
              <div className="w-12 h-1 bg-slate-200/80 rounded-full mx-auto mb-5 shrink-0" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#326E45] to-[#1E293B] p-[1.5px] flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div>
                      <span className="font-sans font-extrabold text-[13px] text-slate-900 leading-none block">MetaWave</span>
                      <span className="block text-[7px] font-mono tracking-widest text-[#326E45] font-black uppercase mt-0.5 ml-0.5">Innovations</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-800 focus:outline-none"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Mobile list elements matching the 6 modules */}
                <div className="space-y-4">
                  <span className="block text-[8px] font-mono tracking-widest text-slate-400 font-extrabold uppercase pl-1">Navigation Sectors</span>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {navModules.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (item.targetId) {
                              handleNavActions(item.targetId);
                            } else {
                              handleNavActions(item.id);
                            }
                          }}
                          className={`text-left p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50/80 transition-all flex flex-col justify-between h-24 ${
                            activeSection === (item.targetId || item.id) ? 'border-[#326E45] bg-[#326E45]/5' : ''
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            activeSection === (item.targetId || item.id) ? 'bg-[#326E45]/10 text-[#326E45]' : 'bg-slate-100 text-slate-500'
                          }`}>
                            <Icon size={14} />
                          </div>
                          <span className="block text-xs font-bold text-slate-800">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
                <button
                  onClick={() => handleNavActions('contact')}
                  className="w-full py-3 rounded-xl text-[11px] font-mono font-black tracking-wider uppercase text-white bg-gradient-to-r from-[#326E45] to-[#1E293B] flex items-center justify-center gap-1.5 shadow-lg shadow-[#326E45]/15"
                >
                  <span>Consult Now</span>
                  <ArrowRight size={12} />
                </button>
                <div className="text-center text-[8px] font-mono text-slate-400">
                  © 2026 METAWAVE INNOVATIONS • SLA ACTIVE
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* ENTERPRISE COMMAND PALETTE SEARCH OVERLAY                 */}
      {/* ========================================================= */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-start pt-24 sm:pt-32 px-6"
          >
            <button
              onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              className="absolute top-8 right-8 w-11 h-11 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-90"
              aria-label="Close user search"
            >
              <X size={18} />
            </button>

            <div className="w-full max-w-2xl mx-auto space-y-6 font-sans text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-[0.2em] text-[#326E45] bg-emerald-500/10 px-2.5 py-1 rounded-full uppercase">
                  <Command size={10} className="text-emerald-400" />
                  <span>MetaWave Command Palette</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                  Search solutions, products & resources
                </h3>
              </div>

              <div className="relative border-b-2 border-white/10 focus-within:border-[#326E45] transition-all py-2.5 flex items-center">
                <Search size={22} className="text-slate-400 pr-2 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type e.g. Billing, SEO, AI Analytics, About Us..."
                  className="w-full bg-transparent border-none text-white font-display text-lg sm:text-xl placeholder-slate-600 focus:ring-0 focus:outline-none"
                />
                {searchQuery.length > 0 && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-[9px] font-mono font-bold text-slate-500 hover:text-white uppercase transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-4 pt-2">
                {searchQuery.length <= 1 ? (
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono font-bold tracking-widest text-[#326E45] uppercase">Suggested queries indices</span>
                    <div className="flex flex-wrap gap-2">
                      {['POS System', 'Restaurant Management', 'AI Powered', 'Website Design', 'SEO Optimization', 'About Us', 'Mobile App Development'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1.5 rounded-xl border border-white/5 hover:border-white/12 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] font-medium cursor-pointer transition-all"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <span className="block text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                      Nodes identified ({searchResults.length})
                    </span>
                    
                    {searchResults.length === 0 ? (
                      <div className="py-8 text-center text-slate-550 text-xs">
                        No system compliance node matched query. Please enter alternate keys.
                      </div>
                    ) : (
                      <div className="space-y-2 max-h-[350px] overflow-y-auto pr-2">
                        {searchResults.map((res, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery('');
                              handleNavActions(res.id);
                            }}
                            className="w-full text-left p-3.5 rounded-xl border border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/8 transition-all flex items-center justify-between group cursor-pointer"
                          >
                            <div className="space-y-0.5 pr-3">
                              <span className="block text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                                {res.name}
                              </span>
                              <p className="text-[10.5px] text-slate-400 leading-relaxed font-normal">
                                {res.text}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 max-w-[40%] shrink-0 justify-end">
                              <span className="text-[8px] font-mono text-sky-450 border border-sky-500/20 px-2 py-0.5 rounded capitalize bg-sky-500/5">{res.category}</span>
                              <ArrowRight size={13} className="text-slate-500 group-hover:text-sky-450 group-hover:translate-x-1 transition-all" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
