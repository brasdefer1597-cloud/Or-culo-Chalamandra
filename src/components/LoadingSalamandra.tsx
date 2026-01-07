import React from 'react';

interface LoadingSalamandraProps {
    stage?: string;
}

const LoadingSalamandra: React.FC<LoadingSalamandraProps> = ({ stage = "Sintetizando" }) => {
  return (
    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md rounded-lg">
      <div className="relative w-40 h-40 flex items-center justify-center mb-6">
        {/* Aura de Resplandor */}
        <div className="absolute inset-0 bg-chala-gold/20 blur-3xl rounded-full animate-pulse-slow"></div>

        {/* Icono de Salamandra Animado (SVG) */}
        <svg
          viewBox="0 0 100 100"
          className="w-24 h-24 fill-current text-chala-gold drop-shadow-[0_0_15px_rgba(255,179,0,0.8)] animate-bounce"
        >
          {/* Path simplificado de una salamandra estilizada */}
          <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 Z M50 20 L55 40 L75 45 L55 50 L50 70 L45 50 L25 45 L45 40 Z" />
        </svg>

        {/* Círculo de Progreso Magistral */}
        <div className="absolute -inset-4 border-4 border-t-chala-green border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>

      <div className="text-center">
        <h3 className="text-chala-gold font-black text-xl uppercase tracking-widest animate-pulse">
          {stage}...
        </h3>
        <p className="text-white/60 text-sm mt-2 font-mono">
          Invocando sabiduría de Gemini 3.0 Pro...
        </p>
      </div>
    </div>
  );
};

export default LoadingSalamandra;
