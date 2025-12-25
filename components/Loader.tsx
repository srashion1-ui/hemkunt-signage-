import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-brand border-r-transparent border-b-brand border-l-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-t-brand-red border-r-transparent border-b-brand-red border-l-transparent animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Loader;