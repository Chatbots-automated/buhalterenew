import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Calendar, FileText, Plane, Users } from 'lucide-react';

interface PathOption {
  icon: React.ReactNode;
  label: string;
  path: string;
  hash?: string;
}

const PathNavigation: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const pathOptions: PathOption[] = [
    {
      icon: <Mail size={24} className="text-primary-600" />,
      label: t('pathNav.options.emailManagement'),
      path: '/services',
      hash: '#email-management'
    },
    {
      icon: <Calendar size={24} className="text-primary-600" />,
      label: t('pathNav.options.calendarManagement'),
      path: '/services',
      hash: '#calendar-management'
    },
    {
      icon: <FileText size={24} className="text-primary-600" />,
      label: t('pathNav.options.documentHandling'),
      path: '/services',
      hash: '#document-handling'
    },
    {
      icon: <Plane size={24} className="text-primary-600" />,
      label: t('pathNav.options.travelArrangements'),
      path: '/services',
      hash: '#travel-arrangements'
    },
    {
      icon: <Users size={24} className="text-primary-600" />,
      label: t('pathNav.options.clientCommunication'),
      path: '/services',
      hash: '#client-communication'
    }
  ];

  const handlePathSelect = (option: PathOption) => {
    navigate(option.path + (option.hash || ''));
  };

  return (
    <div className="path-nav">
      <h3 className="text-xl font-semibold text-center mb-6">{t('pathNav.title')}</h3>
      
      {pathOptions.map((option, index) => (
        <motion.div
          key={index}
          className="path-option"
          onClick={() => handlePathSelect(option)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center gap-3">
            {option.icon}
            <span className="font-medium">{option.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PathNavigation;