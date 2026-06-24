import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const listTestimonials = [
    {
      name: 'Dr. Arthur Sterling',
      role: 'Chief Medical Solutions Analyst',
      company: 'Aegis Healthcare Providers',
      review: 'MetaWave Innovations redesigned our entire admissions EHR portal from scratch. Their sub-10ms FHIR-compliant socket framework reduced critical physician communication latency by 40% and saved our admissions department millions.',
      rating: 5,
      init: 'AS',
      color: 'bg-emerald-100 text-[#397A56]'
    },
    {
      name: 'Sarah Jenkins',
      role: 'SVP of Global Asset Strategy',
      company: 'Prism Real Estate Group',
      review: 'Working with MetaWaves full-stack engineering team changed our entire perception of outsourcing. They delivered a centralized tenant e-signature and maintenance hub 3.2x faster than typical traditional web agencies.',
      rating: 5,
      init: 'SJ',
      color: 'bg-teal-100 text-teal-700'
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Commercial Scaling',
      company: 'Aura Headless Commerce',
      review: 'Our mobile shopping cart abandonment was cut by 22% the minute MetaWave deployed our new pre-rendered Next.js static storefront. Load latency averages sub-150ms globally. They are true technology leaders.',
      rating: 5,
      init: 'MV',
      color: 'bg-[#397A56]/15 text-[#397A56]'
    }
  ];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % listTestimonials.length);
  }, [listTestimonials.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + listTestimonials.length) % listTestimonials.length);
  }, [listTestimonials.length]);

  useEffect(() => {
    timerRef.current = setInterval(handleNext, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(handleNext, 7000);
    }
  };

  const current = listTestimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFC] border-b border-slate-200/50 relative overflow-hidden">
      
      {/* Background soft gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[300px] rounded-full bg-[#397A56]/[0.012] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-100 bg-white shadow-xs">
            <Award size={11} className="text-[#397A56]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#397A56] uppercase font-sans">
              VETTED EXECUTIVES LETTERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900">
            Trusted By Global Corporate Leaders
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto font-normal">
            Read certified reports regarding MetaWave\'s high-capacity software products directly from vice presidents and medical analysts.
          </p>
        </div>

        {/* Carousel module with chevrons */}
        <div className="max-w-3xl mx-auto relative px-4 md:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-md overflow-hidden text-left"
            >
              
              {/* Massive background quote marks for visual luxury accent */}
              <div className="absolute top-4 right-6 text-slate-100/60 pointer-events-none select-none">
                <Quote size={85} className="stroke-[1.5]" />
              </div>

              <div className="space-y-5">
                
                {/* 5-Star Row */}
                <div className="flex items-center gap-0.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Core Text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic">
                  "{current.review}"
                </p>

                {/* Profile row */}
                <div className="flex items-center gap-4.5 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold uppercase tracking-tight shadow-inner ${current.color}`}>
                    {current.init}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800 font-sans leading-none">
                      {current.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-mono tracking-wider mt-1 uppercase font-bold leading-none">
                      {current.role} • <span className="text-[#397A56]">{current.company}</span>
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-16px] md:left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-350 transition-all shadow-sm z-20 cursor-pointer"
            aria-label="Previous story"
          >
            <ChevronLeft size={16} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-[-16px] md:right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-350 transition-all shadow-sm z-20 cursor-pointer"
            aria-label="Next story"
          >
            <ChevronRight size={16} />
          </button>

         </div>

        {/* Bullet page tracking dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {listTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? 'w-6 bg-[#397A56]' : 'w-1.5 bg-slate-200 hover:bg-slate-400'
              }`}
              aria-label={`Go to letter ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
