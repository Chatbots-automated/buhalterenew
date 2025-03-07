import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, FileText, Plane, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const emailRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);
  const travelRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  const timelineSteps = [
    {
      id: 'step1',
      title: t('services.timeline.step1.title'),
      description: t('services.timeline.step1.description'),
    },
    {
      id: 'step2',
      title: t('services.timeline.step2.title'),
      description: t('services.timeline.step2.description'),
      ref: emailRef,
      hash: 'email-management'
    },
    {
      id: 'step3',
      title: t('services.timeline.step3.title'),
      description: t('services.timeline.step3.description'),
      ref: calendarRef,
      hash: 'calendar-management'
    },
    {
      id: 'step4',
      title: t('services.timeline.step4.title'),
      description: t('services.timeline.step4.description'),
      ref: documentRef,
      hash: 'document-handling'
    },
    {
      id: 'step5',
      title: t('services.timeline.step5.title'),
      description: t('services.timeline.step5.description'),
      ref: travelRef,
      hash: 'travel-arrangements'
    },
    {
      id: 'step6',
      title: t('services.timeline.step6.title'),
      description: t('services.timeline.step6.description'),
      ref: clientRef,
      hash: 'client-communication'
    }
  ];

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
            {t('services.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            {t('services.processTitle')}
          </h2>
          
          <div className="timeline-container">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                id={step.hash}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Management */}
      <section id="email-management" ref={emailRef} className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                {t('services.emailManagement.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {t('services.emailManagement.description')}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.emailManagement.features.organization.title')}</h3>
                    <p className="text-neutral-600">{t('services.emailManagement.features.organization.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.emailManagement.features.filtering.title')}</h3>
                    <p className="text-neutral-600">{t('services.emailManagement.features.filtering.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.emailManagement.features.response.title')}</h3>
                    <p className="text-neutral-600">{t('services.emailManagement.features.response.description')}</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                {t('services.emailManagement.cta')} <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Email Management" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Management */}
      <section id="calendar-management" ref={calendarRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                {t('services.calendarManagement.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {t('services.calendarManagement.description')}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Calendar size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.calendarManagement.features.scheduling.title')}</h3>
                    <p className="text-neutral-600">{t('services.calendarManagement.features.scheduling.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.calendarManagement.features.reminders.title')}</h3>
                    <p className="text-neutral-600">{t('services.calendarManagement.features.reminders.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.calendarManagement.features.optimization.title')}</h3>
                    <p className="text-neutral-600">{t('services.calendarManagement.features.optimization.description')}</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                {t('services.calendarManagement.cta')} <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Calendar Management" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Document Handling */}
      <section id="document-handling" ref={documentRef} className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                {t('services.documentHandling.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {t('services.documentHandling.description')}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <FileText size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.documentHandling.features.creation.title')}</h3>
                    <p className="text-neutral-600">{t('services.documentHandling.features.creation.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.documentHandling.features.editing.title')}</h3>
                    <p className="text-neutral-600">{t('services.documentHandling.features.editing.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.documentHandling.features.organization.title')}</h3>
                    <p className="text-neutral-600">{t('services.documentHandling.features.organization.description')}</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                {t('services.documentHandling.cta')} <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Document Handling" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Arrangements */}
      <section id="travel-arrangements" ref={travelRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                {t('services.travelArrangements.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {t('services.travelArrangements.description')}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Plane size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.travelArrangements.features.flights.title')}</h3>
                    <p className="text-neutral-600">{t('services.travelArrangements.features.flights.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Plane size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.travelArrangements.features.accommodation.title')}</h3>
                    <p className="text-neutral-600">{t('services.travelArrangements.features.accommodation.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Plane size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.travelArrangements.features.transportation.title')}</h3>
                    <p className="text-neutral-600">{t('services.travelArrangements.features.transportation.description')}</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                {t('services.travelArrangements.cta')} <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Travel Arrangements" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Communication */}
      <section id="client-communication" ref={clientRef} className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                {t('services.clientCommunication.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {t('services.clientCommunication.description')}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Users size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.clientCommunication.features.correspondence.title')}</h3>
                    <p className="text-neutral-600">{t('services.clientCommunication.features.correspondence.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.clientCommunication.features.followUp.title')}</h3>
                    <p className="text-neutral-600">{t('services.clientCommunication.features.followUp.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t('services.clientCommunication.features.relationship.title')}</h3>
                    <p className="text-neutral-600">{t('services.clientCommunication.features.relationship.description')}</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                {t('services.clientCommunication.cta')} <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Client Communication" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('services.readyToStreamline')}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('services.getInTouch')}
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            {t('services.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;