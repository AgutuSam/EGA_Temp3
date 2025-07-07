import React from 'react';
import { X, Maximize2 } from 'lucide-react';
import ReactPlayer from 'react-player';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title, description }) => {
  if (!isOpen) return null;

  const handlePictureInPicture = async () => {
    const video = document.querySelector('video');
    if (video && 'requestPictureInPicture' in video) {
      try {
        await video.requestPictureInPicture();
      } catch (error) {
        console.log('Picture-in-Picture failed:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl mx-4 bg-athletic-950 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-energy-600 to-pulse-600">
          <div>
            <h3 className="text-xl font-rajdhani font-bold text-white">{title}</h3>
            {description && <p className="text-white/80 text-sm mt-1">{description}</p>}
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePictureInPicture}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              title="Picture in Picture"
            >
              <Maximize2 size={20} className="text-white" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="aspect-video">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            playing
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload'
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
