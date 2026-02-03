const VideoBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-40"
        style={{ mixBlendMode: 'overlay' }}
      >
        {/* MP4 is the most widely supported format */}
        <source src="/videos/background-animation.mov" type="video/quicktime" />
        <source src="/videos/background-animation.mp4" type="video/mp4" />
        <source src="/videos/background-animation.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/70 via-secondary/50 to-background/90" />
    </div>
  );
};

export default VideoBackground;
