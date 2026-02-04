import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Blog', id: 'blog' },
    { label: 'Naša Priča', id: 'about' },
    { label: 'Podrži nas', id: 'donate' },
    { label: 'Suradnje', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => handleNavClick('hero')} 
          className={`text-2xl font-serif font-bold tracking-wider transition-colors duration-300 ${
            isScrolled ? 'text-stone-900 hover:text-primary' : 'text-white hover:text-stone-200'
          }`}
        >
          KAMEN PO KAMEN
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative group transition-colors font-medium text-sm tracking-widest uppercase ${
                isScrolled ? 'text-stone-800 hover:text-primary' : 'text-white hover:text-stone-200'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary' : 'bg-white'
              }`} />
            </button>
          ))}
          <button 
             onClick={() => handleNavClick('donate')}
             className={`px-6 py-2 rounded-full font-medium transition-colors shadow-warm text-sm uppercase tracking-wide ${
                isScrolled 
                ? 'bg-primary hover:bg-primary-dark text-white' 
                : 'bg-white text-primary hover:bg-stone-100'
             }`}
          >
            Doniraj
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${isScrolled ? 'text-stone-900' : 'text-white'} md:hidden`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-stone-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-stone-800 hover:text-primary text-xl font-serif font-medium text-left border-b border-stone-100 pb-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
