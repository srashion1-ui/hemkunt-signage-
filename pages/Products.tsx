import React, { useState, useRef } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, MessageSquare, Upload, Camera } from 'lucide-react';

interface ProductsProps {
  setActivePage?: (page: string) => void;
}

const Products: React.FC<ProductsProps> = ({ setActivePage }) => {
  // Local state to manage custom uploaded images for preview
  const [productImages, setProductImages] = useState<{ [key: number]: string }>(
    PRODUCTS.reduce((acc, p) => ({ ...acc, [p.id]: p.image }), {})
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [activeUploadId, setActiveUploadId] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, productId: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImages((prev) => ({
          ...prev,
          [productId]: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = (productId: number) => {
    setActiveUploadId(productId);
    fileInputRef.current?.click();
  };

  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tighter">Our <span className="text-brand">Products</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Innovative signage products designed to make your brand stand out.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*"
          onChange={(e) => activeUploadId && handleImageUpload(e, activeUploadId)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-brand transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={productImages[product.id]} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                   <button 
                    onClick={() => triggerUpload(product.id)}
                    className="bg-white text-black font-bold py-2 px-6 rounded-full uppercase text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center gap-2 hover:bg-brand"
                   >
                     <Camera size={14} /> Change Photo
                   </button>
                   <button className="bg-brand text-black font-bold py-2 px-6 rounded-full uppercase text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                     View Details
                   </button>
                </div>
                <div className="absolute top-4 right-4 bg-brand/90 text-black p-2 rounded-full shadow-lg">
                  <Upload size={14} />
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