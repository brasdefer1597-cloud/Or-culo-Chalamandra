import React, { useMemo, useState, useEffect } from 'react';
import { FormData, QuestionTemplate } from '../types';
import { ORACLE_BANK } from '../constants';
import { Button } from './Button';
import { Mail, RefreshCw, Copy, BrainCircuit, Loader2, AlertTriangle } from 'lucide-react';
import { GoogleGenAI, Type, Schema } from "@google/genai";

interface OracleResultProps {
  data: FormData;
  onReset: () => void;
}

export const OracleResult: React.FC<OracleResultProps> = ({ data, onReset }) => {
  const { method, context, situation, useAI } = data;
  const activeSituation = situation.trim() || context;

  const [aiQuestions, setAiQuestions] = useState<QuestionTemplate[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [thinkingTime, setThinkingTime] = useState(0);

  // Timer for thinking effect
  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setThinkingTime(t => t + 0.1);
      }, 100);
    } else {
      setThinkingTime(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    if (useAI && !aiQuestions) {
      generateAIResponse();
    }
  }, [useAI, method, context, activeSituation]);

  const generateAIResponse = async () => {
    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const schema: Schema = {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            heading: { type: Type.STRING },
            text: { type: Type.STRING },
            color: { type: Type.STRING, description: "Tailwind border color class (e.g. border-red-500, border-blue-400)" }
          },
          required: ["heading", "text"]
        }
      };

      const prompt = `
        Act as 'Oráculo Chalamandra', a strategic advisor.
        Apply the '${method}' methodology to this situation: "${activeSituation}". 
        Context: ${context}.
        
        Tone: Strategic, street-smart ('Chola-Malandra-Fresa'), direct, and insightful.
        
        Provide a deep analysis broken down into the steps of the chosen methodology.
        For each step, provide:
        - heading: The step name (e.g., 'White Hat', 'Why #1').
        - text: The insight, question, or analysis.
        - color: A tailwind border color class reflecting the sentiment.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: {
          thinkingConfig: { thinkingBudget: 32768 },
          responseMimeType: 'application/json',
          responseSchema: schema
        }
      });

      const jsonText = response.text;
      if (jsonText) {
        const parsed = JSON.parse(jsonText);
        // Map to QuestionTemplate format (using text as template)
        const mapped: QuestionTemplate[] = parsed.map((item: any) => ({
          heading: item.heading,
          template: item.text, // store in template for consistency
          text: item.text,
          color: item.color || 'border-chala-magenta'
        }));
        setAiQuestions(mapped);
      } else {
        throw new Error("No response generated");
      }

    } catch (err) {
      console.error(err);
      setError("La conexión con el Oráculo AI falló. Intenta de nuevo o usa el modo clásico.");
    } finally {
      setLoading(false);
    }
  };

  const questions = useMemo(() => {
    if (useAI && aiQuestions) return aiQuestions;
    
    // Try persona-specific key first, then fall back to generic method key
    const compositeKey = `${method}_${context}`;
    const templates = ORACLE_BANK[compositeKey] || ORACLE_BANK[method] || [];
    return templates.map(t => ({
      ...t,
      text: t.template.replace(/\[situacion\]/g, activeSituation)
    }));
  }, [method, context, activeSituation, useAI, aiQuestions]);

  const handleEmail = () => {
    const subject = encodeURIComponent(`Mis Resultados Chalamandra: ${method}`);
    const bodyContent = questions.map(q => `[${q.heading}]\n${q.text || q.template}`).join('\n\n');
    const body = encodeURIComponent(`Hola,\n\nAquí están mis preguntas de poder para desbloquear: "${activeSituation}"\n\nMétodo: ${method}\n\n${bodyContent}\n\n---\nGenerado por Oráculo Chalamandra.`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
     const bodyContent = questions.map(q => `${q.heading}: ${q.text || q.template}`).join('\n\n');
     navigator.clipboard.writeText(bodyContent);
     alert("Copiado al portapapeles, maestro.");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-chala-magenta/20 blur-xl rounded-full animate-pulse-slow"></div>
          <Loader2 className="w-16 h-16 text-chala-magenta animate-spin relative z-10" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-black text-white uppercase tracking-widest">
            Gemini 3.0 Pro Thinking
          </h3>
          <p className="text-chala-green font-mono text-sm">
            Presupuesto de Pensamiento: 32k Tokens
          </p>
          <p className="text-gray-500 text-xs">
            Tiempo de cómputo: {thinkingTime.toFixed(1)}s
          </p>
        </div>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-chala-magenta to-chala-gold animate-progress" style={{ width: '100%', animation: 'shimmer 2s infinite linear' }}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-white mb-4">{error}</p>
        <Button onClick={onReset} variant="outline">Volver al Inicio</Button>
      </div>
    );
  }

  return (
    <div className="animate-slide-up w-full max-w-3xl mx-auto">
      <div className="mb-8 text-center">
         <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-xs font-bold uppercase tracking-widest ${useAI ? 'border-chala-magenta text-white bg-chala-magenta/20' : 'border-gray-500 text-gray-500'}`}>
                {useAI && <BrainCircuit className="w-3 h-3" />}
                {useAI ? 'Análisis AI Profundo' : 'Modo Clásico'}
            </div>
         </div>
         <h2 className="text-3xl font-black text-white mb-1">Diagnóstico: {method}</h2>
         <p className="text-chala-gold text-sm font-bold uppercase tracking-widest mb-2">{context}</p>
         <p className="text-gray-400 italic">"{activeSituation}"</p>
      </div>

      <div className="grid gap-4 mb-8">
        {questions.map((q, idx) => (
          <div 
            key={idx} 
            className={`bg-chala-darkgray p-6 rounded-lg border-l-4 shadow-lg hover:bg-black transition-colors duration-300 ${q.color || 'border-chala-green'}`}
          >
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 opacity-80 ${q.color?.replace('border', 'text') || 'text-chala-green'}`}>
              {q.heading}
            </h3>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-100 whitespace-pre-wrap">
              {q.text || q.template}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-black/40 border border-gray-800 p-6 rounded-lg mb-8 text-center">
        <p className="text-chala-gold text-sm font-mono mb-2">⚡ RITUAL SUGERIDO ⚡</p>
        <p className="text-gray-400">Respira profundo (SRAP). Lee en voz alta. Ejecuta la primera acción en 72 horas.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={handleEmail} variant="secondary" className="flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" /> Guardar en Email
        </Button>
        <Button onClick={handleCopy} variant="outline" className="flex items-center justify-center gap-2">
            <Copy className="w-4 h-4" /> Copiar Texto
        </Button>
        <Button onClick={onReset} variant="outline" className="flex items-center justify-center gap-2 !border-gray-600 !text-gray-400 hover:!text-white hover:!border-white">
          <RefreshCw className="w-4 h-4" /> Nueva Consulta
        </Button>
      </div>
    </div>
  );
};