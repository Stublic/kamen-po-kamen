import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogPost = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) return null;

  const { title, image, body } = post.fields;
  const date = new Date(post.sys.createdAt).toLocaleDateString('hr-HR', { year: 'numeric', month: 'long', day: 'numeric' });
  const imageUrl = image?.fields?.file?.url ? `https:${image.fields.file.url}` : 'https://via.placeholder.com/800x600';
  
  // Extract excerpt from the first paragraph
  const excerpt = body?.content[0]?.content[0]?.value || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen bg-background py-24 pb-20"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-500 hover:text-primary mb-8 transition-colors group font-medium"
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-all">
            <ArrowLeft size={16} />
          </div>
          Povratak na dnevnik
        </button>

        <div className="bg-white rounded-[2rem] shadow-card overflow-hidden">
          <div className="h-[40vh] md:h-[50vh] w-full relative">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
               <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="bg-primary px-4 py-1.5 rounded-full shadow-lg">Dnevnik</span>
                  <span className="flex items-center text-stone-200"><Calendar size={14} className="mr-2" /> {date}</span>
                </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-lg text-white">
                {title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-16">
            <div className="max-w-2xl mx-auto">
              {excerpt && (
                <p className="font-serif text-2xl leading-relaxed mb-10 text-stone-800 italic opacity-80">
                   "{excerpt}"
                </p>
              )}
              
              <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-8">
                 <div className="mb-8">
                   {documentToReactComponents(body)}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;
