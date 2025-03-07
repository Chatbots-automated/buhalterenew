import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ClipboardList, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ClipboardList size={24} className="text-primary-400" />
              <span className="font-display text-xl font-bold text-white">
                SecretaryPro
              </span>
            </Link>
            <p className="text-neutral-300 mb-6">
              {t('footer.companyInfo')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">
                  {t('footer.contactInfo.address')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">
                  {t('footer.contactInfo.phone')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">
                  {t('footer.contactInfo.email')}
                </span>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.links.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.links.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('footer.links.faq')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-400">
          {t('footer.company')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;