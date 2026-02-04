import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import ProgressTracker from './components/ProgressTracker';
import DonationSection from './components/DonationSection';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ContactForm from './components/ContactForm';

// Styles
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedPost, setSelectedPost] = useState(null);

  const handleNavigate = (id) => {
    // If we are in blog post view, go back first optionally, or just scroll
    if (selectedPost) {
       setSelectedPost(null);
       setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    // Slight delay to allow render, then scroll to blog section to maintain context
    setTimeout(() => {
        const blogSection = document.getElementById('blog');
        if (blogSection) blogSection.scrollIntoView(); 
    }, 100);
  };

  return (
    <div className="font-sans text-stone-900 bg-background min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        {selectedPost ? (
          <BlogPost key="post-detail" post={selectedPost} onBack={handleBackToBlog} />
        ) : (
          <div key="landing-page">
            <Hero onNavigate={handleNavigate} />
            <OurStory />
            <ProgressTracker />
            <DonationSection />
            <BlogList onPostClick={handlePostClick} />
            <ContactForm />
            
            <footer className="bg-stone-900 text-stone-500 py-10 text-center text-sm border-t border-stone-800">
               <div className="container mx-auto px-6">
                 <p className="mb-2">&copy; {new Date().getFullYear()} Kamen po kamen.</p>
                 <p className="text-xs text-stone-600">Built with ❤️ & javascript</p>
               </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
