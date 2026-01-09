import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OracleForm } from './components/OracleForm';
import { DemoResult } from './components/DemoResult';
import { APP_TAGLINE } from './utils/constants';
import { FormData } from './types';

const DemoApp: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit = (data: FormData) => {
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
        <div className="max-w-4xl mx-auto w-full">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                <span className="block text-chala-green">DEMO VERSION</span>
                <span className="block">ESTRATEGIA EN LA CALLE.</span>
              </h2>
              <p className="text-chala-gold text-lg font-medium italic">
                {APP_TAGLINE}
              </p>
            </div>

            {!formData ? (
               <OracleForm onSubmit={handleSubmit} isDemo={true} />
            ) : (
               <DemoResult data={formData} onReset={handleReset} />
            )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemoApp;
