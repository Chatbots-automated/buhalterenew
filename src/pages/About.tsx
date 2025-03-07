import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apie mus
            </h1>
            <p className="text-xl">
              Profesionali buhalterinių paslaugų komanda
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Mūsų istorija ir patirtis
              </h2>
              <p className="text-gray-600 mb-4">
                Jau daugiau nei 10 metų teikiame profesionalias buhalterines paslaugas įvairioms įmonėms. Mūsų komanda - tai patyrę specialistai, kurie nuolat tobulina savo žinias ir seka naujausias tendencijas.
              </p>
              <p className="text-gray-600">
                Mūsų tikslas - padėti jūsų verslui augti, suteikiant profesionalias buhalterines paslaugas ir konsultacijas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">50+</h3>
                <p className="text-gray-600">Patenkintų klientų</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <Award className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">10+</h3>
                <p className="text-gray-600">Metų patirties</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7</h3>
                <p className="text-gray-600">Klientų aptarnavimas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mūsų komanda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Laura Kazlauskienė</h3>
              <p className="text-gray-600">Vyriausioji buhalterė</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Agnė Petraitienė</h3>
              <p className="text-gray-600">Finansų analitikė</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team member"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Tomas Paulauskas</h3>
              <p className="text-gray-600">Mokesčių konsultantas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;