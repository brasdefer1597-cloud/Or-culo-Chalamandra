import { MethodType, ContextType, OracleData } from "./types";

export const APP_NAME = "Oráculo Chalamandra";
export const APP_TAGLINE = "Decodifica tu caos en 90 segundos.";

export const ORACLE_BANK: OracleData = {
  [MethodType.SIX_HATS]: [
    { heading: "⚪ Blanco (Hechos)", template: "¿Qué datos fríos y verificables tienes sobre [situacion]? Sin drama.", color: "border-gray-200 text-gray-200" },
    { heading: "🔴 Rojo (Emociones)", template: "¿Qué te dice la tripa ahora mismo sobre [situacion]? ¿Qué miedo te protege?", color: "border-red-500 text-red-400" },
    { heading: "⚫ Negro (Riesgos)", template: "En el peor escenario de [situacion], ¿qué se rompe y cómo lo pagas?", color: "border-gray-600 text-gray-400" },
    { heading: "🟡 Amarillo (Optimismo)", template: "¿Qué ventaja injusta o fortaleza ya tienes en [situacion]?", color: "border-yellow-400 text-yellow-400" },
    { heading: "🟢 Verde (Creatividad)", template: "Si no pudieras fallar, ¿qué 3 locuras harías con [situacion]?", color: "border-green-500 text-green-400" },
    { heading: "🔵 Azul (Proceso)", template: "¿Cuál es el siguiente paso físico (con fecha) para resolver [situacion]?", color: "border-blue-500 text-blue-400" }
  ],
  [MethodType.FIVE_WHYS]: [
    { heading: "Nivel 1", template: "¿Por qué está ocurriendo [situacion]?", color: "border-chala-magenta" },
    { heading: "Nivel 2", template: "¿Por qué ocurre la causa anterior? (Cava más hondo)", color: "border-chala-magenta" },
    { heading: "Nivel 3", template: "¿Por qué falló el sistema o el hábito ahí?", color: "border-chala-magenta" },
    { heading: "Nivel 4", template: "¿Qué creencia o emoción sostiene ese fallo?", color: "border-chala-magenta" },
    { heading: "Nivel 5", template: "¿Cuál es la Raíz Real y qué acción pequeña la corta hoy?", color: "border-chala-gold" }
  ],
  [MethodType.DISNEY]: [
    { heading: "Soñador 🌟", template: "Si [situacion] saliera perfecto, ¿qué verías, oirías y sentirías?", color: "border-purple-400" },
    { heading: "Realista 🛠️", template: "¿Qué recursos (tiempo/dinero/contactos) tienes YA para [situacion]?", color: "border-blue-400" },
    { heading: "Crítico ⚖️", template: "¿Qué es lo primero que va a fallar en [situacion] y cómo lo evitas?", color: "border-red-400" }
  ],
  [MethodType.COVEY]: [
    { heading: "Cuadrante 1 (Urgente/Importante)", template: "¿Qué parte de [situacion] va a explotar si no actúas en 24h?", color: "border-red-500" },
    { heading: "Cuadrante 2 (No Urgente/Importante)", template: "¿Qué acción importante para [situacion] estás posponiendo por 'estar ocupadx'?", color: "border-chala-green" },
    { heading: "Eliminar (Ruido)", template: "¿Qué ruido mental sobre [situacion] puedes ignorar hoy mismo?", color: "border-gray-500" }
  ],
  [MethodType.OODA]: [
    { heading: "Observe", template: "¿Qué señal nueva cambió en el mapa de [situacion]?", color: "border-blue-300" },
    { heading: "Orient", template: "¿Estás leyendo [situacion] con ojos de miedo o de estrategia?", color: "border-blue-500" },
    { heading: "Decide", template: "¿Qué decisión reversible puedes tomar YA?", color: "border-chala-gold" },
    { heading: "Act", template: "Ejecuta y define: ¿Qué señal te dirá si funcionó?", color: "border-chala-green" }
  ]
};

export const METHOD_DESCRIPTIONS: Record<MethodType, string> = {
  [MethodType.SIX_HATS]: "Perspectiva Total (Deconstrucción)",
  [MethodType.FIVE_WHYS]: "Raíz del Problema (Profundidad)",
  [MethodType.DISNEY]: "Soñador / Realista / Crítico (Diseño)",
  [MethodType.COVEY]: "Priorización (Gestión de Energía)",
  [MethodType.OODA]: "Reacción Rápida (Combate/Crisis)"
};