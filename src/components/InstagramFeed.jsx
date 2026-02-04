import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';

const MOCK_INSTAGRAM_POSTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop', link: 'https://www.instagram.com/webica.hr/' },
  { id: 2, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop', link: 'https://www.instagram.com/webica.hr/' },
  { id: 3, image: 'https://images.unsplash.com/photo-1516455590571-18256e0d9316?q=80&w=600&auto=format&fit=crop', link: 'https://www.instagram.com/webica.hr/' },
  { id: 4, image: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=600&auto=format&fit=crop', link: 'https://www.instagram.com/webica.hr/' },
  { id: 5, image: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=600&auto=format&fit=crop', link: 'https://www.instagram.com/webica.hr/' },
  { id: 6, image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=600&auto=format&fit=crop', link: 'https://www.instagram.com/webica.hr/' },
];

const InstagramFeed = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
        <div>
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Društvene mreže</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
            Pratite nas na <span className="text-primary italic">Instagramu</span>
          </h2>
        </div>
        <a 
          href="https://www.instagram.com/webica.hr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-stone-900 font-bold hover:text-primary transition-colors group"
        >
          <Instagram size={20} />
          @webica.hr
          <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2))]">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex space-x-6"
        >
          {MOCK_INSTAGRAM_POSTS.map((post) => (
            <motion.a 
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative min-w-[300px] h-80 rounded-2xl overflow-hidden shadow-card group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
              <img 
                src={post.image} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                draggable="false"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                 <Instagram className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={48} />
              </div>
            </motion.a>
          ))}
          {/* Last card leads to profile */}
           <motion.a 
                href="https://www.instagram.com/webica.hr/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative min-w-[300px] h-80 rounded-2xl overflow-hidden bg-stone-100 border-2 border-dashed border-stone-300 flex flex-col items-center justify-center group hover:border-primary hover:bg-primary/5 transition-colors"
            >
               <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <Instagram className="text-stone-400 group-hover:text-primary" />
               </div>
               <span className="font-serif font-bold text-stone-600 group-hover:text-primary">Vidi sve objave</span>
            </motion.a>
        </motion.div>
      </motion.div>
      
      <div className="container mx-auto px-6 mt-8 md:hidden">
         <a 
          href="https://www.instagram.com/webica.hr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-stone-900 font-bold hover:text-primary transition-colors w-full py-4 bg-white rounded-xl shadow-sm border border-stone-100"
        >
          <Instagram size={20} />
          Zapratite @webica.hr
        </a>
      </div>
    </section>
  );
};

export default InstagramFeed;
