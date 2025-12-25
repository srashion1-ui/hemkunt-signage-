import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import Shop from './pages/Shop';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'contact': return <Contact />;
      case 'services': return <Services />;
      case 'about': return <About />;
      case 'products': return <Products setActivePage={setActivePage} />;
      case 'clients': return <Clients />;
      case 'careers': return <Careers />;
      case 'shop': return <Shop />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand selection:text-white">
      {loading && <Loader />}
      
      {!loading && (
        <>
          <Header activePage={activePage} setActivePage={setActivePage} />
          
          <main className="fade-in min-h-screen">
            {renderPage()}
          </main>

          <Footer />
          <AIAssistant />
        </>
      )}
    </div>
  );
};

export default App;