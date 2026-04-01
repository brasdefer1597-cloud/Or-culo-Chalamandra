import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OracleForm } from './components/OracleForm';
import { OracleResult } from './components/OracleResult';
import { FormData } from './types';
import { APP_TAGLINE } from './constants';

const App: React.FC = () => {
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
      <Header />
      
      <main className="flex-grow px-4 py-8 md:py-12 relative">
        <div className="max-w-4xl mx-auto">
          {!formData ? (
            <div className="space-y-8">
              <div className="text-center space-y-4 mb-12 animate-fade-in">
                <div className="flex justify-center items-end gap-4 md:gap-8 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-chala-green/20 blur-2xl scale-110 rounded-full"></div>
                    <img
                      src="/brand-street-wisdom.png"
                      alt="Chalamandra - Street Wisdom"
                      loading="eager"
                      className="relative w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-[0_0_20px_rgba(0,142,74,0.4)]"
                    />
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-chala-magenta/20 blur-2xl scale-110"></div>
                    <img
                      src="/chalamandra.png"
                      alt="Oráculo Chalamandra - Pensamiento Crítico"
                      className="relative w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-[0_0_24px_rgba(213,0,108,0.35)]"
                    />
                  </div>
                </div>
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

export default App;