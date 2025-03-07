import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Users, PieChart, Headphones } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buhalterinė apskaita ir įmonių steigimas
            </h1>
            <p className="text-xl mb-8">
              Europinius standartus atitinkanti apskaita Jūsų verslui
            </p>
            <Link
              to="/kontaktai"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
            >
              SUSISIEKTI
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kodėl verta rinktis "Buhaltere.lt"?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Sutaupome" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Sutaupome 2/3 biudžeto, skirto buhalterijai
              </h3>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Komanda" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Vietoje Jūsų įmonės buhalterio – kvalifikuota specialistų komanda
              </h3>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Atostogos" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Jūsų įmonė atostogaujame VMI, SODRA – 365 dienas/metuose
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mūsų teikiamos paslaugos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Calculator className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Įmonių steigimas</h3>
              <p className="text-gray-600">Padedame įsteigti įmonę ir sutvarkyti visus reikalingus dokumentus</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buhalterinė apskaita</h3>
              <p className="text-gray-600">Pilnas buhalterinės apskaitos tvarkymas</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalo valdymas</h3>
              <p className="text-gray-600">Darbo užmokesčio apskaičiavimas ir personalo dokumentų tvarkymas</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <PieChart className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Finansų valdymas</h3>
              <p className="text-gray-600">Finansinių ataskaitų rengimas ir analizė</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Headphones className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Konsultavimas</h3>
              <p className="text-gray-600">Profesionalios konsultacijos mokesčių ir apskaitos klausimais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Reikia profesionalios buhalterinės apskaitos?
          </h2>
          <p className="text-xl mb-8">
            Susisiekite su mumis ir gaukite nemokamą konsultaciją
          </p>
          <Link
            to="/kontaktai"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            GAUTI KONSULTACIJĄ
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;