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

  // Bee flyby every 2 minutes
  useEffect(() => {
    const triggerBee = () => {
      setShowBee(true);
      setTimeout(() => setShowBee(false), 3000);
    };
    // First appearance after 5s
    const initial = setTimeout(triggerBee, 5000);
    const interval = setInterval(triggerBee, 120000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Butterfly & Ladybug - fade on scroll */}
      <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Bright blue & yellow butterfly */}
        <div className="absolute animate-butterfly-hover" style={{ top: '38%', right: '6%' }}>
          <svg width="100" height="80" viewBox="0 0 80 60" className="drop-shadow-md">
            {/* Left wings - bright blue */}
            <ellipse cx="28" cy="22" rx="20" ry="16" fill="hsl(210, 90%, 55%)" opacity="0.9" className="origin-[40px_30px] animate-flutter-left" />
            <ellipse cx="30" cy="38" rx="14" ry="10" fill="hsl(200, 85%, 60%)" opacity="0.85" className="origin-[40px_30px] animate-flutter-left" />
            {/* Right wings - bright yellow */}
            <ellipse cx="52" cy="22" rx="20" ry="16" fill="hsl(50, 95%, 55%)" opacity="0.9" className="origin-[40px_30px] animate-flutter-right" />
            <ellipse cx="50" cy="38" rx="14" ry="10" fill="hsl(45, 90%, 60%)" opacity="0.85" className="origin-[40px_30px] animate-flutter-right" />
            {/* Wing highlights */}
            <ellipse cx="26" cy="20" rx="8" ry="6" fill="hsl(220, 85%, 75%)" opacity="0.6" className="origin-[40px_30px] animate-flutter-left" />
            <ellipse cx="54" cy="20" rx="8" ry="6" fill="hsl(55, 90%, 75%)" opacity="0.6" className="origin-[40px_30px] animate-flutter-right" />
            {/* Body */}
            <ellipse cx="40" cy="30" rx="3" ry="14" fill="hsl(30, 40%, 25%)" />
            <circle cx="40" cy="14" r="3.5" fill="hsl(30, 40%, 25%)" />
            {/* Antennae */}
            <line x1="40" y1="12" x2="34" y2="4" stroke="hsl(30, 40%, 25%)" strokeWidth="1" />
            <circle cx="34" cy="4" r="1.5" fill="hsl(210, 80%, 55%)" />
            <line x1="40" y1="12" x2="46" y2="4" stroke="hsl(30, 40%, 25%)" strokeWidth="1" />
            <circle cx="46" cy="4" r="1.5" fill="hsl(50, 90%, 55%)" />
          </svg>
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

      {/* Bee flyby with stardust trail */}
      {showBee && (
        <div className="animate-bee-flyby absolute" style={{ top: '30%', left: '-80px' }}>
          {/* Stardust trail */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex gap-2">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-xs animate-pulse"
                style={{
                  opacity: 1 - i * 0.15,
                  animationDelay: `${i * 0.1}s`,
                  color: `hsl(${45 + i * 10}, 90%, ${65 + i * 5}%)`,
                }}
              >
                ✦
              </span>
            ))}
          </div>
          {/* Bee SVG */}
          <svg width="48" height="40" viewBox="0 0 48 40" className="drop-shadow-md">
            {/* Wings */}
            <ellipse cx="18" cy="12" rx="10" ry="7" fill="hsl(200, 60%, 85%)" opacity="0.7" className="origin-[24px_20px] animate-flutter-left" />
            <ellipse cx="30" cy="12" rx="10" ry="7" fill="hsl(200, 60%, 85%)" opacity="0.7" className="origin-[24px_20px] animate-flutter-right" />
            {/* Body stripes */}
            <ellipse cx="24" cy="24" rx="10" ry="12" fill="hsl(50, 95%, 55%)" />
            <rect x="14" y="20" width="20" height="3" rx="1" fill="hsl(30, 30%, 15%)" />
            <rect x="15" y="26" width="18" height="3" rx="1" fill="hsl(30, 30%, 15%)" />
            <rect x="16" y="32" width="16" height="2.5" rx="1" fill="hsl(30, 30%, 15%)" />
            {/* Head */}
            <circle cx="24" cy="12" r="5" fill="hsl(30, 30%, 20%)" />
            <circle cx="22" cy="11" r="1.2" fill="white" />
            <circle cx="26" cy="11" r="1.2" fill="white" />
            {/* Antennae */}
            <line x1="22" y1="8" x2="18" y2="3" stroke="hsl(30, 30%, 20%)" strokeWidth="1" />
            <circle cx="18" cy="3" r="1" fill="hsl(30, 30%, 20%)" />
            <line x1="26" y1="8" x2="30" y2="3" stroke="hsl(30, 30%, 20%)" strokeWidth="1" />
            <circle cx="30" cy="3" r="1" fill="hsl(30, 30%, 20%)" />
            {/* Stinger */}
            <polygon points="24,36 22,38 26,38" fill="hsl(30, 30%, 15%)" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default FloatingBugs;
