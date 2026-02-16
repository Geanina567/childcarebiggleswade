import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const FloatingBugs = () => {
  const [showBee, setShowBee] = useState(false);
  const [beeKey, setBeeKey] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [butterflyRight, setButterflyRight] = useState(true);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const lastScrollY = useRef(0);

  // Track scroll direction + hide/show + butterfly side switch
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY < lastScrollY.current ? "up" : "down");
      lastScrollY.current = currentY;

      setIsVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(true);
        setButterflyRight((prev) => !prev);
      }, 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Find anchor element for bee
  useEffect(() => {
    const find = () => {
      const el = document.getElementById("bee-orbit-anchor");
      if (el) setAnchorEl(el);
    };
    setTimeout(find, 500);
  }, []);

  // Bee every 30 seconds
  useEffect(() => {
    const triggerBee = () => {
      setShowBee(true);
      setBeeKey((k) => k + 1);
      setTimeout(() => setShowBee(false), 4000);
    };
    const initial = setTimeout(triggerBee, 2000);
    const interval = setInterval(triggerBee, 30000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Fixed overlay for butterfly and ladybug */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>

          {/* Ladybug */}
          <div
            className="absolute -z-10 transition-all duration-700"
            style={{
              bottom: "4%",
              left: "5%",
              animation: scrollDir === "up"
                ? "ladybug-climb 8s ease-in-out infinite"
                : "crawl-left-right 16s ease-in-out infinite",
              transform: scrollDir === "up" ? "rotate(-90deg)" : "none",
            }}
          >
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
      </div>

      {/* SVG Butterfly portaled near the picture frame */}
      {anchorEl && createPortal(
        <div
          className="absolute pointer-events-none z-10 animate-butterfly-hover"
          style={{
            top: "-20px",
            right: "-28px",
          }}
        >
          <svg width="40" height="36" viewBox="0 0 60 50" className="drop-shadow-md">
            <ellipse cx="18" cy="18" rx="14" ry="12" fill="hsl(330, 80%, 65%)" opacity="0.85" className="origin-[30px_25px] animate-flutter-left" />
            <ellipse cx="20" cy="32" rx="10" ry="8" fill="hsl(280, 70%, 70%)" opacity="0.8" className="origin-[30px_25px] animate-flutter-left" />
            <ellipse cx="42" cy="18" rx="14" ry="12" fill="hsl(330, 80%, 65%)" opacity="0.85" className="origin-[30px_25px] animate-flutter-right" />
            <ellipse cx="40" cy="32" rx="10" ry="8" fill="hsl(280, 70%, 70%)" opacity="0.8" className="origin-[30px_25px] animate-flutter-right" />
            <circle cx="18" cy="16" r="4" fill="hsl(45, 90%, 65%)" opacity="0.6" />
            <circle cx="42" cy="16" r="4" fill="hsl(45, 90%, 65%)" opacity="0.6" />
            <circle cx="20" cy="31" r="2.5" fill="hsl(200, 70%, 70%)" opacity="0.5" />
            <circle cx="40" cy="31" r="2.5" fill="hsl(200, 70%, 70%)" opacity="0.5" />
            <ellipse cx="30" cy="25" rx="2.5" ry="12" fill="hsl(30, 30%, 20%)" />
            <circle cx="30" cy="12" r="3" fill="hsl(30, 30%, 20%)" />
            <line x1="28" y1="10" x2="22" y2="3" stroke="hsl(30, 30%, 20%)" strokeWidth="0.8" />
            <circle cx="22" cy="3" r="1" fill="hsl(30, 30%, 20%)" />
            <line x1="32" y1="10" x2="38" y2="3" stroke="hsl(30, 30%, 20%)" strokeWidth="0.8" />
            <circle cx="38" cy="3" r="1" fill="hsl(30, 30%, 20%)" />
          </svg>
        </div>,
        anchorEl
      )}

      {/* Bee portaled into the picture frame so it scrolls with it */}
      {showBee && anchorEl && createPortal(
        <BeeOrbit key={beeKey} />,
        anchorEl
      )}
    </>
  );
};

const BeeOrbit = () => {
  return (
    <div
      className="absolute pointer-events-none z-20"
      style={{
        top: "50%",
        left: "50%",
        width: "200px",
        height: "200px",
        marginTop: "-100px",
        marginLeft: "-100px",
      }}
    >
      <div
        className="absolute w-full h-full"
        style={{ animation: "bee-orbit 4s ease-in-out forwards" }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
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
          <svg width="28" height="24" viewBox="0 0 48 40" className="drop-shadow-md">
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
