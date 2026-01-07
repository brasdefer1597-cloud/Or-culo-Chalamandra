import React, { useMemo, useState, useEffect } from 'react';
import { FormData, QuestionTemplate } from '../types';
import { ORACLE_BANK } from '../utils/constants';
import { Button } from './Button';
import { Mail, RefreshCw, Copy, BrainCircuit, AlertTriangle, Download } from 'lucide-react';
import { GoogleGenAI, Type, Schema } from "@google/genai";
import LoadingSalamandra from './LoadingSalamandra';
import HistoryPanel from './HistoryPanel';
import WelcomeModal from './WelcomeModal';
import { saveInvocation, getHistory, HistoryEntry } from '../utils/history';
import { descargarDossierMagistral } from '../utils/exporter';

interface OracleResultProps {
  data: FormData;
  onReset: () => void;
}

export const OracleResult: React.FC<OracleResultProps> = ({ data, onReset }) => {
  const { method, context, situation, useAI } = data;
  const activeSituation = situation.trim() || context;

  const [aiQuestions, setAiQuestions] = useState<QuestionTemplate[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState("Sintetizando");
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const loadHistoryEntry = (entry: HistoryEntry) => {
      const mapped = Object.entries(entry.srap).map(([key, val]) => ({
          heading: key.toUpperCase(),
          template: val,
          text: val,
          color: 'border-chala-gold' // Use gold for history items
      }));
      setAiQuestions(mapped);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (useAI && !aiQuestions) {
      generateAIResponse();
    }
  }, [useAI, method, context, activeSituation]);

  const generateAIResponse = async () => {
    setLoading(true);
    setLoadingStage("Sintetizando la Neta");
    setError(null);

    // Simulate stages for effect (optional, or rely on real progress if available, which it isn't for single request)
    const stageTimer = setTimeout(() => setLoadingStage("Recomponiendo el Escenario"), 2000);
    const stageTimer2 = setTimeout(() => setLoadingStage("Analizando Puntos Ciegos"), 4500);
    const stageTimer3 = setTimeout(() => setLoadingStage("Proyectando Destino Magistral"), 7000);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const schema: Schema = {
        type: Type.OBJECT,
        properties: {
            sintetizar: { type: Type.STRING, description: "Phase 1: Synthesize the situation." },
            recomponer: { type: Type.STRING, description: "Phase 2: Recompose the perspective." },
            analizar: { type: Type.STRING, description: "Phase 3: Deep analysis using the selected method." },
            proyectar: { type: Type.STRING, description: "Phase 4: Projection and strategic steps." }
        },
        required: ["sintetizar", "recomponer", "analizar", "proyectar"]
      };

      const prompt = `
        Act as 'Oráculo Chalamandra', a strategic advisor (Magistral Level).
        Apply the SRAP framework (Sintetizar, Recomponer, Analizar, Proyectar) combined with the '${method}' methodology to this situation: "${activeSituation}".
        Context: ${context}.

        Tone: 'Chola-Fresa-Magistral' - urban aggression mixed with technical elegance.

        Output valid JSON.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-thinking-exp-1219',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: schema
        }
      });

      const jsonText = response.text;
      if (jsonText) {
        const parsed = JSON.parse(jsonText);

        // Save to History
        saveInvocation(method, context, activeSituation, parsed);
        setHistory(getHistory());

        // Map to QuestionTemplate format for display
        const mapped: QuestionTemplate[] = [
            { heading: "Sintetizar", text: parsed.sintetizar, color: "border-chala-magenta", template: parsed.sintetizar },
            { heading: "Recomponer", text: parsed.recomponer, color: "border-chala-blue", template: parsed.recomponer },
            { heading: "Analizar", text: parsed.analizar, color: "border-chala-green", template: parsed.analizar },
            { heading: "Proyectar", text: parsed.proyectar, color: "border-chala-gold", template: parsed.proyectar },
        ];
        setAiQuestions(mapped);
      } else {
        throw new Error("No response generated");
      }

    } catch (err) {
      console.error(err);
      setError("La conexión con el Oráculo AI falló. Intenta de nuevo.");
    } finally {
      clearTimeout(stageTimer);
      clearTimeout(stageTimer2);
      clearTimeout(stageTimer3);
      setLoading(false);
    }
  };

  const questions = useMemo(() => {
    if (useAI && aiQuestions) return aiQuestions;

    // Fallback or Classic Mode (if useAI is false, which theoretically shouldn't happen in Full App unless configured otherwise)
    const templates = ORACLE_BANK[method] || [];
    return templates.map(t => ({
      ...t,
      text: t.template.replace(/\[situacion\]/g, activeSituation)
    }));
  }, [method, activeSituation, useAI, aiQuestions]);

  const handleDownloadPDF = () => {
      // Reconstruct the srap object from questions for the PDF exporter
      const srapObj: Record<string, string> = {};
      questions.forEach(q => {
          srapObj[q.heading.toLowerCase()] = q.text || "";
      });
      descargarDossierMagistral(srapObj, activeSituation, method);
  };

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
      <div className="relative min-h-[400px] flex items-center justify-center">
         <LoadingSalamandra stage={loadingStage} />
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
    <div className="animate-slide-up w-full max-w-3xl mx-auto relative">
      <WelcomeModal />

      <div className="mb-8 text-center">
         <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-xs font-bold uppercase tracking-widest border-chala-gold text-chala-gold bg-chala-gold/10`}>
                <BrainCircuit className="w-3 h-3" />
                Modo Magistral (SRAP)
            </div>
         </div>
         <h2 className="text-3xl font-black text-white mb-2">Diagnóstico: {method}</h2>
         <p className="text-gray-400 italic">"{activeSituation}"</p>
      </div>

      <div className="grid gap-4 mb-8">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className={`bg-chala-darkgray p-6 rounded-lg border-l-4 shadow-lg hover:bg-black transition-colors duration-300 ${q.color || 'border-chala-green'}`}
          >
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 opacity-80 ${q.color?.replace('border-l', 'text').replace('border-', 'text-') || 'text-chala-green'}`}>
              {q.heading}
            </h3>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-100 whitespace-pre-wrap">
              {q.text || q.template}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-black/40 border border-gray-800 p-6 rounded-lg mb-8 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-chala-gold/5 group-hover:bg-chala-gold/10 transition-colors"></div>
        <p className="text-chala-gold text-sm font-mono mb-2 relative z-10">⚡ RITUAL SUGERIDO ⚡</p>
        <p className="text-gray-400 relative z-10">Respira profundo (SRAP). Lee en voz alta. Ejecuta la primera acción en 72 horas.</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
         <Button onClick={handleDownloadPDF} variant="primary" className="flex items-center justify-center gap-2 !bg-chala-gold !text-black hover:!bg-white">
            <Download className="w-4 h-4" /> DESCARGAR DOSSIER (PDF)
        </Button>
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

      <HistoryPanel history={history} onLoadEntry={loadHistoryEntry} />
    </div>
  );
};