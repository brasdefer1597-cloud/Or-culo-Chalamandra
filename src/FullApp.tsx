import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OracleForm } from './components/OracleForm';
import { OracleResult } from './components/OracleResult';
import { FormData } from './types';
import { APP_TAGLINE } from './utils/constants';
import WelcomeModal from './components/WelcomeModal';

const FullApp: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit = (data: FormData) => {
    // Artificial small delay for "Processing" feel could be added here
    setFormData(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFormData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-chala-magenta selection:text-white">
      <WelcomeModal />
      <Header />
      
      <main className="flex-grow px-4 py-8 md:py-12 relative">
        <div className="max-w-4xl mx-auto">
          {!formData ? (
            <div className="space-y-8">
              <div className="text-center space-y-4 mb-12 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  <span className="block text-chala-green">ORDEN EN EL CAOS.</span>
                  <span className="block">ESTRATEGIA EN LA CALLE.</span>
                </h2>
                <p className="text-chala-gold text-lg font-medium italic">
                  {APP_TAGLINE}
                </p>
              </div>
              
              <OracleForm onSubmit={handleSubmit} />
            </div>
          ) : (
            <OracleResult data={formData} onReset={handleReset} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FullApp;