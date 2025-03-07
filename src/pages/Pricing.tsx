import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'emailManagement',
      title: t('pricing.calculator.services.emailManagement.title'),
      price: t('pricing.calculator.services.emailManagement.price')
    },
    {
      id: 'calendarManagement',
      title: t('pricing.calculator.services.calendarManagement.title'),
      price: t('pricing.calculator.services.calendarManagement.price')
    },
    {
      id: 'documentHandling',
      title: t('pricing.calculator.services.documentHandling.title'),
      price: t('pricing.calculator.services.documentHandling.price')
    },
    {
      id: 'travelArrangements',
      title: t('pricing.calculator.services.travelArrangements.title'),
      price: t('pricing.calculator.services.travelArrangements.price')
    },
    {
      id: 'clientCommunication',
      title: t('pricing.calculator.services.clientCommunication.title'),
      price: t('pricing.calculator.services.clientCommunication.price')
    }
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  useEffect(() => {
    let cost = 0;
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        cost += Number(service.price);
      }
    });
    setTotalCost(cost);
  }, [selectedServices, services]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('pricing.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('pricing.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="pricing-calculator"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2">
              {t('pricing.calculator.title')}
            </h2>
            <p className="text-neutral-600 mb-6">
              {t('pricing.calculator.subtitle')}
            </p>
            
            <div className="space-y-4 mb-8">
              {services.map(service => (
                <div key={service.id} className="pricing-option">
                  <input
                    type="checkbox"
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onChange={() => toggleService(service.id)}
                  />
                  <label htmlFor={service.id} className="flex justify-between w-full cursor-pointer">
                    <span>{service.title}</span>
                    <span className="font-semibold">{t('pricing.calculator.currency')}{service.price}/{i18n.language === 'lt' ? 'mėn' : 'month'}</span>
                  </label>
                </div>
              ))}
            </div>
            
            <div className="border-t border-neutral-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{t('pricing.calculator.total')}</span>
                <span className="text-2xl font-bold text-primary-600">
                  {t('pricing.calculator.currency')}{totalCost}/{i18n.language === 'lt' ? 'mėn' : 'month'}
                </span>
              </div>
              <p className="text-sm text-neutral-500 mt-2">
                {t('pricing.calculator.disclaimer')}
              </p>
            </div>
            
            <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
              {t('pricing.calculator.cta')}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            {t('pricing.packages.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="p-6 border-b border-neutral-200">
                <h3 className="text-xl font-bold mb-2">{t('pricing.packages.basic.title')}</h3>
                <p className="text-2xl font-bold text-primary-600">{t('pricing.packages.basic.price')}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {t('pricing.packages.basic.features', { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline w-full text-center">
                  {t('pricing.getStarted')}
                </Link>
              </div>
            </motion.div>
            
            {/* Standard Package */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 border-2 border-primary-500 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="absolute top-0 right-0 bg-primary-500 text-white py-1 px-4 text-sm font-semibold">
                Popular
              </div>
              <div className="p-6 border-b border-neutral-200 bg-primary-50">
                <h3 className="text-xl font-bold mb-2">{t('pricing.packages.standard.title')}</h3>
                <p className="text-2xl font-bold text-primary-600">{t('pricing.packages.standard.price')}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {t('pricing.packages.standard.features', { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary w-full text-center">
                  {t('pricing.getStarted')}
                </Link>
              </div>
            </motion.div>
            
            {/* Premium Package */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="p-6 border-b border-neutral-200">
                <h3 className="text-xl font-bold mb-2">{t('pricing.packages.premium.title')}</h3>
                <p className="text-2xl font-bold text-primary-600">{t('pricing.packages.premium.price')}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {t('pricing.packages.premium.features', { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline w-full text-center">
                  {t('pricing.getStarted')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            {t('pricing.faq.title')}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{t('pricing.faq.rightPackage.question')}</h3>
              <p className="text-neutral-600">
                {t('pricing.faq.rightPackage.answer')}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{t('pricing.faq.customize.question')}</h3>
              <p className="text-neutral-600">
                {t('pricing.faq.customize.answer')}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{t('pricing.faq.contract.question')}</h3>
              <p className="text-neutral-600">
                {t('pricing.faq.contract.answer')}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{t('pricing.faq.startTime.question')}</h3>
              <p className="text-neutral-600">
                {t('pricing.faq.startTime.answer')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('pricing.readyToStart')}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('pricing.contactToday')}
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            {t('pricing.contactUsNow')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;