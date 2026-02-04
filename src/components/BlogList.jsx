import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { client } from '../lib/contentfulClient';

const BlogList = ({ onPostClick }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.getEntries({ content_type: 'blogPage' })
      .then((response) => {
        setPosts(response.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('hr-HR', options);
  };

  if (isLoading) {
      return (
          <section id="blog" className="py-24 bg-surface-dim text-center">
              <p>Učitavanje dnevnika...</p>
          </section>
      )
  }

  return (
    <section id="blog" className="py-24 bg-surface-dim">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Naše bilješke</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Dnevnik Renovacije</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => {
            const { title, image } = post.fields;
            // Create a short excerpt from the first paragraph of rich text
            const excerpt = post.fields.body?.content[0]?.content[0]?.value?.substring(0, 100) + "..." || "Pritisni za više detalja...";
            const imageUrl = image?.fields?.file?.url ? `https:${image.fields.file.url}` : 'https://via.placeholder.com/400x300';
            const date = formatDate(post.sys.createdAt);

            return (
            <motion.article
              key={post.sys.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => onPostClick(post)}
            >
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6 shadow-warmer">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Dnevnik
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex items-center text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">
                  <Calendar size={12} className="mr-2 text-primary" /> {date}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                  {title}
                </h3>
                
                <p className="text-stone-600 mb-6 text-sm leading-relaxed line-clamp-3">
                  {excerpt}
                </p>
                
                <div className="mt-auto flex items-center text-primary font-bold text-sm uppercase tracking-wide group-hover:gap-2 transition-all">
                  Pročitaj više <ArrowRight size={16} className="ml-2 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          )})}
        </div>
      </div>
    </section>
  );
};
export default BlogList;
