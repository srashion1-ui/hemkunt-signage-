import React from 'react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Top Section: Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex gap-4">
            <div className="mt-1 text-brand">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-brand">Find us:</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
              <button className="text-brand text-xs font-bold mt-2 hover:underline">Get Directions ↗</button>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 text-brand">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-brand">Call us:</h3>
              {CONTACT_INFO.phones.map(phone => (
                <p key={phone} className="text-gray-400 text-sm">{phone}</p>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 text-brand">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-brand">Mail us:</h3>
              <p className="text-gray-400 text-sm">{CONTACT_INFO.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section: Links & Subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-brand">Follow Us</h4>
            <p className="text-xs text-gray-400 mb-4">We're social! Find us all around!</p>
            <div className="flex space-x-4">
              <Facebook size={18} className="cursor-pointer hover:text-brand" />
              <Linkedin size={18} className="cursor-pointer hover:text-brand" />
              <Instagram size={18} className="cursor-pointer hover:text-brand" />
              <Twitter size={18} className="cursor-pointer hover:text-brand" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-brand">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 5).map(item => (
                <li key={item.label}>
                   <a href="#" className="text-xs text-gray-400 hover:text-brand">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
           <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-brand">More</h4>
             <ul className="space-y-2">
              {NAV_ITEMS.slice(5).map(item => (
                <li key={item.label}>
                   <a href="#" className="text-xs text-gray-400 hover:text-brand">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-brand">Subscribe</h4>
            <p className="text-xs text-gray-400 mb-4">Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-900 border border-gray-700 text-white px-4 py-2 text-sm focus:outline-none focus:border-brand"
              />
              <button className="bg-brand text-black font-bold text-xs py-2 px-4 uppercase hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-500">
            Copyright © 2024 | Hemkunt Signage. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;