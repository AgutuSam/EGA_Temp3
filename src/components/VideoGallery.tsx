import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, BarChart3, Target, Zap } from 'lucide-react';
import VideoModal from './VideoModal';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: 'training' | 'performance' | 'technique';
}

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos: Video[] = [
    {
      id: 1,
      title: "Athletic Golf Training Fundamentals",
      description: "Master the athletic approach to golf performance",
      thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      url: "https://cdn.coverr.co/videos/coverr-golf-swing-slow-motion-7284/1080p.mp4",
      category: 'training'
    },
    {
      id: 2,
      title: "Performance Metrics & Analytics",
      description: "Data-driven golf improvement strategies",
      thumbnail: "https://images.unsplash.com/photo-1551524164-6cf8ac92b4d5?w=400&h=250&fit=crop",
      url: "https://cdn.coverr.co/videos/coverr-golfer-hitting-ball-on-golf-course-6142/1080p.mp4",
      category: 'performance'
    },
    {
      id: 3,
      title: "Dynamic Movement Patterns",
      description: "Optimize your golf swing through athletic movement",
      thumbnail: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=250&fit=crop",
      url: "https://cdn.coverr.co/videos/coverr-golf-course-landscape-3967/1080p.mp4",
      category: 'technique'
    },
    {
      id: 4,
      title: "Fitness for Golf Performance",
      description: "Build the athletic foundation for golf excellence",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      url: "https://cdn.coverr.co/videos/coverr-golf-ball-being-hit-6143/1080p.mp4",
      category: 'training'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'training': return <Zap className="text-energy-500" size={16} />;
      case 'performance': return <BarChart3 className="text-pulse-500" size={16} />;
      case 'technique': return <Target className="text-volt-500" size={16} />;
      default: return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'training': return 'border-energy-500 bg-energy-50';
      case 'performance': return 'border-pulse-500 bg-pulse-50';
      case 'technique': return 'border-volt-500 bg-volt-50';
      default: return 'border-athletic-500 bg-athletic-50';
    }
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-athletic-50 to-athletic-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-athletic-900 mb-4">
            Training <span className="energy-text">Videos</span>
          </h2>
          <p className="text-xl text-athletic-600 max-w-3xl mx-auto font-work-sans">
            Discover our comprehensive video library showcasing athletic golf training methodologies
          </p>
        </div>

        {/* Featured Video Carousel */}
        <div className="relative mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={videos[currentIndex].thumbnail}
              alt={videos[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Play Button */}
            <button
              onClick={() => setSelectedVideo(videos[currentIndex])}
              className="absolute inset-0 flex items-center justify-center group/play"
            >
              <div className="w-20 h-20 bg-energy-gradient rounded-full flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-all duration-300">
                <Play className="text-white ml-1" size={32} fill="white" />
              </div>
            </button>

            {/* Video Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center mb-3">
                {getCategoryIcon(videos[currentIndex].category)}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ml-2 border ${getCategoryColor(videos[currentIndex].category)}`}>
                  {videos[currentIndex].category.charAt(0).toUpperCase() + videos[currentIndex].category.slice(1)}
                </span>
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
                {videos[currentIndex].title}
              </h3>
              <p className="text-white/80 font-work-sans">
                {videos[currentIndex].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>

          {/* Video Thumbnails */}
          <div className="flex justify-center mt-6 space-x-4">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-energy-500 shadow-lg shadow-energy-500/30' 
                    : 'border-transparent hover:border-athletic-300'
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-energy-gradient rounded-full flex items-center justify-center">
                    <Play className="text-white ml-0.5" size={20} fill="white" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(video.category)}`}>
                    {getCategoryIcon(video.category)}
                    <span className="ml-1">{video.category}</span>
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-rajdhani font-bold text-athletic-900 group-hover:text-energy-600 transition-colors">
                  {video.title}
                </h4>
                <p className="text-athletic-600 text-sm mt-1 font-work-sans">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
        description={selectedVideo?.description}
      />
    </section>
  );
};

export default VideoGallery;
