"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export default function BridalVideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    "/bridal-videos/video1.mp4",
    "/bridal-videos/video2.mp4",
    "/bridal-videos/video3.mp4"
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12">
        {videos.map((src, idx) => (
          <div 
            key={idx} 
            className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden group cursor-pointer shadow-xl bg-gray-900"
            onClick={() => setActiveVideo(src)}
          >
            <video
              src={src}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              muted
              loop
              playsInline
              preload="metadata"
              onMouseEnter={(e) => {
                e.currentTarget.play().catch(() => {});
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white z-50"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="w-full max-w-5xl max-h-[90vh] relative rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full h-[85vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
}
