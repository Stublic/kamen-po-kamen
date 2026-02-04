import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Hammer, Sun } from 'lucide-react';

const OurStory = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Kako je sve počelo</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Od ruševine do <br/> <span className="text-primary">mjesta za dušu.</span>
            </h2>
            
            <div className="prose prose-stone prose-lg text-stone-600 mb-8">
              <p className="mb-4">
                Sve je počelo s jednim oglasom: "Prodaje se stara drvena kuća, potrebna adaptacija." 
                Za mnoge je to bila hrpa starog drveta, ali mi smo vidjeli dom.
              </p>
              <p className="mb-4">
                Cilj nam je dokazati da se s puno volje i ograničenim budžetom može stvoriti topli dom. 
                Ne gradimo samo zidove, već čuvamo tradiciju turopoljske drvene gradnje, dajući joj novi, moderni život.
              </p>
              <p>
                Svaka daska koju pobrusimo, svaka cigla koju očistimo ima svoju priču. Ovo je naša avantura učenja, 
                rada i stvaranja nečeg trajnog.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-stone-100">
                <div className="text-center">
                    <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-3">
                        <Heart size={24} />
                    </div>
                    <div className="font-serif font-bold text-stone-900">Ljubav</div>
                    <div className="text-xs text-stone-500 uppercase tracking-wide">prema starini</div>
                </div>
                <div className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                        <Hammer size={24} />
                    </div>
                    <div className="font-serif font-bold text-stone-900">Trud</div>
                    <div className="text-xs text-stone-500 uppercase tracking-wide">vlastitih ruku</div>
                </div>
                <div className="text-center">
                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-3">
                        <Sun size={24} />
                    </div>
                    <div className="font-serif font-bold text-stone-900">Vizija</div>
                    <div className="text-xs text-stone-500 uppercase tracking-wide">toplog doma</div>
                </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
             <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4 mt-8">
                     <img 
                        src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=800&auto=format&fit=crop" 
                        alt="Stari krov" 
                        className="rounded-2xl shadow-md w-full h-64 object-cover"
                     />
                     <img 
                        src="https://images.unsplash.com/photo-1516455590571-18256e0d9316?q=80&w=800&auto=format&fit=crop" 
                        alt="Detalj drveta" 
                        className="rounded-2xl shadow-md w-full h-48 object-cover"
                     />
                 </div>
                 <div className="space-y-4">
                     <img 
                        src="https://images.unsplash.com/photo-1597211833712-5e41faa202ea?q=80&w=800&auto=format&fit=crop" 
                        alt="Unutrašnjost" 
                        className="rounded-2xl shadow-md w-full h-48 object-cover"
                     />
                     <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
                        alt="Prozor" 
                        className="rounded-2xl shadow-md w-full h-64 object-cover"
                     />
                 </div>
             </div>
             
             {/* Quote Card Overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-card border border-stone-100 max-w-xs text-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                 <p className="font-serif italic text-stone-800 text-lg mb-2">"Nije bogat tko puno ima, nego tko malo treba."</p>
                 <div className="text-xs font-bold text-primary uppercase tracking-widest">— Naš moto</div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
