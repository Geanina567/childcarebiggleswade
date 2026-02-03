const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,90%,88%)] via-[hsl(145,30%,88%)] to-[hsl(40,33%,96%)]" />
      
      {/* Animated floating shapes - more vibrant */}
      <div className="absolute inset-0">
        {/* Large coral circle - top left */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-float"
          style={{ 
            top: '-10%', 
            left: '-15%', 
            animationDuration: '8s',
            background: 'radial-gradient(circle, hsl(16, 85%, 60%, 0.35) 0%, transparent 70%)'
          }}
        />
        
        {/* Medium sage green circle - right side */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-2xl animate-float"
          style={{ 
            top: '40%', 
            right: '-10%', 
            animationDelay: '2s', 
            animationDuration: '6s',
            background: 'radial-gradient(circle, hsl(145, 40%, 75%, 0.5) 0%, transparent 70%)'
          }}
        />
        
        {/* Yellow accent - center */}
        <div 
          className="absolute w-[350px] h-[350px] rounded-full blur-2xl animate-float"
          style={{ 
            bottom: '10%', 
            left: '25%', 
            animationDelay: '1s', 
            animationDuration: '7s',
            background: 'radial-gradient(circle, hsl(45, 90%, 70%, 0.45) 0%, transparent 70%)'
          }}
        />
        
        {/* Small coral accent - top right */}
        <div 
          className="absolute w-[250px] h-[250px] rounded-full blur-xl animate-float"
          style={{ 
            top: '20%', 
            right: '20%', 
            animationDelay: '3s', 
            animationDuration: '5s',
            background: 'radial-gradient(circle, hsl(16, 80%, 65%, 0.4) 0%, transparent 70%)'
          }}
        />
        
        {/* Extra floating shapes */}
        <div 
          className="absolute w-[200px] h-[200px] rounded-full blur-xl animate-float"
          style={{ 
            top: '60%', 
            left: '5%', 
            animationDelay: '4s', 
            animationDuration: '9s',
            background: 'radial-gradient(circle, hsl(145, 35%, 70%, 0.4) 0%, transparent 70%)'
          }}
        />
        
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-2xl animate-float"
          style={{ 
            top: '5%', 
            left: '50%', 
            animationDelay: '2.5s', 
            animationDuration: '6.5s',
            background: 'radial-gradient(circle, hsl(35, 60%, 75%, 0.4) 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
