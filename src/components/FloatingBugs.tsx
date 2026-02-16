const FloatingBugs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 opacity-20">
      {/* Crawling caterpillar */}
      <div 
        className="absolute text-4xl animate-crawl-1"
        style={{ bottom: '8%', left: '0%' }}
      >
        🐛
      </div>

      {/* Crawling snail */}
      <div 
        className="absolute text-4xl animate-crawl-2"
        style={{ bottom: '15%', right: '0%' }}
      >
        🐌
      </div>

      {/* Crawling ladybug */}
      <div 
        className="absolute text-5xl animate-crawl-3"
        style={{ bottom: '3%', left: '30%' }}
      >
        🐞
      </div>
    </div>
  );
};

export default FloatingBugs;
