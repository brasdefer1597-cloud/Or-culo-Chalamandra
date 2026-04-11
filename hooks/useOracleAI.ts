/**
 * useOracleAI — Custom hook que encapsula toda la lógica de Gemini AI.
 *
 * Analogía: este hook es el "Hitman silencioso" del sistema.
 * Entra, ejecuta la llamada API, sale limpio y devuelve el resultado.
 * El componente que lo usa no necesita saber nada del protocolo interno.
 *
 * Separación de responsabilidades:
 *   - Componente → UI y estado visual
 *   - Este hook   → llamada al proxy, validación de respuesta, timing
 *
 * Seguridad:
 *   - La API key y la construcción del prompt ocurren EXCLUSIVAMENTE en el servidor
 *   - El cliente solo envía { method, context, situation } — inputs de dominio
 *   - Zod valida la respuesta del servidor antes de usarla en la UI
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { z } from 'zod';
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

// ─── Zod schema — valida en runtime la respuesta de Gemini ──────────────────
const QuestionSchema = z.object({
  heading: z.string().min(1),
  text: z.string().min(1),
  color: z.string().optional(),
});

const ResponseSchema = z.array(QuestionSchema).min(1);

// ─── Llamada al proxy server-side ─────────────────────────────────────────────
// El servidor construye y sanitiza el prompt. El cliente solo envía inputs de dominio.
const callOracleProxy = async (
  method: MethodType,
  context: ContextType,
  situation: string,
): Promise<string> => {
  const response = await fetch('/api/oracle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ method, context, situation }),
  });

  if (!response.ok) {
    const errBody = await response.json().catch(() => ({ error: response.statusText })) as { error?: string };
    throw new Error(errBody.error ?? `Error ${response.status}`);
  }

  const data = await response.json() as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Respuesta vacía del modelo');
  return text;
};

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

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer de elapsed time — FIX: reducido de 100ms → 500ms (−80% re-renders durante carga)
  useEffect(() => {
    if (loading) {
      setElapsedTime(0);
      timerRef.current = setInterval(() => {
        setElapsedTime(t => parseFloat((t + 0.5).toFixed(1)));
      }, 500);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading]);

  const fetchAIResponse = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      // Envía inputs de dominio al proxy; el servidor construye el prompt
      const jsonText = await callOracleProxy(method, context, situation);

      // Validación en runtime con Zod — reemplaza `any[]`
      const rawParsed = JSON.parse(jsonText);
      const parsed    = ResponseSchema.parse(rawParsed);

      const mapped: QuestionTemplate[] = parsed.map(item => ({
        heading:  item.heading,
        template: item.text,
        text:     item.text,
        color:    item.color ?? 'border-chala-magenta',
      }));

      setQuestions(mapped);

    } catch (err) {
      console.error('[useOracleAI]', err);
      if (err instanceof z.ZodError) {
        setError('El Oráculo devolvió datos inesperados. Intenta de nuevo.');
      } else {
        setError('La conexión con el Oráculo AI falló. Intenta de nuevo o usa el Modo Clásico.');
      }
    } finally {
      setLoading(false);
    }
  }, [method, context, situation, enabled]);

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
