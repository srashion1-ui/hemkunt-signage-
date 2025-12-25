import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-purple-600 border-r-transparent border-b-purple-600 border-l-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-t-purple-400 border-r-transparent border-b-purple-400 border-l-transparent animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Loader;