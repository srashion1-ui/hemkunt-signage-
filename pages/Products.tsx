import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface ProductsProps {
  setActivePage?: (page: string) => void;
}

const Products: React.FC<ProductsProps> = ({ setActivePage }) => {
  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tighter">Our <span className="text-brand">Products</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Innovative signage products designed to make your brand stand out.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-brand transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="bg-brand text-black font-bold py-2 px-6 rounded-full uppercase text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     View Details
                   </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 uppercase">{product.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="w-12 h-1 bg-brand group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions CTA Section */}
        <div className="mt-24 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-gray-800 p-4 rounded-full mb-6 text-brand shadow-lg">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4 tracking-tight">Need a Custom Solution?</h2>
            <div className="w-20 h-1 bg-brand mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Every brand is unique. We specialize in bespoke signage tailored to your specific architectural and branding requirements. 
              From concept to installation, our engineering team brings your most ambitious ideas to life.
            </p>
            <button 
              onClick={() => setActivePage && setActivePage('contact')}
              className="bg-brand text-black font-bold py-4 px-10 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-2 group"
            >
              Contact Us for Custom Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;