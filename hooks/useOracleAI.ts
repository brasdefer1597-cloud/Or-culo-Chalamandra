/**
 * useOracleAI — Custom hook que encapsula toda la lógica de Gemini AI.
 *
 * Analogía: este hook es el "Hitman silencioso" del sistema.
 * Entra, ejecuta la llamada API, sale limpio y devuelve el resultado.
 * El componente que lo usa no necesita saber nada del protocolo interno.
 *
 * Separación de responsabilidades:
 *   - Componente → UI y estado visual
 *   - Este hook   → lógica AI, manejo de errores, timing
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleGenAI, Type, Schema } from '@google/genai';
import { MethodType, ContextType, QuestionTemplate } from '../types';

interface UseOracleAIParams {
  method: MethodType;
  context: ContextType;
  situation: string;
  enabled: boolean;
}

interface UseOracleAIResult {
  questions: QuestionTemplate[] | null;
  loading: boolean;
  error: string | null;
  elapsedTime: number;
  retry: () => void;
}

// Singleton del cliente AI — se instancia una sola vez en memoria.
// Evita recrear el objeto en cada render o cada llamada.
let aiClient: GoogleGenAI | null = null;
const getAIClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY ?? '' });
  }
  return aiClient;
};

// Schema de respuesta estructurada para Gemini
const RESPONSE_SCHEMA: Schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      heading: { type: Type.STRING },
      text:    { type: Type.STRING },
      color:   {
        type: Type.STRING,
        description: 'Tailwind border-color class (e.g. border-red-500)'
      }
    },
    required: ['heading', 'text']
  }
};

const buildPrompt = (
  method: MethodType,
  context: ContextType,
  situation: string
): string => `
Eres el 'Oráculo Chalamandra', consejero estratégico de alto impacto.
Tu voz es directa, callejera y profunda — mezcla de Chola, Malandra y Fresa.

METODOLOGÍA: ${method}
PERSONAJE:    ${context}
SITUACIÓN:    "${situation}"

Aplica la metodología paso a paso. Para cada paso entrega:
- heading: nombre del paso (conciso, con emoji si aplica)
- text:    análisis directo, pregunta de poder o insight accionable
- color:   clase Tailwind de borde que refleje el tono emocional del paso

Responde exclusivamente en JSON válido. Sin explicaciones extra.
`.trim();

export const useOracleAI = ({
  method,
  context,
  situation,
  enabled,
}: UseOracleAIParams): UseOracleAIResult => {
  const [questions, setQuestions] = useState<QuestionTemplate[] | null>(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Ref para cancelar el timer si el componente se desmonta
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer de elapsed time — solo corre mientras `loading` es true
  useEffect(() => {
    if (loading) {
      setElapsedTime(0);
      timerRef.current = setInterval(() => {
        setElapsedTime(t => parseFloat((t + 0.1).toFixed(1)));
      }, 100);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    // Cleanup al desmontar
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading]);

  // Función de llamada estabilizada con useCallback para evitar closures stale
  const fetchAIResponse = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      const client = getAIClient();
      const prompt = buildPrompt(method, context, situation);

      const response = await client.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: RESPONSE_SCHEMA,
        }
      });

      const jsonText = response.text;
      if (!jsonText) throw new Error('Respuesta vacía del modelo');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const parsed: any[] = JSON.parse(jsonText);

      const mapped: QuestionTemplate[] = parsed.map(item => ({
        heading:  item.heading ?? '—',
        template: item.text   ?? '',
        text:     item.text   ?? '',
        color:    item.color  ?? 'border-chala-magenta',
      }));

      setQuestions(mapped);

    } catch (err) {
      console.error('[useOracleAI]', err);
      setError('La conexión con el Oráculo AI falló. Intenta de nuevo o usa el Modo Clásico.');
    } finally {
      setLoading(false);
    }
  }, [method, context, situation, enabled]);

  // Trigger automático cuando se habilita el modo AI
  useEffect(() => {
    if (enabled && !questions) {
      fetchAIResponse();
    }
  }, [enabled, questions, fetchAIResponse]);

  return {
    questions,
    loading,
    error,
    elapsedTime,
    retry: fetchAIResponse,
  };
};
