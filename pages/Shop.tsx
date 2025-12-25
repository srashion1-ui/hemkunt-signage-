import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Shop: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-12 rounded-full mb-8 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
         <ShoppingBag size={64} className="text-brand" />
      </div>
      <h1 className="text-4xl font-extrabold uppercase mb-4">Online Shop</h1>
      <p className="text-xl text-gray-400 mb-8">Coming Soon</p>
      <p className="max-w-md text-center text-gray-500 leading-relaxed">
         We are currently building our online store to bring you the best standard signage products directly to your doorstep. Stay tuned!
      </p>
    </div>
  );
};

export default Shop;