import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { APP_TAGLINE } from './utils/constants';

const DemoApp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-chala-magenta selection:text-white">
      <Header />

      <main className="flex-grow px-4 py-8 md:py-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                <span className="block text-chala-green">DEMO VERSION</span>
                <span className="block">EXPLORA EL CAOS.</span>
              </h2>
              <p className="text-chala-gold text-lg font-medium italic">
                {APP_TAGLINE}
              </p>
            </div>

            <div className="bg-chala-darkgray p-8 rounded-lg text-center">
                <p className="text-white mb-4">Esta es una versión de demostración.</p>
                <p className="text-gray-400">Accede a la versión completa para consultar el oráculo.</p>
                <a href="/" className="inline-block mt-4 px-6 py-2 bg-chala-magenta text-white rounded hover:bg-opacity-80 transition">
                    Ir a la versión completa
                </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemoApp;
