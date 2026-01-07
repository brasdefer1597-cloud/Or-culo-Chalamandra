import React from 'react';
import { FormData } from '../types';
import { BuyMeCoffee } from './BuyMeCoffee';
import { Lock, Sparkles } from 'lucide-react';

interface DemoResultProps {
  data: FormData;
  onReset: () => void;
}

export const DemoResult: React.FC<DemoResultProps> = ({ data }) => {
  return (
    <div className="animate-slide-up w-full max-w-3xl mx-auto space-y-8">

      {/* Header */}
      <div className="text-center">
         <h2 className="text-3xl font-black text-white mb-2">Diagnóstico: {data.method}</h2>
         <p className="text-gray-400 italic">"{data.situation || data.context}"</p>
      </div>

      {/* Free Phases */}
      <div className="grid gap-4">
          <div className="bg-chala-darkgray p-6 rounded-lg border-l-4 border-chala-magenta shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-chala-magenta opacity-80">
              Fase 1: Sintetizar
            </h3>
            <p className="text-lg font-medium leading-relaxed text-gray-100">
               Has identificado un conflicto en el terreno "{data.context}".
               La primera clave es separar los hechos de las emociones. ¿Qué es objetivamente cierto en esta situación?
            </p>
          </div>

          <div className="bg-chala-darkgray p-6 rounded-lg border-l-4 border-chala-blue shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-chala-blue opacity-80">
              Fase 2: Recomponer
            </h3>
            <p className="text-lg font-medium leading-relaxed text-gray-100">
               Observa las piezas rotas. No busques culpables, busca patrones.
               El método {data.method} sugiere cambiar tu ángulo de visión ahora mismo.
            </p>
          </div>
      </div>

      {/* Locked Phases */}
      <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-black/50 p-8 text-center backdrop-blur-sm">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>

         {/* Blurry Content */}
         <div className="filter blur-sm select-none opacity-50 space-y-4 mb-8">
            <div className="bg-gray-800 h-24 rounded-lg w-full"></div>
            <div className="bg-gray-800 h-32 rounded-lg w-full"></div>
         </div>

         {/* Lock Overlay */}
         <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
            <Lock className="w-16 h-16 text-chala-gold mb-4 animate-pulse" />
            <h3 className="text-2xl font-black text-white uppercase mb-2">
                Análisis Profundo Bloqueado
            </h3>
            <p className="text-gray-300 max-w-md mx-auto mb-6">
                El SRAP completo (Análisis + Proyección) y la potencia de Gemini 3.0 Pro están reservados para el búnker.
            </p>
            <BuyMeCoffee />
            <div className="mt-4 flex items-center gap-2 text-xs text-chala-green">
                <Sparkles size={12} />
                <span>Incluye Exportación PDF + Historial</span>
            </div>
         </div>
      </div>

    </div>
  );
};
