const FlyingButterflies = () => {
  // Different butterfly colors using design tokens
  const butterflies = [
    { delay: '0s', duration: '12s', top: '15%', color: 'hsl(var(--primary))' },
    { delay: '3s', duration: '14s', top: '35%', color: 'hsl(var(--pink))' },
    { delay: '6s', duration: '11s', top: '55%', color: 'hsl(var(--highlight))' },
    { delay: '9s', duration: '13s', top: '25%', color: 'hsl(var(--info))' },
    { delay: '2s', duration: '15s', top: '70%', color: 'hsl(var(--lime))' },
    { delay: '7s', duration: '12s', top: '45%', color: 'hsl(var(--turquoise))' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {butterflies.map((butterfly, index) => (
        <div
          key={index}
          className="absolute animate-butterfly-fly"
          style={{
            top: butterfly.top,
            animationDelay: butterfly.delay,
            animationDuration: butterfly.duration,
          }}
        >
          {/* Butterfly body and wings */}
          <div className="relative animate-butterfly-float" style={{ animationDelay: `${index * 0.5}s` }}>
            {/* Left wing */}
            <div
              className="absolute -left-3 top-0 w-4 h-5 rounded-full animate-butterfly-flutter origin-right"
              style={{ 
                backgroundColor: butterfly.color,
                opacity: 0.8,
              }}
            />
            {/* Right wing */}
            <div
              className="absolute left-1 top-0 w-4 h-5 rounded-full animate-butterfly-flutter origin-left"
              style={{ 
                backgroundColor: butterfly.color,
                opacity: 0.8,
                animationDelay: '0.1s',
              }}
            />
            {/* Body */}
            <div
              className="absolute left-0 top-1 w-1 h-4 rounded-full bg-foreground/60"
            />
            {/* Lower wings */}
            <div
              className="absolute -left-2 top-3 w-3 h-4 rounded-full animate-butterfly-flutter origin-right"
              style={{ 
                backgroundColor: butterfly.color,
                opacity: 0.6,
                animationDelay: '0.05s',
              }}
            />
            <div
              className="absolute left-0.5 top-3 w-3 h-4 rounded-full animate-butterfly-flutter origin-left"
              style={{ 
                backgroundColor: butterfly.color,
                opacity: 0.6,
                animationDelay: '0.15s',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlyingButterflies;
