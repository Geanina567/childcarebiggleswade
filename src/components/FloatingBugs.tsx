const FloatingBugs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Pink & blue butterfly - in white space area */}
      <div
        className="absolute animate-butterfly-hover"
        style={{ top: '38%', right: '6%' }}
      >
        <svg width="100" height="80" viewBox="0 0 80 60" className="drop-shadow-md">
          {/* Left wings - pink */}
          <ellipse cx="28" cy="22" rx="20" ry="16" fill="hsl(330, 75%, 60%)" opacity="0.85" className="origin-[40px_30px] animate-flutter-left" />
          <ellipse cx="30" cy="38" rx="14" ry="10" fill="hsl(340, 70%, 68%)" opacity="0.8" className="origin-[40px_30px] animate-flutter-left" />
          {/* Right wings - blue */}
          <ellipse cx="52" cy="22" rx="20" ry="16" fill="hsl(210, 75%, 60%)" opacity="0.85" className="origin-[40px_30px] animate-flutter-right" />
          <ellipse cx="50" cy="38" rx="14" ry="10" fill="hsl(200, 70%, 68%)" opacity="0.8" className="origin-[40px_30px] animate-flutter-right" />
          {/* Wing details */}
          <ellipse cx="26" cy="20" rx="8" ry="6" fill="hsl(320, 80%, 78%)" opacity="0.6" className="origin-[40px_30px] animate-flutter-left" />
          <ellipse cx="54" cy="20" rx="8" ry="6" fill="hsl(220, 80%, 78%)" opacity="0.6" className="origin-[40px_30px] animate-flutter-right" />
          {/* Body */}
          <ellipse cx="40" cy="30" rx="3" ry="14" fill="hsl(270, 30%, 30%)" />
          {/* Head */}
          <circle cx="40" cy="14" r="3.5" fill="hsl(270, 30%, 30%)" />
          {/* Antennae */}
          <line x1="40" y1="12" x2="34" y2="4" stroke="hsl(270, 30%, 30%)" strokeWidth="1" />
          <circle cx="34" cy="4" r="1.5" fill="hsl(330, 70%, 55%)" />
          <line x1="40" y1="12" x2="46" y2="4" stroke="hsl(270, 30%, 30%)" strokeWidth="1" />
          <circle cx="46" cy="4" r="1.5" fill="hsl(210, 70%, 55%)" />
        </svg>
      </div>

      {/* Ladybug - behind text, crawling */}
      <div
        className="absolute animate-crawl-1 -z-10"
        style={{ bottom: '4%', left: '5%' }}
      >
        <svg width="50" height="44" viewBox="0 0 50 44" className="drop-shadow-sm opacity-70">
          {/* Legs - left */}
          <line x1="14" y1="16" x2="4" y2="10" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[14px_16px] animate-leg-1" />
          <line x1="12" y1="22" x2="2" y2="22" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[12px_22px] animate-leg-2" />
          <line x1="14" y1="28" x2="4" y2="34" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[14px_28px] animate-leg-1" />
          {/* Legs - right */}
          <line x1="36" y1="16" x2="46" y2="10" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[36px_16px] animate-leg-2" />
          <line x1="38" y1="22" x2="48" y2="22" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[38px_22px] animate-leg-1" />
          <line x1="36" y1="28" x2="46" y2="34" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[36px_28px] animate-leg-2" />
          {/* Shell */}
          <ellipse cx="25" cy="24" rx="14" ry="16" fill="hsl(0,80%,50%)" />
          <line x1="25" y1="10" x2="25" y2="40" stroke="hsl(0,0%,15%)" strokeWidth="1.5" />
          {/* Spots */}
          <circle cx="19" cy="18" r="2.5" fill="hsl(0,0%,15%)" />
          <circle cx="31" cy="18" r="2.5" fill="hsl(0,0%,15%)" />
          <circle cx="18" cy="28" r="2" fill="hsl(0,0%,15%)" />
          <circle cx="32" cy="28" r="2" fill="hsl(0,0%,15%)" />
          <circle cx="25" cy="23" r="1.8" fill="hsl(0,0%,15%)" />
          {/* Head */}
          <ellipse cx="25" cy="9" rx="8" ry="6" fill="hsl(0,0%,15%)" />
          <circle cx="22" cy="7" r="1.5" fill="white" />
          <circle cx="28" cy="7" r="1.5" fill="white" />
          <circle cx="22.5" cy="7" r="0.7" fill="hsl(0,0%,15%)" />
          <circle cx="28.5" cy="7" r="0.7" fill="hsl(0,0%,15%)" />
          <line x1="22" y1="5" x2="16" y2="0" stroke="hsl(0,0%,15%)" strokeWidth="1" />
          <circle cx="16" cy="0" r="1" fill="hsl(0,0%,15%)" />
          <line x1="28" y1="5" x2="34" y2="0" stroke="hsl(0,0%,15%)" strokeWidth="1" />
          <circle cx="34" cy="0" r="1" fill="hsl(0,0%,15%)" />
        </svg>
      </div>
    </div>
  );
};

export default FloatingBugs;
