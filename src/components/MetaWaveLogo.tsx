import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function MetaWaveLogo({ className = '', size = 32, showText = false }: LogoProps) {
  // We represent the interlocking M & W precisely as designed in the brand book,
  // now upgraded to the deep, luxury tech emerald (#397A56) brand color.
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} id="metawave-logo">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 transform"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {/* Elegant interlocking 'M' structure in professional Slate */}
        <path
          d="M15 32 L40 54 L50 42 L60 54 L85 32 L73 32 L60 44 L50 31 L40 44 L27 32 Z"
          fill="#1E293B"
          className="transition-colors duration-300"
        />

        {/* Precise geometric interlocking 'W' structure in high-converting tech emerald (#326E45) */}
        <path
          d="M27.5 39.5 L40 54 L47 48.5 L51.5 52.5 L40 64 L27.5 50.5 Z"
          fill="#326E45"
        />
        <path
          d="M72.5 39.5 L60 54 L53 48.5 L48.5 52.5 L60 64 L72.5 50.5 Z"
          fill="#326E45"
        />
        <path
          d="M40 64 L50 52 L60 64 L50 76 Z"
          fill="#326E45"
        />

        {/* Continuous overlay ribbon gloss cut */}
        <path
          d="M40 44 L50 31 L60 44 L50 56 Z"
          fill="#326E45"
          className="opacity-95"
        />
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-sans font-extrabold text-[#1E293B] text-xs tracking-wider leading-none uppercase">
            METAWAVE
          </span>
          <span className="font-mono text-[8px] font-black tracking-widest text-[#326E45] mt-0.5 uppercase leading-none">
            INNOVATIONS
          </span>
        </div>
      )}
    </div>
  );
}
