const FloatingBugs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 opacity-30">
      {/* Butterflies */}
      <div 
        className="absolute text-2xl animate-butterfly-1"
        style={{ top: '15%', left: '5%' }}
      >
        🦋
      </div>
      <div 
        className="absolute text-xl animate-butterfly-2"
        style={{ top: '25%', right: '8%' }}
      >
        🦋
      </div>
      <div 
        className="absolute text-lg animate-butterfly-3"
        style={{ top: '45%', left: '12%' }}
      >
        🦋
      </div>
      <div 
        className="absolute text-2xl animate-butterfly-4"
        style={{ top: '60%', right: '15%' }}
      >
        🦋
      </div>
      <div 
        className="absolute text-xl animate-butterfly-5"
        style={{ top: '75%', left: '20%' }}
      >
        🦋
      </div>

      {/* Ladybugs */}
      <div 
        className="absolute text-xl animate-ladybug-1"
        style={{ top: '20%', right: '25%' }}
      >
        🐞
      </div>
      <div 
        className="absolute text-lg animate-ladybug-2"
        style={{ top: '50%', left: '8%' }}
      >
        🐞
      </div>
      <div 
        className="absolute text-xl animate-ladybug-3"
        style={{ top: '70%', right: '10%' }}
      >
        🐞
      </div>
      <div 
        className="absolute text-lg animate-ladybug-4"
        style={{ top: '35%', left: '25%' }}
      >
        🐞
      </div>
    </div>
  );
};

export default FloatingBugs;
