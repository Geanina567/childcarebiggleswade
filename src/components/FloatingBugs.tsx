const FloatingBugs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Large background butterfly - subtle, behind content */}
      <div 
        className="absolute text-8xl opacity-15 animate-butterfly-drift"
        style={{ top: '20%', left: '5%' }}
      >
        🦋
      </div>
      <div 
        className="absolute text-7xl opacity-10 animate-butterfly-drift-2"
        style={{ top: '55%', right: '8%' }}
      >
        🦋
      </div>

      {/* Crawling ladybugs - positioned in margins/edges away from text */}
      <div 
        className="absolute text-4xl opacity-50 animate-crawl-1"
        style={{ bottom: '2%', left: '2%' }}
      >
        🐞
      </div>
      <div 
        className="absolute text-3xl opacity-45 animate-crawl-2"
        style={{ bottom: '5%', right: '3%' }}
      >
        🐞
      </div>
      <div 
        className="absolute text-4xl opacity-40 animate-crawl-3"
        style={{ top: '92%', left: '60%' }}
      >
        🐞
      </div>
    </div>
  );
};

export default FloatingBugs;
