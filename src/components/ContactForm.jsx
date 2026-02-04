import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Materijali (Stara cigla/Grede)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create form data payload for Netlify
    const form = e.target;
    // Standard Netlify form submission via fetch
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(() => setSubmitted(true))
    .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative background vibe */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary rounded-full blur-[128px]" />
          <div className="absolute left-0 top-0 w-64 h-64 bg-secondary rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <span className="text-secondary-light font-bold tracking-widest uppercase text-sm mb-4 block">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Javi nam se</h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
            Gradite ili rušite? Imate stare grede, ciglu ili crijep? <br/>
            Ili samo želite popiti kavu na gradilištu?
          </p>
        </motion.div>

        <div className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-white">Hvala na poruci!</h3>
              <p className="text-stone-400 text-lg mb-8">Javit ćemo vam se čim stignemo s gradilišta.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-primary-light hover:text-primary font-bold underline underline-offset-4 transition-colors"
              >
                Pošalji novu poruku
              </button>
            </motion.div>
          ) : (
            <form 
              name="contact" 
              method="post" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-stone-400 tracking-wide uppercase">Ime i Prezime</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-stone-950/50 border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-stone-600"
                    placeholder="Vaše ime"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-stone-400 tracking-wide uppercase">Email Adresa</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-stone-950/50 border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-stone-600"
                    placeholder="vas@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-bold text-stone-400 tracking-wide uppercase">Vrsta Suradnje</label>
                <div className="relative">
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-stone-950/50 border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                  >
                    <option>Materijali (Stara cigla/Grede)</option>
                    <option>Majstorski radovi</option>
                    <option>Sponzorstvo</option>
                    <option>Ostalo</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-stone-400 tracking-wide uppercase">Poruka</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-stone-950/50 border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-stone-600"
                  placeholder="Kako nam možete pomoći?"
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-xl transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                >
                  <Send className="mr-3 h-5 w-5" /> Pošalji Poruku
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
