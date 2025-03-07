import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const Team: React.FC = () => {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: t('team.members.member1.name'),
      position: t('team.members.member1.position'),
      bio: t('team.members.member1.bio'),
      funFact: t('team.members.member1.funFact'),
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://player.vimeo.com/external/459389137.sd.mp4?s=d5892922daa5c60e7cf328a99159d44b5d5fbe9a&profile_id=139&oauth2_token_id=57447761'
    },
    {
      id: 2,
      name: t('team.members.member2.name'),
      position: t('team.members.member2.position'),
      bio: t('team.members.member2.bio'),
      funFact: t('team.members.member2.funFact'),
      image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://player.vimeo.com/external/552481870.sd.mp4?s=c40d8bfe8a6dc6d92df8713457abb09b39e1cf4f&profile_id=165&oauth2_token_id=57447761'
    },
    {
      id: 3,
      name: t('team.members.member3.name'),
      position: t('team.members.member3.position'),
      bio: t('team.members.member3.bio'),
      funFact: t('team.members.member3.funFact'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://player.vimeo.com/external/517090081.sd.mp4?s=80e4b1422f9f32c1b05688da9c361e8f92bc7a38&profile_id=165&oauth2_token_id=57447761'
    },
    {
      id: 4,
      name: t('team.members.member4.name'),
      position: t('team.members.member4.position'),
      bio: t('team.members.member4.bio'),
      funFact: t('team.members.member4.funFact'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://player.vimeo.com/external/449583889.sd.mp4?s=d407941328107a93541529a5453c276cd1b7f5cc&profile_id=165&oauth2_token_id=57447761'
    }
  ];

  const openVideo = (id: number) => {
    setActiveVideo(id);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
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
            {t('team.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('team.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="team-card"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="team-card-content">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary-200 mb-2">{member.position}</p>
                    <p className="text-sm text-neutral-200 mb-4">{member.bio}</p>
                    <div className="flex justify-between items-center">
                      <div className="bg-primary-600 text-white text-xs py-1 px-2 rounded-full">
                        {member.funFact}
                      </div>
                      <button
                        onClick={() => openVideo(member.id)}
                        className="bg-accent-500 hover:bg-accent-600 text-white p-2 rounded-full transition-colors"
                        aria-label={`Watch ${member.name}'s intro video`}
                      >
                        <Play size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            {t('team.values.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{t('team.values.reliability.title')}</h3>
              <p className="text-neutral-600 text-center">
                {t('team.values.reliability.description')}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{t('team.values.confidentiality.title')}</h3>
              <p className="text-neutral-600 text-center">
                {t('team.values.confidentiality.description')}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{t('team.values.adaptability.title')}</h3>
              <p className="text-neutral-600 text-center">
                {t('team.values.adaptability.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo !== null && (
        <motion.div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full max-w-3xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-primary-300 transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            
            <div className="rounded-lg overflow-hidden bg-black">
              <video 
                src={teamMembers.find(m => m.id === activeVideo)?.videoUrl} 
                controls 
                autoPlay 
                className="w-full aspect-video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Team;