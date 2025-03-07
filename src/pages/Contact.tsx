import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'bot', text: string}[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRequestSelect = (requestType: string) => {
    setSelectedRequest(requestType);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatMessage.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { type: 'user', text: chatMessage }]);
    
    // Simulate bot response
    setTimeout(() => {
      let response = '';
      
      if (chatMessage.toLowerCase().includes('pricing')) {
        response = 'Our pricing starts at $500/month for basic services. You can check our pricing page for more details or use our calculator to get a custom quote.';
      } else if (chatMessage.toLowerCase().includes('email') || chatMessage.toLowerCase().includes('mail')) {
        response = 'Our email management services include inbox organization, filtering, and responding to emails on your behalf. Would you like to know more?';
      } else if (chatMessage.toLowerCase().includes('calendar')) {
        response = 'We offer comprehensive calendar management, including scheduling meetings, setting reminders, and ensuring you never miss an important appointment.';
      } else if (chatMessage.toLowerCase().includes('document')) {
        response = 'Our document handling services include creation, editing, and organization of all your business documents.';
      } else {
        response = 'Thank you for your message. One of our team members will get back to you shortly. Is there anything specific you would like to know about our services?';
      }
      
      setChatMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);
    
    setChatMessage('');
  };

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
            {t('contact.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Quick Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={selectedRequest ? `I need help with ${selectedRequest}` : ''}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary inline-flex items-center gap-2"
                  >
                    {t('contact.form.submit')}
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
            
            {/* Quick Options */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-neutral-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  {t('contact.quickRequest.title')}
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleRequestSelect('emails')}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      selectedRequest === 'emails'
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'bg-white hover:bg-neutral-100'
                    }`}
                  >
                    {t('contact.quickRequest.options.emailHelp')}
                  </button>
                  <button
                    onClick={() => handleRequestSelect('calendar')}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      selectedRequest === 'calendar'
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'bg-white hover:bg-neutral-100'
                    }`}
                  >
                    {t('contact.quickRequest.options.calendarHelp')}
                  </button>
                  <button
                    onClick={() => handleRequestSelect('documents')}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      selectedRequest === 'documents'
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'bg-white hover:bg-neutral-100'
                    }`}
                  >
                    {t('contact.quickRequest.options.documentHelp')}
                  </button>
                  <button
                    onClick={() => handleRequestSelect('information')}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      selectedRequest === 'information'
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'bg-white hover:bg-neutral-100'
                    }`}
                  >
                    {t('contact.quickRequest.options.generalInfo')}
                  </button>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Clock size={20} className="text-primary-600" />
                  {t('contact.responseTime.title')}
                </h3>
                <p className="text-neutral-600">
                  {t('contact.responseTime.text')}
                </p>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare size={20} className="text-primary-600" />
                  {t('contact.chatbot.title')}
                </h3>
                
                <div className="bg-white rounded-md border border-neutral-200 h-64 mb-4 overflow-y-auto p-4">
                  {chatMessages.length === 0 ? (
                    <div className="text-neutral-400 text-center py-4">
                      Ask a question to get started
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {chatMessages.map((msg, index) => (
                        <div 
                          key={index}
                          className={`${
                            msg.type === 'user' 
                              ? 'bg-primary-100 ml-auto' 
                              : 'bg-neutral-100 mr-auto'
                          } p-3 rounded-lg max-w-[80%] inline-block`}
                        >
                          {msg.text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder={t('contact.chatbot.placeholder')}
                    className="flex-grow px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map and Office Info */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-neutral-600 mb-6">
                We're located in the heart of the city, easily accessible by public transportation.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/2 h-[400px] w-full rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342144!2d2.3354330157606347!3d48.86061107928823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sLouvre%20Museum!5e0!3m2!1sen!2sus!4v1625689121177!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;