import { useEffect, useState } from "react";

const FloatingBugs = () => {
  const [showBee, setShowBee] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Hide on scroll, reappear after pause
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(true), 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Bee one-time animation on load
  useEffect(() => {
    const timeout = setTimeout(() => setShowBee(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Butterfly & Ladybug - fade on scroll */}
      <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Bright blue butterfly with glitter */}
        <div className="absolute animate-butterfly-hover" style={{ top: '38%', right: '6%' }}>
          <div className="relative">
            {/* Glitter particles */}
            <div className="absolute -inset-4">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute animate-pulse text-[10px]"
                  style={{
                    top: `${15 + Math.sin(i * 0.8) * 35}%`,
                    left: `${10 + Math.cos(i * 1.1) * 40 + 30}%`,
                    animationDelay: `${i * 0.25}s`,
                    animationDuration: `${1.2 + i * 0.15}s`,
                    color: `hsl(${200 + i * 8}, 90%, ${70 + (i % 3) * 10}%)`,
                  }}
                >
                  ✦
                </span>
              ))}
            </div>
            <svg width="100" height="80" viewBox="0 0 80 60" className="drop-shadow-lg">
              {/* Left wings - bright blue */}
              <ellipse cx="28" cy="22" rx="20" ry="16" fill="hsl(210, 95%, 55%)" opacity="0.9" className="origin-[40px_30px] animate-flutter-left" />
              <ellipse cx="30" cy="38" rx="14" ry="10" fill="hsl(200, 90%, 60%)" opacity="0.85" className="origin-[40px_30px] animate-flutter-left" />
              {/* Right wings - bright blue */}
              <ellipse cx="52" cy="22" rx="20" ry="16" fill="hsl(220, 95%, 55%)" opacity="0.9" className="origin-[40px_30px] animate-flutter-right" />
              <ellipse cx="50" cy="38" rx="14" ry="10" fill="hsl(215, 90%, 60%)" opacity="0.85" className="origin-[40px_30px] animate-flutter-right" />
              {/* Wing highlights */}
              <ellipse cx="26" cy="20" rx="8" ry="6" fill="hsl(195, 100%, 80%)" opacity="0.7" className="origin-[40px_30px] animate-flutter-left" />
              <ellipse cx="54" cy="20" rx="8" ry="6" fill="hsl(225, 100%, 80%)" opacity="0.7" className="origin-[40px_30px] animate-flutter-right" />
              {/* Body */}
              <ellipse cx="40" cy="30" rx="3" ry="14" fill="hsl(210, 40%, 25%)" />
              <circle cx="40" cy="14" r="3.5" fill="hsl(210, 40%, 25%)" />
              {/* Antennae */}
              <line x1="40" y1="12" x2="34" y2="4" stroke="hsl(210, 40%, 25%)" strokeWidth="1" />
              <circle cx="34" cy="4" r="1.5" fill="hsl(210, 90%, 65%)" />
              <line x1="40" y1="12" x2="46" y2="4" stroke="hsl(210, 40%, 25%)" strokeWidth="1" />
              <circle cx="46" cy="4" r="1.5" fill="hsl(210, 90%, 65%)" />
            </svg>
          </div>
        </div>

        {/* Ladybug - behind text */}
        <div className="absolute animate-crawl-1 -z-10" style={{ bottom: '4%', left: '5%' }}>
          <svg width="50" height="44" viewBox="0 0 50 44" className="drop-shadow-sm opacity-70">
            <line x1="14" y1="16" x2="4" y2="10" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[14px_16px] animate-leg-1" />
            <line x1="12" y1="22" x2="2" y2="22" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[12px_22px] animate-leg-2" />
            <line x1="14" y1="28" x2="4" y2="34" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[14px_28px] animate-leg-1" />
            <line x1="36" y1="16" x2="46" y2="10" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[36px_16px] animate-leg-2" />
            <line x1="38" y1="22" x2="48" y2="22" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[38px_22px] animate-leg-1" />
            <line x1="36" y1="28" x2="46" y2="34" stroke="hsl(0,0%,15%)" strokeWidth="1.5" strokeLinecap="round" className="origin-[36px_28px] animate-leg-2" />
            <ellipse cx="25" cy="24" rx="14" ry="16" fill="hsl(0,80%,50%)" />
            <line x1="25" y1="10" x2="25" y2="40" stroke="hsl(0,0%,15%)" strokeWidth="1.5" />
            <circle cx="19" cy="18" r="2.5" fill="hsl(0,0%,15%)" />
            <circle cx="31" cy="18" r="2.5" fill="hsl(0,0%,15%)" />
            <circle cx="18" cy="28" r="2" fill="hsl(0,0%,15%)" />
            <circle cx="32" cy="28" r="2" fill="hsl(0,0%,15%)" />
            <circle cx="25" cy="23" r="1.8" fill="hsl(0,0%,15%)" />
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

      {/* Bee orbiting around the round picture frame - one time */}
      {showBee && (
        <BeeOrbit />
      )}
    </div>
  );
};

const BeeOrbit = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide after one full orbit (4s)
    const timeout = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute"
      style={{
        // Position over the hero illustration area
        top: 'calc(12% + 0px)',
        left: 'calc(50% - 80px)',
        width: '160px',
        height: '160px',
      }}
    >
      {/* Orbiting bee */}
      <div
        className="absolute w-full h-full"
        style={{
          animation: 'bee-orbit 4s ease-in-out forwards',
        }}
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          {/* Stardust */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex gap-1">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-[8px] animate-pulse"
                style={{
                  opacity: 1 - i * 0.2,
                  animationDelay: `${i * 0.1}s`,
                  color: `hsl(${45 + i * 10}, 90%, ${65 + i * 5}%)`,
                }}
              >
                ✦
              </span>
            ))}
          </div>
          <svg width="32" height="28" viewBox="0 0 48 40" className="drop-shadow-md">
            <ellipse cx="18" cy="12" rx="10" ry="7" fill="hsl(200,60%,85%)" opacity="0.7" className="origin-[24px_20px] animate-flutter-left" />
            <ellipse cx="30" cy="12" rx="10" ry="7" fill="hsl(200,60%,85%)" opacity="0.7" className="origin-[24px_20px] animate-flutter-right" />
            <ellipse cx="24" cy="24" rx="10" ry="12" fill="hsl(50,95%,55%)" />
            <rect x="14" y="20" width="20" height="3" rx="1" fill="hsl(30,30%,15%)" />
            <rect x="15" y="26" width="18" height="3" rx="1" fill="hsl(30,30%,15%)" />
            <rect x="16" y="32" width="16" height="2.5" rx="1" fill="hsl(30,30%,15%)" />
            <circle cx="24" cy="12" r="5" fill="hsl(30,30%,20%)" />
            <circle cx="22" cy="11" r="1.2" fill="white" />
            <circle cx="26" cy="11" r="1.2" fill="white" />
            <line x1="22" y1="8" x2="18" y2="3" stroke="hsl(30,30%,20%)" strokeWidth="1" />
            <circle cx="18" cy="3" r="1" fill="hsl(30,30%,20%)" />
            <line x1="26" y1="8" x2="30" y2="3" stroke="hsl(30,30%,20%)" strokeWidth="1" />
            <circle cx="30" cy="3" r="1" fill="hsl(30,30%,20%)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FloatingBugs;
