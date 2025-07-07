import React, { useState, useEffect } from 'react';
import { PlayCircle, Calendar, TrendingUp, Volume2, VolumeX, Zap, BarChart3, Activity, Play, Pause, Maximize2 } from 'lucide-react';
import { Button } from '../ui/Button';
import ReactPlayer from 'react-player';
import VideoModal from '../VideoModal';

export const EnhancedHeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showStatsVideo, setShowStatsVideo] = useState(false);
  const [energyParticles, setEnergyParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string }>>([]);

  useEffect(() => {
    // Generate energy particles for athletic effect
    const colors = ['#F97316', '#0EA5E9', '#22C55E'];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setEnergyParticles(newParticles);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-athletic-gradient">
      {/* Energy Particles */}
      <div className="energy-particles">
        {energyParticles.map((particle) => (
          <div
            key={particle.id}
            className="energy-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              backgroundColor: particle.color
            }}
          />
        ))}
      </div>

      {/* Split Video Layout */}
      <div className="absolute inset-0 z-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Main Training Video */}
        <div className="relative">
          {!isVideoReady && (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1551524164-6cf8ac92b4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-athletic-950/60 via-energy-900/40 to-pulse-800/60"></div>
            </div>
          )}
          
          <div className={`absolute inset-0 ${isVideoReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <ReactPlayer 
              url="https://cdn.coverr.co/videos/coverr-golf-training-workout-4526/1080p.mp4"
              playing={isPlaying}
              loop={true}
              muted={isMuted}
              width="100%"
              height="100%"
              style={{
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              onReady={() => setIsVideoReady(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-athletic-950/40 to-transparent"></div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-6 left-6 flex space-x-3 z-20">
            <button
              onClick={togglePlayPause}
              className="p-3 bg-energy-600 rounded-full hover:bg-energy-700 transition-colors shadow-lg"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <Pause size={20} className="text-white" />
              ) : (
                <Play size={20} className="text-white ml-0.5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="p-3 bg-pulse-600 rounded-full hover:bg-pulse-700 transition-colors shadow-lg"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <Volume2 size={20} className="text-white" />
              ) : (
                <VolumeX size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Performance Stats Video (Hover to Play) */}
        <div className="relative hidden lg:block">
          <div 
            className="w-full h-full bg-cover bg-center cursor-pointer group"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')"
            }}
            onMouseEnter={() => setShowStatsVideo(true)}
            onMouseLeave={() => setShowStatsVideo(false)}
            onClick={() => setShowWelcomeModal(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-athletic-950/70 via-transparent to-pulse-900/50"></div>
            
            {/* Hover Video */}
            {showStatsVideo && (
              <div className="absolute inset-0">
                <ReactPlayer 
                  url="https://cdn.coverr.co/videos/coverr-golf-swing-analysis-data-3892/1080p.mp4"
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
                <div className="absolute inset-0 bg-pulse-900/30"></div>
              </div>
            )}

            {/* Stats Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <BarChart3 size={48} className="mx-auto mb-4 text-pulse-400" />
                <h3 className="text-2xl font-rajdhani font-bold mb-2">Performance Analytics</h3>
                <p className="text-white/80">Hover to preview • Click to explore</p>
              </div>
            </div>

            {/* Click to Expand Button */}
            <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Athletic Badge */}
          <div className="inline-flex items-center bg-energy-600 text-white px-4 py-2 rounded-full font-rajdhani font-bold text-sm mb-6 animate-pulse">
            <Activity className="mr-2" size={16} />
            ATHLETIC GOLF PERFORMANCE
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-rajdhani font-black text-athletic-900 mb-6 leading-tight">
            TRAIN
            <span className="block text-transparent bg-clip-text bg-performance-gradient">
              LIKE AN
            </span>
            <span className="block energy-text">
              ATHLETE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-athletic-700 max-w-xl mb-8 font-work-sans font-medium">
            Transform your golf game with 
            <span className="pulse-text font-bold"> data-driven training </span>
            and athletic performance methodology.
          </p>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="text-3xl font-rajdhani font-black text-energy-600">87%</div>
              <div className="text-sm text-athletic-600 font-work-sans">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-rajdhani font-black text-pulse-600">2.3x</div>
              <div className="text-sm text-athletic-600 font-work-sans">Faster Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-rajdhani font-black text-volt-600">24/7</div>
              <div className="text-sm text-athletic-600 font-work-sans">Data Tracking</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="performance-btn group"
              onClick={() => setShowWelcomeModal(true)}
            >
              <PlayCircle className="mr-2 group-hover:scale-110 transition-transform" size={24} />
              Start Your Journey
            </button>
            
            <Button variant="outline" size="lg" className="border-2 border-pulse-600 text-pulse-700 hover:bg-pulse-600 hover:text-white transition-all duration-300 font-rajdhani font-bold">
              <BarChart3 className="mr-2" size={24} />
              View Performance Data
            </Button>

            <Button variant="default" size="lg" className="bg-volt-600 hover:bg-volt-700 text-white font-rajdhani font-bold">
              <Calendar className="mr-2" size={24} />
              Book Training Session
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Performance Video Button */}
      <div className="lg:hidden absolute bottom-20 right-6 z-20">
        <button
          onClick={() => setShowWelcomeModal(true)}
          className="w-16 h-16 bg-pulse-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse"
        >
          <Play className="text-white ml-1" size={24} fill="white" />
        </button>
      </div>

      {/* Video Modals */}
      <VideoModal
        isOpen={showWelcomeModal}
        onClose={() => setShowWelcomeModal(false)}
        videoUrl="https://cdn.coverr.co/videos/coverr-golf-course-training-facilities-2847/1080p.mp4"
        title="Welcome to Athletic Golf Training"
        description="Discover how our performance-based approach transforms your golf game"
      />
    </section>
  );
};

export default EnhancedHeroSection;
