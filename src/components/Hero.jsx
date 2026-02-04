import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2560&auto=format&fit=crop" 
          alt="Rustic nature background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900/70" />
      </div>

      <div className="container relative z-10 px-4 text-center text-white">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm uppercase tracking-widest mb-6 bg-white/10 backdrop-blur-sm text-white">
            Renovacija u tijeku
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight drop-shadow-lg text-white">
            Kupili smo kuću u <br></br> okolici Zagreba za <span className="font-bold ">7105€</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed text-stone-100"
        >
          Pratite našu avanturu obnove, korak po korak. Od ruševine do doma iz snova.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
           className="flex flex-col md:flex-row justify-center gap-6"
        >
          <button 
            onClick={() => onNavigate('blog')}
            className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-warm hover:scale-105"
          >
            Čitaj Dnevnik
          </button>
          <button 
             onClick={() => onNavigate('donate')}
             className="glass hover:bg-white/20 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border-white/30"
          >
            Podrži projekt
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Saznaj više</span>
      </motion.div>
    </section>
  );
};

export default Hero;
