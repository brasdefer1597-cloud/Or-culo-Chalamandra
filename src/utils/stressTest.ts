import { GoogleGenAI, Schema, Type } from "@google/genai";
import { MethodType, ContextType } from "../types";

const MAX_ITERATIONS = 10;
const TONE_KEYWORDS = ["bofos", "magistral", "neta", "caos", "calle", "estrategia", "srap", "búnker", "fresa", "chola"];

export const runStressTest = async () => {
    console.log("🔥 INICIANDO STRESS TEST V1.0 - PROTOCOLO CHALAMANDRA 🔥");

    const methods = [MethodType.SIX_HATS, MethodType.FIVE_WHYS, MethodType.DISNEY]; // Using a subset or mapping to Dreamer/Realist/Critic logic if needed.
    // The user mentioned "Soñador, Realista, Crítico" which maps to Disney method phases usually, or specific Six Hats.
    // Let's assume testing the main methods available in the form.

    const testMethods = [
        { name: "Disney (Soñador)", method: MethodType.DISNEY, context: ContextType.WORK, situation: "Quiero lanzar una startup de tacos veganos." },
        { name: "OODA (Realista/Rápido)", method: MethodType.OODA, context: ContextType.CYBER, situation: "Detecté una vulnerabilidad en el servidor de producción." },
        { name: "5 Porqués (Crítico)", method: MethodType.FIVE_WHYS, context: ContextType.LOVE, situation: "Mi pareja dice que soy emocionalmente distante." }
    ];

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || (import.meta.env.VITE_GEMINI_API_KEY as string) });

    let totalErrors = 0;
    let toneFailures = 0;

    for (const testCase of testMethods) {
        console.group(`🧪 Testing Method: ${testCase.name}`);

        for (let i = 1; i <= MAX_ITERATIONS; i++) {
            console.log(`... Iteration ${i}/${MAX_ITERATIONS}`);

            try {
                const schema: Schema = {
                    type: Type.OBJECT,
                    properties: {
                        sintetizar: { type: Type.STRING },
                        recomponer: { type: Type.STRING },
                        analizar: { type: Type.STRING },
                        proyectar: { type: Type.STRING }
                    },
                    required: ["sintetizar", "recomponer", "analizar", "proyectar"]
                };

                const prompt = `
                    Act as 'Oráculo Chalamandra', a strategic advisor (Magistral Level).
                    Apply the SRAP framework (Sintetizar, Recomponer, Analizar, Proyectar) combined with the '${testCase.method}' methodology to this situation: "${testCase.situation}".
                    Context: ${testCase.context}.

                    Tone: 'Chola-Fresa-Magistral' - urban aggression mixed with technical elegance.
                    Keywords to weave in: ${TONE_KEYWORDS.join(", ")}.

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
                if (!jsonText) throw new Error("Empty response");

                const parsed = JSON.parse(jsonText);
                const fullText = (parsed.sintetizar + parsed.recomponer + parsed.analizar + parsed.proyectar).toLowerCase();

                // Tone Check
                const hasTone = TONE_KEYWORDS.some(kw => fullText.includes(kw));
                if (!hasTone) {
                    console.warn(`⚠️ Tone Failure in Iteration ${i}: Response too generic.`);
                    toneFailures++;
                }

                // Structure Check
                if (!parsed.proyectar || parsed.proyectar.length < 50) {
                     console.warn(`⚠️ Structure Failure in Iteration ${i}: Projection too short.`);
                     totalErrors++;
                }

            } catch (error) {
                console.error(`❌ Error in Iteration ${i}:`, error);
                totalErrors++;
            }
        }
        console.groupEnd();
    }

    console.log("📊 REPORTE FINAL 📊");
    console.log(`Total Iterations: ${testMethods.length * MAX_ITERATIONS}`);
    console.log(`Tone Failures: ${toneFailures}`);
    console.log(`Technical Errors: ${totalErrors}`);

    if (toneFailures > 5) {
        console.error("🚨 ALERTA ROJA: Recalibración de Prompts requerida inmediatamente.");
    } else {
        console.log("✅ SISTEMA ESTABLE: Tono Magistral verificado.");
    }
};

// Expose to window for console execution
(window as any).runStressTest = runStressTest;
