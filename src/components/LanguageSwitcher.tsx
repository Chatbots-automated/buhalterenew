import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = i18n.language;

  const languages = [
    { code: 'en', label: 'EN 🇬🇧' },
    { code: 'lt', label: 'LT 🇱🇹' },
  ];

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    // Save language preference to localStorage
    localStorage.setItem('i18nextLng', languageCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-neutral-700 hover:text-primary-600 transition-colors"
        aria-label="Change language"
      >
        <Globe size={18} />
        <span className="font-medium">
          {currentLanguage === 'en' ? '🇬🇧 EN' : '🇱🇹 LT'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-1 z-50 min-w-[100px]"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`language-option block w-full text-left px-4 py-2 hover:bg-primary-50 transition-colors ${
                  currentLanguage === language.code ? 'active bg-primary-50 text-primary-600 font-medium' : ''
                }`}
              >
                {language.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;