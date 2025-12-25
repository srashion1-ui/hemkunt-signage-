import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, isPage?: boolean) => {
    setMobileMenuOpen(false);
    if (isPage) {
      setActivePage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we are on contact page, go home first then scroll
      if (activePage !== 'home') {
        setActivePage('home');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/90 py-4 shadow-lg backdrop-blur-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="text-2xl font-black text-white cursor-pointer flex flex-col leading-none"
          onClick={() => handleNavClick('home', true)}
        >
          <span className="text-3xl tracking-tighter">Hemkunt</span>
          <span className="text-xl text-gray-400 tracking-widest">Signage</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id, item.isPage)}
              className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-brand ${
                activePage === item.id ? 'text-brand' : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 p-4 flex flex-col space-y-4">
           {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id, item.isPage)}
              className="text-sm font-bold uppercase tracking-wider text-left text-gray-300 hover:text-brand"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;