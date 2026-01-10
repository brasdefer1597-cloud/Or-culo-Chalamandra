import React, { useState } from 'react';
import { MethodType, ContextType, FormData } from '../types';
import { Select, Textarea } from './Input';
import { Button } from './Button';
import { METHOD_DESCRIPTIONS } from '../constants';
import { ArrowRight, BrainCircuit } from 'lucide-react';

interface OracleFormProps {
  onSubmit: (data: FormData) => void;
}

export const OracleForm: React.FC<OracleFormProps> = ({ onSubmit }) => {
  const [method, setMethod] = useState<MethodType>(MethodType.SIX_HATS);
  const [context, setContext] = useState<ContextType>(ContextType.WORK);
  const [situation, setSituation] = useState('');
  const [useAI, setUseAI] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ method, context, situation, useAI });
  };

  return (
    <div className="animate-fade-in w-full max-w-2xl mx-auto bg-chala-darkgray/50 p-6 md:p-8 rounded-xl border border-gray-800 shadow-2xl backdrop-blur-sm relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-chala-magenta/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <h2 className="text-2xl font-bold mb-2 text-white">Configura el Sistema</h2>
      <p className="text-gray-400 mb-8 text-sm">Selecciona tus armas y define el terreno de batalla.</p>

      <form onSubmit={handleSubmit}>
        <Select 
          label="1. Elige tu Arma (Método)"
          value={method}
          onChange={(e) => setMethod(e.target.value as MethodType)}
        >
          {Object.entries(METHOD_DESCRIPTIONS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </Select>

        <Select 
          label="2. Elige el Terreno (Contexto)"
          value={context}
          onChange={(e) => setContext(e.target.value as ContextType)}
        >
          {Object.values(ContextType).map((val) => (
            <option key={val} value={val}>{val}</option>
          ))}
        </Select>

        <Textarea 
          label="3. Tira la Neta (Situación)"
          placeholder="Ej: Mi jefe me pide horas extra gratis, mi pareja no entiende mi obsesión con el trabajo, o tengo miedo de lanzar mi proyecto..."
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
          rows={3}
          required={false} 
        />
        
        {/* AI Toggle Switch */}
        <div className="mb-8 flex items-center justify-between bg-black/30 p-4 rounded-lg border border-gray-800 hover:border-chala-magenta/50 transition-colors cursor-pointer" onClick={() => setUseAI(!useAI)}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${useAI ? 'bg-chala-magenta text-white' : 'bg-gray-800 text-gray-500'} transition-colors`}>
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white flex items-center gap-2">
                Modo Profundo (AI)
                {useAI && <span className="text-[10px] bg-chala-magenta px-2 py-0.5 rounded-full">BETA</span>}
              </div>
              <div className="text-xs text-gray-400">
                Análisis avanzado con Gemini 3.0 Pro (Thinking Mode)
              </div>
            </div>
          </div>
          <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${useAI ? 'bg-chala-magenta' : 'bg-gray-700'}`}>
            <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${useAI ? 'translate-x-6' : 'translate-x-0'}`} />
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-6 italic -mt-4">
          * Si lo dejas vacío, usaremos el contexto genérico.
        </div>

        <Button type="submit" fullWidth>
          <span className="flex items-center justify-center gap-2">
            Invocar Respuestas <ArrowRight className="w-5 h-5" />
          </span>
        </Button>
      </form>
    </div>
  );
};