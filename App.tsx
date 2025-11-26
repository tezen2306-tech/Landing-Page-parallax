import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;