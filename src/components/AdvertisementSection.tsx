import { useEffect, useRef, useState } from 'react';

interface AdvertisementSectionProps {
  /**
   * Google AdSense Client ID (e.g., ca-pub-XXXXXXXXXXXXXXXX)
   */
  client?: string;
  /**
   * Google AdSense Slot ID (e.g., XXXXXXXXXX)
   */
  slot?: string;
  /**
   * Layout type (e.g., 'auto', 'fluid')
   */
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  /**
   * Responsive layout directive
   */
  responsive?: boolean;
}

export function AdvertisementSection({
  client = 'ca-pub-XXXXXXXXXXXXXX', // Placeholder for user's actual AdSense Publisher ID
  slot = 'XXXXXXXXXX',               // Placeholder for user's actual AdSense Slot ID
  format = 'auto',
  responsive = true
}: AdvertisementSectionProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const [isAdBlockerActive, setIsAdBlockerActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // 1. Safe detection of Ad Blocker or loaded state
    const timer = setTimeout(() => {
      if (adRef.current && adRef.current.offsetHeight === 0) {
        setIsAdBlockerActive(true);
      }
    }, 1500);

    // 2. Inject AdSense Script to DOM if not already present
    const existingScript = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    // 3. Initialize ad slot with defensive try-catch
    try {
      // @ts-ignore
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
      setIsLoaded(true);
    } catch (e) {
      console.warn('Google AdSense initialization handled gracefully:', e);
    }

    return () => clearTimeout(timer);
  }, [client, slot]);

  const handleSampleClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <section 
      id="advertisement-block"
      className="w-full py-10 px-4 bg-slate-50/60 border-y border-slate-100/90 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 relative"
    >
      {/* Interactive notification toast for demo click */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A0F1C] text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-800 flex items-center gap-3 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-[#326E45] animate-ping" />
          <span className="text-xs font-medium tracking-tight">
            Demo Ad Click Captured Successfully! Redirecting simulated.
          </span>
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Label & Accent Line Structure */}
        <div className="flex items-center gap-3 w-full justify-center mb-4 select-none">
          <div className="h-px bg-slate-200 flex-grow max-w-[100px] md:max-w-[180px]" />
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold">
            Advertisement
          </span>
          <div className="h-px bg-slate-200 flex-grow max-w-[100px] md:max-w-[180px]" />
        </div>

        {/* Outer AdSense Compliant Container */}
        <div 
          className="relative w-full min-h-[140px] max-w-3xl bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex items-center justify-center transition-all hover:border-slate-300 hover:shadow-md group"
        >
          {/* Real Google AdSense Ins Component */}
          <ins
            ref={adRef}
            className="adsbygoogle block w-full text-center"
            style={{ display: 'block', minWidth: '250px', minHeight: '100px' }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
          />

          {/* Premium Fallback & Interactive Visual Sandbox Sample Ad */}
          {(!isLoaded || isAdBlockerActive || client.includes('XXXX')) && (
            <div 
              onClick={handleSampleClick}
              className="absolute inset-0 bg-gradient-to-r from-slate-900 via-[#0E1527] to-slate-900 flex flex-col md:flex-row items-center justify-between p-6 md:px-8 cursor-pointer group/ad transition-all duration-300"
            >
              {/* Ad Decoration Accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover/ad:bg-emerald-500/15 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-slate-800/80 rounded border border-slate-700 text-[8px] font-mono font-medium tracking-wide text-slate-400 uppercase select-none">
                  Sponsored
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#326E45] animate-pulse" />
              </div>

              {/* Sample Content Details */}
              <div className="flex items-center gap-4 z-10 text-left">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-[#326E45] p-[1px] shadow-lg shadow-emerald-950/20 shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm md:text-base font-bold text-white tracking-tight group-hover/ad:text-emerald-300 transition-colors duration-200">
                    Scale Your Business with MetaWave Enterprise Packages
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-md line-clamp-2 md:line-clamp-1">
                    Complete brand identity, premium custom website development, and managed cloud infrastructure. Launched under 14 days.
                  </p>
                </div>
              </div>

              {/* Action Trigger Button */}
              <div className="mt-4 md:mt-0 z-10 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#326E45] hover:bg-[#2c613d] text-white text-xs font-semibold rounded-xl shadow-md shadow-emerald-950/30 transition-all duration-200 group-hover/ad:scale-105 active:scale-95">
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom micro border decoration */}
        <div className="flex items-center gap-3 w-full justify-center mt-4 select-none">
          <div className="h-[2px] bg-slate-200/40 flex-grow max-w-[50px]" />
          <span className="text-[9px] font-mono text-slate-300 tracking-wider">
            GOOGLE ADSENSE DIRECTIVE COMPLIANT • CLICK TO PREVIEW
          </span>
          <div className="h-[2px] bg-slate-200/40 flex-grow max-w-[50px]" />
        </div>
      </div>
    </section>
  );
}

