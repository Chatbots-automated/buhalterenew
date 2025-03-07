import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-orange-500 text-white text-sm py-1 px-4 text-right">
        <a href="mailto:info@buhaltere.lt" className="hover:underline">
          INFO@BUHALTERE.LT
        </a>
      </div>
      
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paslaugos" element={<Services />} />
          <Route path="/apie-mus" element={<About />} />
          <Route path="/kontaktai" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;