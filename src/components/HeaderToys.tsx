const HeaderToys = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating cube - coral */}
      <div 
        className="absolute top-2 left-[8%] w-5 h-5 bg-primary rounded-md shadow-lg animate-bounce-rotate opacity-80"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Floating cube - yellow */}
      <div 
        className="absolute top-3 left-[18%] w-4 h-4 bg-accent rounded-md shadow-md animate-float opacity-75"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Star shape - pink */}
      <div 
        className="absolute top-1 left-[30%] text-2xl animate-wiggle-slow opacity-70"
        style={{ animationDelay: '0.3s' }}
      >
        ⭐
      </div>
      
      {/* Circle ball - info blue */}
      <div 
        className="absolute top-2 right-[30%] w-4 h-4 bg-info rounded-full shadow-md animate-bounce-soft opacity-75"
        style={{ animationDelay: '0.8s' }}
      />
      
      {/* Floating cube - green */}
      <div 
        className="absolute top-3 right-[22%] w-5 h-5 bg-secondary rounded-md shadow-lg animate-sway opacity-80"
        style={{ animationDelay: '0.2s' }}
      />
      
      {/* Heart - highlight purple */}
      <div 
        className="absolute top-1 right-[12%] text-xl animate-pulse-grow opacity-70"
        style={{ animationDelay: '1s' }}
      >
        💜
      </div>
      
      {/* Tiny cube - turquoise accent */}
      <div 
        className="absolute top-4 left-[42%] w-3 h-3 bg-highlight rounded-sm shadow animate-wiggle opacity-60"
        style={{ animationDelay: '0.7s' }}
      />
      
      {/* Building block shape */}
      <div 
        className="absolute top-2 right-[42%] w-6 h-3 bg-accent rounded-sm shadow-md animate-float-delayed opacity-70"
        style={{ animationDelay: '0.4s' }}
      />
      
      {/* Small ball */}
      <div 
        className="absolute top-5 left-[55%] w-3 h-3 bg-primary/70 rounded-full shadow animate-bounce-soft opacity-60"
        style={{ animationDelay: '1.2s' }}
      />
    </div>
  );
};

export default HeaderToys;
