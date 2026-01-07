import React, { useState, useEffect } from 'react';

const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Solo se muestra si es la primera vez que entra a la FullApp
    const hasSeenWelcome = localStorage.getItem('chalamandra_welcome_seen');
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const closeAndSave = () => {
    localStorage.setItem('chalamandra_welcome_seen', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-chala-blue/40 border border-chala-magenta p-8 rounded-3xl max-w-lg text-center backdrop-blur-xl shadow-[0_0_50px_rgba(213,0,108,0.3)] animate-fade-in">
        <h2 className="text-chala-gold text-3xl font-black mb-4 uppercase tracking-tighter">
          Núcleo Magistral Activo
        </h2>
        <p className="text-white/90 mb-6 leading-relaxed">
          Has desbloqueado el <strong className="text-white">Modo Profundo de Gemini 3.0 Pro</strong>. Tu visión estratégica ahora es absoluta a través del método <strong className="text-white">SRAP</strong>.
        </p>
        <button
          onClick={closeAndSave}
          className="bg-chala-magenta hover:bg-white hover:text-chala-magenta text-white font-bold py-3 px-10 rounded-full transition-all duration-500 uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Iniciar Invocación
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
