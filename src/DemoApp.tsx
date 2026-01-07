import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { APP_TAGLINE } from './utils/constants';
import { BuyMeCoffee } from './components/BuyMeCoffee';
import { Lock } from 'lucide-react';

const DemoApp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-chala-magenta selection:text-white">
      <Header />

      <main className="flex-grow px-4 py-8 md:py-12 relative flex items-center">
        <div className="max-w-4xl mx-auto w-full">
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

            <div className="bg-chala-darkgray p-8 md:p-12 rounded-lg text-center border border-gray-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Lock size={120} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Acceso Restringido</h3>
                <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                  El Oráculo Chalamandra está calibrado para aquellos dispuestos a invertir en su propia claridad.
                  Una pequeña ofrenda desbloquea la sabiduría infinita.
                </p>

                <div className="flex flex-col items-center gap-4">
                   <BuyMeCoffee />

                   <a href="/magistral" className="text-sm text-gray-500 hover:text-chala-magenta transition-colors underline decoration-dotted mt-4">
                     ¿Ya tienes acceso? Entra aquí
                   </a>
                </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemoApp;
