import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface StickyNoteProps {
  title: string;
  content: string;
  color?: string;
  rotation?: number;
  translationKey?: {
    title: string;
    content: string;
  };
}

const StickyNote: React.FC<StickyNoteProps> = ({ 
  title, 
  content, 
  color = 'bg-accent-100', 
  rotation = 1,
  translationKey
}) => {
  const { t } = useTranslation();
  
  // Use translation if translationKey is provided, otherwise use the direct title/content
  const displayTitle = translationKey ? t(translationKey.title) : title;
  const displayContent = translationKey ? t(translationKey.content) : content;
  
  return (
    <motion.div
      className={`sticky-note ${color}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{ 
        scale: 1.05, 
        rotate: -rotation,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-lg font-semibold mb-2">{displayTitle}</h3>
      <p className="text-neutral-700">{displayContent}</p>
    </motion.div>
  );
};

export default StickyNote;