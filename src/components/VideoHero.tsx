import React from 'react';
import SearchFilter from './SearchFilter';

const VideoHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://1drv.ms/v/s!Agc-yo2PNJbDgXdiN_35VxgivO0m?e=qR2YjU"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Ikigai <span className="text-red-500">Motors</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Your premier destination for authentic Japanese performance vehicles
          </p>
          
          <SearchFilter />
        </div>
      </div>
    </div>
  );
};

export default VideoHero;