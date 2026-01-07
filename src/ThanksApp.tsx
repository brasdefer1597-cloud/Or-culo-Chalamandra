import React, { useEffect } from 'react';
import { activarAccesoPremium } from './utils/gatekeeper';
import { CheckCircle } from 'lucide-react';

const ThanksApp: React.FC = () => {
  useEffect(() => {
    // Activate premium access immediately
    const timer = setTimeout(() => {
        activarAccesoPremium();
    }, 3000); // 3 seconds delay to show the message

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-chala-black font-sans selection:bg-chala-magenta selection:text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-chala-magenta/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chala-gold/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="z-10 text-center p-8 max-w-lg mx-auto border border-chala-magenta/30 bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_0_50px_rgba(213,0,108,0.2)] animate-fade-in">
            <div className="flex justify-center mb-6">
                <CheckCircle className="w-20 h-20 text-chala-green animate-bounce" />
            </div>

            <h1 className="text-4xl font-black text-white mb-2 uppercase tracking-tight">
                Acceso Confirmado
            </h1>
            <h2 className="text-xl font-bold text-chala-gold mb-6 uppercase tracking-widest">
                Bienvenido al Búnker
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
                Tu ofrenda ha sido aceptada. El Oráculo Chalamandra está calibrando los sistemas para tu iniciación.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-chala-magenta font-mono animate-pulse">
                <span>/// INICIANDO TRANSFERENCIA ///</span>
            </div>
        </div>
    </div>
  );
};

export default ThanksApp;
