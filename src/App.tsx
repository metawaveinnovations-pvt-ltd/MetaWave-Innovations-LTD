import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Subcomponents
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { FeaturedSolutions } from './components/FeaturedSolutions';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { Insights } from './components/Insights';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TechnologyStack } from './components/TechnologyStack';
import { TeamSection } from './components/TeamSection';
import { GlobalPresence } from './components/GlobalPresence';
import { Testimonials } from './components/Testimonials';
import { Industries } from './components/Industries';
import { AboutUs } from './components/AboutUs';
import { Certifications } from './components/Certifications';
import { Careers } from './components/Careers';
import { CtaSection } from './components/CtaSection';
import { ContactUs } from './components/ContactUs';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { AdvertisementSection } from './components/AdvertisementSection';

// Icons for general layout if any
import { ArrowUp, Terminal, Shield, Sparkles } from 'lucide-react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  // Helper mapping routine to tie dynamic section targets to their parent page boundaries
  const mapSectionToPage = (sectionId: string): string => {
    if (!sectionId) return 'home';
    const cleanId = sectionId.toLowerCase();
    
    if (['home', 'trustees', 'why-metawave', 'stats', 'why-choose-us', 'executive-team', 'team'].includes(cleanId)) {
      return 'home';
    }
    if (['about', 'stewardship', 'global-presence', 'certifications', 'certifications-compliance', 'testimonials'].includes(cleanId)) {
      return 'about';
    }
    if (['solutions', 'solutions-stack'].includes(cleanId)) {
      return 'solutions';
    }
    if (['services', 'capabilities', 'process', 'industries', 'development-process'].includes(cleanId)) {
      return 'services';
    }
    if (['portfolio', 'endeavors', 'insights', 'careers', 'work'].includes(cleanId)) {
      return 'portfolio';
    }
    if (['contact', 'ingress'].includes(cleanId)) {
      return 'contact';
    }
    if (['blog', 'blog-posts', 'publications'].includes(cleanId) || cleanId.startsWith('blog-post-')) {
      return 'blog';
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return mapSectionToPage(hash) || 'home';
  });

  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  // Monitor mouse movements to power the Dynamic Spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Monitor scroll height to trigger scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for hash change to enable backward & forward browser navigation deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const page = mapSectionToPage(hash);
      setActivePage(page);
      setActiveSection(hash || 'home');
      
      // Auto-scrolling viewport sequence
      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 120);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Ultimate routing handler used across Navbar tabs, Footer links, and page calls
  const handleNavigatePageOrSection = (targetId: string) => {
    const page = mapSectionToPage(targetId);
    setActivePage(page);
    setActiveSection(targetId);
    
    // Set URL hash cleanly for history retention
    window.location.hash = `#${targetId}`;
    
    // Smooth scrolling alignment
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 120);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans relative selection:bg-teal-600/10 selection:text-slate-900">
      
      {/* 1. Dynamic Spotlight Radial Light following user cursor */}
      <div
        className="fixed pointer-events-none -z-10 w-[450px] h-[450px] rounded-full bg-teal-500/[0.02] blur-[100px] transition-transform duration-100 ease-out hidden md:block"
        style={{
          transform: `translate(${mousePos.x - 225}px, ${mousePos.y - 225}px)`,
        }}
      />

      {/* 2. Sticky Glassmorphic Navbar & Announcement Banner */}
      <AnimatePresence>
        {isBannerOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden z-[60] relative"
          >
            <AnnouncementBanner 
              onCtaclick={handleNavigatePageOrSection} 
              onClose={() => setIsBannerOpen(false)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar 
        onNavClick={handleNavigatePageOrSection} 
        activeSection={activeSection} 
        isBannerOpen={isBannerOpen} 
      />

      {/* 3. Main Multi-Page stage */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activePage === 'home' && (
              <div className="animate-fade-in">
                <Hero onCtaclick={handleNavigatePageOrSection} />
                <div id="trustees">
                  <TrustMarquee />
                </div>
                <Stats />
                <AdvertisementSection />
                <WhyChooseUs />
                <TechnologyStack />
                <TeamSection />
                <AdvertisementSection />
                <CtaSection onCtaclick={handleNavigatePageOrSection} />
              </div>
            )}

            {activePage === 'about' && (
              <div className="pt-24 md:pt-[100px] animate-fade-in">
                <AboutUs />
                <Certifications />
                <AdvertisementSection />
                <GlobalPresence />
                <Testimonials />
                <CtaSection onCtaclick={handleNavigatePageOrSection} />
              </div>
            )}

            {activePage === 'solutions' && (
              <div className="pt-24 md:pt-[100px] animate-fade-in">
                <FeaturedSolutions onCtaclick={handleNavigatePageOrSection} />
                <AdvertisementSection />
                <CtaSection onCtaclick={handleNavigatePageOrSection} />
              </div>
            )}

            {activePage === 'services' && (
              <div className="pt-24 md:pt-[100px] animate-fade-in">
                <Services />
                <DevelopmentProcess />
                <AdvertisementSection />
                <Industries />
                <CtaSection onCtaclick={handleNavigatePageOrSection} />
              </div>
            )}

            {activePage === 'portfolio' && (
              <div className="pt-24 md:pt-[100px] animate-fade-in">
                <PortfolioShowcase />
                <AdvertisementSection />
                <Insights />
                <Careers />
                <CtaSection onCtaclick={handleNavigatePageOrSection} />
              </div>
            )}

            {activePage === 'contact' && (
              <div className="pt-24 md:pt-[100px] animate-fade-in">
                <ContactUs />
                <AdvertisementSection />
              </div>
            )}

            {activePage === 'blog' && (
              <div className="pt-24 md:pt-[100px] animate-fade-in">
                <Blog activeSection={activeSection} onNavigate={handleNavigatePageOrSection} />
                <AdvertisementSection />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Multi-column corporate footer */}
      <Footer onNavClick={handleNavigatePageOrSection} />

      {/* Scroll to Top Dynamic backlink */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-xl bg-[#326E45] hover:bg-[#20462c] text-white font-bold shadow-md hover:shadow-lg z-40 transition-all cursor-pointer border border-[#326E45]/10"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
