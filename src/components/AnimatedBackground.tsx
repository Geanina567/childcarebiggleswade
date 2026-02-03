const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Vibrant base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(48,95%,88%)] via-[hsl(160,50%,88%)] to-[hsl(45,45%,95%)]" />
      
      {/* Animated floating shapes - vibrant and playful */}
      <div className="absolute inset-0">
        {/* Large coral/orange circle - top left */}
        <div 
          className="absolute w-[550px] h-[550px] rounded-full blur-3xl animate-float"
          style={{ 
            top: '-12%', 
            left: '-18%', 
            animationDuration: '7s',
            background: 'radial-gradient(circle, hsl(12, 90%, 62%, 0.45) 0%, transparent 70%)'
          }}
        />
        
        {/* Medium mint green circle - right side */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full blur-2xl animate-float-delayed"
          style={{ 
            top: '35%', 
            right: '-12%', 
            animationDelay: '1.5s', 
            animationDuration: '8s',
            background: 'radial-gradient(circle, hsl(160, 55%, 70%, 0.55) 0%, transparent 70%)'
          }}
        />
        
        {/* Bright yellow accent - center bottom */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-2xl animate-float"
          style={{ 
            bottom: '5%', 
            left: '20%', 
            animationDelay: '0.5s', 
            animationDuration: '6s',
            background: 'radial-gradient(circle, hsl(48, 95%, 65%, 0.5) 0%, transparent 70%)'
          }}
        />
        
        {/* Sky blue circle - top right */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-xl animate-float-delayed"
          style={{ 
            top: '15%', 
            right: '15%', 
            animationDelay: '2s', 
            animationDuration: '5s',
            background: 'radial-gradient(circle, hsl(200, 85%, 70%, 0.45) 0%, transparent 70%)'
          }}
        />
        
        {/* Lavender purple - left side */}
        <div 
          className="absolute w-[250px] h-[250px] rounded-full blur-xl animate-float"
          style={{ 
            top: '55%', 
            left: '3%', 
            animationDelay: '3s', 
            animationDuration: '9s',
            background: 'radial-gradient(circle, hsl(280, 60%, 78%, 0.45) 0%, transparent 70%)'
          }}
        />
        
        {/* Small peachy accent - top center */}
        <div 
          className="absolute w-[280px] h-[280px] rounded-full blur-2xl animate-float-delayed"
          style={{ 
            top: '8%', 
            left: '45%', 
            animationDelay: '1s', 
            animationDuration: '7s',
            background: 'radial-gradient(circle, hsl(25, 85%, 72%, 0.4) 0%, transparent 70%)'
          }}
        />

        {/* Extra mint green - bottom right */}
        <div 
          className="absolute w-[200px] h-[200px] rounded-full blur-xl animate-float"
          style={{ 
            bottom: '20%', 
            right: '8%', 
            animationDelay: '4s', 
            animationDuration: '6s',
            background: 'radial-gradient(circle, hsl(160, 50%, 65%, 0.4) 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
