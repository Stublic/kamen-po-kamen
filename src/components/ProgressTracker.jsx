import React from 'react';
import { motion } from 'framer-motion';
import { progressStats } from '../data/mockData';

const ProgressTracker = () => {
  return (
    <section className="py-24 bg-surface-dim relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Status Renovacije</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
           {/* Summary Cards */}
           <div className="space-y-6">
              <div className="p-8 bg-white rounded-3xl shadow-card border border-stone-100">
                 <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">Ukupan Napredak</h3>
                 <div className="text-5xl font-bold text-primary mb-2">45%</div>
                 <p className="text-stone-500">Do useljenja nam nedostaje još malo sunca i puno žbuke.</p>
              </div>
              <div className="p-8 bg-secondary/10 rounded-3xl border border-secondary/20">
                 <h3 className="text-xl font-serif font-bold text-secondary mb-2">Trenutna faza</h3>
                 <p className="text-stone-700 font-medium text-lg">Postavljanje krovišta i izolacija</p>
              </div>
           </div>

           {/* Progress Bars */}
          <div className="space-y-10 pl-0 md:pl-8">
            {progressStats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between items-end mb-3">
                  <span className="font-serif text-xl text-stone-900 font-bold">{stat.label}</span>
                  <span className="font-mono text-sm text-stone-500 opacity-70">{stat.percentage}%</span>
                </div>
                <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${stat.percentage === 100 ? 'bg-secondary' : 'bg-primary'}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
