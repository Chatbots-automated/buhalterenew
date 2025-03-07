import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

import StickyNote from '../components/StickyNote';
import PathNavigation from '../components/PathNavigation';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-primary-50 to-neutral-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TypeAnimation
                  sequence={[
                    t('home.hero.title'),
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h1>
              
              <motion.p 
                className="text-xl text-neutral-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t('home.hero.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/services" className="btn btn-primary inline-flex items-center gap-2">
                  {t('home.hero.cta')} <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional secretary services" 
                className="rounded-lg shadow-xl w-full"
              />
              
              {/* Sticky Notes */}
              <div className="absolute -top-10 -left-10 transform -rotate-6 hidden md:block">
                <StickyNote 
                  title="Email Management"
                  content="Reduce inbox overload and ensure timely responses to important messages."
                  color="bg-accent-100"
                  rotation={-6}
                  translationKey={{
                    title: 'home.stickyNotes.emailManagement.title',
                    content: 'home.stickyNotes.emailManagement.content'
                  }}
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 transform rotate-3 hidden md:block">
                <StickyNote 
                  title="Calendar Organization"
                  content="Never double-book or miss an important meeting again."
                  color="bg-primary-100"
  )
}