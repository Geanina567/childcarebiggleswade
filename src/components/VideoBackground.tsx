const VideoBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video layer - full opacity to test */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover opacity-50"
      >
        <source src="/videos/background-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Semi-transparent overlay to blend with site colors */}
      <div className="absolute inset-0 bg-background/50" />
    </div>
  );
};

export default VideoBackground;
