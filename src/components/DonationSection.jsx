import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sprout, Hammer } from 'lucide-react';
import { donations } from '../data/mockData';

const DonationSection = () => {
  const getIcon = (id) => {
    switch(id) {
      case 1: return <Coffee className="h-8 w-8" />;
      case 2: return <Sprout className="h-10 w-10 text-orange-800" />;
      case 3: return <Hammer className="h-8 w-8" />;
      default: return <Coffee className="h-8 w-8" />;
    }
  };

  return (
    <section id="donate" className="py-24 bg-background border-t border-stone-100">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Budi dio priče</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Podrži Renovaciju</h2>
          <p className="text-stone-500 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Svaka "kava" ili "vreća cementa" nas gura korak bliže useljenju. <br/> 
            Hvala ti što gradiš s nama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donations.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center transition-all duration-300 border ${
                tier.highlight 
                 ? 'shadow-warm border-primary/20 ring-1 ring-primary/20' 
                 : 'shadow-card border-stone-100 hover:border-primary/20'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Najpopularnije
                </div>
              )}
              <div className={`mb-8 p-6 rounded-full inline-flex ${tier.highlight ? 'bg-primary/10 text-primary' : 'bg-stone-50 text-stone-600'}`}>
                {getIcon(tier.id)}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{tier.title}</h3>
              <div className="text-4xl font-bold text-stone-900 mb-4">{tier.price}</div>
              <p className="text-stone-500 mb-10 leading-relaxed">{tier.description}</p>
              
              <button className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 ${
                tier.highlight 
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' 
                  : 'bg-stone-100 text-stone-800 hover:bg-stone-200 hover:text-primary'
              }`}>
                Doniraj
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
