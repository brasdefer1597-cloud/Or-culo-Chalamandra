import { MethodType, ContextType, OracleData } from "./types";

export const APP_NAME = "Oráculo Chalamandra";
export const APP_TAGLINE = "Decodifica tu caos en 90 segundos.";

export const ORACLE_BANK: OracleData = {
  // ─── MÉTODOS CLÁSICOS ────────────────────────────────────────────────────────
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
  ],

  // ─── SCAMPER ─────────────────────────────────────────────────────────────────
  [`${MethodType.SCAMPER}_${ContextType.CHOLA}`]: [
    { heading: "🔄 Sustituir", template: "¿Qué puedes cambiar en tu hustle pa' que [situacion] fluya mejor?", color: "border-green-500" },
    { heading: "🔗 Combinar", template: "¿Qué elementos callejeros puedes unir pa' crear algo único en [situacion]?", color: "border-green-400" },
    { heading: "🎯 Adaptar", template: "¿Qué aprendizajes de otras esquinas te sirven pa' resolver [situacion]?", color: "border-emerald-500" },
    { heading: "✏️ Modificar", template: "¿Qué detalles puedes mejorar en [situacion] pa' que nada te tumbe?", color: "border-emerald-400" },
    { heading: "♻️ Poner en otro uso", template: "¿Qué recurso oculto puedes aprovechar pa' darle vuelta a [situacion]?", color: "border-teal-500" },
    { heading: "✂️ Eliminar", template: "¿Qué le quitas a [situacion] pa' simplificar y avanzar más rápido?", color: "border-teal-400" },
    { heading: "🔀 Reordenar", template: "¿Qué mueves en [situacion] pa' crear flow y eficiencia real?", color: "border-green-600" }
  ],
  [`${MethodType.SCAMPER}_${ContextType.FRESA}`]: [
    { heading: "🔄 Sustituir", template: "¿Qué cambia tu vibe en [situacion] pa' brillar más?", color: "border-pink-400" },
    { heading: "🔗 Combinar", template: "¿Qué ideas glam puedes juntar en [situacion] pa' un impacto top?", color: "border-rose-400" },
    { heading: "🎯 Adaptar", template: "¿Qué experiencias pasadas puedes reutilizar con estilo en [situacion]?", color: "border-pink-500" },
    { heading: "✏️ Modificar", template: "¿Qué ajustes elevan tu shine en [situacion]?", color: "border-rose-300" },
    { heading: "♻️ Poner en otro uso", template: "¿Qué cosas elegantes puedes reusar pa' resolver [situacion]?", color: "border-fuchsia-400" },
    { heading: "✂️ Eliminar", template: "¿Qué le quitas a [situacion] pa' que tu plan quede chic y claro?", color: "border-pink-300" },
    { heading: "🔀 Reordenar", template: "¿Qué reorganizas en [situacion] pa' mantener tu flow elegante?", color: "border-rose-500" }
  ],
  [`${MethodType.SCAMPER}_${ContextType.MALANDRA}`]: [
    { heading: "🔄 Sustituir", template: "¿Qué tácticas reemplazas en [situacion] pa' ganar ventaja?", color: "border-chala-magenta" },
    { heading: "🔗 Combinar", template: "¿Qué movimientos disruptivos puedes unir pa' dominar [situacion]?", color: "border-purple-500" },
    { heading: "🎯 Adaptar", template: "¿Qué aprendizajes del chaos street te sirven pa' hackear [situacion]?", color: "border-violet-500" },
    { heading: "✏️ Modificar", template: "¿Qué cambias en [situacion] pa' hackear el sistema a tu favor?", color: "border-purple-400" },
    { heading: "♻️ Poner en otro uso", template: "¿Qué recursos no usados puedes aprovechar en [situacion]?", color: "border-violet-400" },
    { heading: "✂️ Eliminar", template: "¿Qué bloqueos le quitas a [situacion] pa' moverte rápido?", color: "border-chala-magenta" },
    { heading: "🔀 Reordenar", template: "¿Qué reorganizas en [situacion] pa' dominar el game?", color: "border-purple-600" }
  ],

  // ─── MIND MAPPING ────────────────────────────────────────────────────────────
  [`${MethodType.MIND_MAP}_${ContextType.CHOLA}`]: [
    { heading: "🗺️ Retos Urgentes", template: "¿Cuáles son tus retos callejeros más urgentes en [situacion]?", color: "border-green-500" },
    { heading: "⚡ Soluciones Rápidas", template: "¿Qué soluciones rápidas puedes mapear ahora mismo pa' [situacion]?", color: "border-emerald-500" },
    { heading: "🤝 Conexiones Clave", template: "¿Qué conexiones te dan ventaja en la esquina pa' resolver [situacion]?", color: "border-teal-500" }
  ],
  [`${MethodType.MIND_MAP}_${ContextType.FRESA}`]: [
    { heading: "💡 Ideas Brillantes", template: "¿Qué ideas brillantes sostienen tu shine en [situacion]?", color: "border-pink-400" },
    { heading: "👑 Pasos Glam", template: "¿Qué pasos glam necesitas para cada meta dentro de [situacion]?", color: "border-rose-400" },
    { heading: "✨ Flow de Estilo", template: "¿Cómo conectar tu flow en [situacion] pa' mantener tu estilo top?", color: "border-fuchsia-400" }
  ],
  [`${MethodType.MIND_MAP}_${ContextType.MALANDRA}`]: [
    { heading: "♟️ Movimientos Estratégicos", template: "¿Qué movimientos estratégicos controlan tu entorno en [situacion]?", color: "border-chala-magenta" },
    { heading: "🎯 Oportunidades Ocultas", template: "¿Qué oportunidades ocultas puedes mapear en [situacion]?", color: "border-purple-500" },
    { heading: "⚔️ Tácticas Disruptivas", template: "¿Cómo conectar tácticas disruptivas en [situacion] pa' dominar el game?", color: "border-violet-500" }
  ],

  // ─── DESIGN THINKING ─────────────────────────────────────────────────────────
  [`${MethodType.DESIGN_THINKING}_${ContextType.CHOLA}`]: [
    { heading: "👁️ Empatiza", template: "¿Qué siente la calle frente a [situacion]?", color: "border-green-400" },
    { heading: "🎯 Define", template: "¿Cuál es el problema real que debes enfrentar en [situacion]?", color: "border-green-500" },
    { heading: "💥 Idear", template: "¿Qué soluciones callejeras se te ocurren pa' resolver [situacion]?", color: "border-emerald-500" },
    { heading: "🛠️ Prototipar", template: "¿Cómo pruebas rápido tu plan en la esquina pa' [situacion]?", color: "border-teal-500" },
    { heading: "✅ Testear", template: "¿Qué ajustes necesitas pa' que [situacion] funcione en la vida real?", color: "border-emerald-400" }
  ],
  [`${MethodType.DESIGN_THINKING}_${ContextType.FRESA}`]: [
    { heading: "💖 Empatiza", template: "¿Qué necesitan tu shine y tu público glam en [situacion]?", color: "border-pink-300" },
    { heading: "🌟 Define", template: "¿Cuál es la oportunidad pa' brillar más en [situacion]?", color: "border-pink-400" },
    { heading: "✨ Idear", template: "¿Qué ideas top puedes generar pa' [situacion]?", color: "border-rose-400" },
    { heading: "💅 Prototipar", template: "¿Cómo mostrar tu shine en [situacion] sin arriesgarlo?", color: "border-fuchsia-400" },
    { heading: "👑 Testear", template: "¿Qué funciona mejor pa' mantener tu flow elegante en [situacion]?", color: "border-rose-300" }
  ],
  [`${MethodType.DESIGN_THINKING}_${ContextType.MALANDRA}`]: [
    { heading: "🔍 Empatiza", template: "¿Cómo hackear [situacion] sin perder control?", color: "border-purple-400" },
    { heading: "⚡ Define", template: "¿Cuál es tu ventaja real en el game de [situacion]?", color: "border-chala-magenta" },
    { heading: "🎲 Idear", template: "¿Qué movimientos disruptivos se te ocurren pa' [situacion]?", color: "border-violet-500" },
    { heading: "🧪 Prototipar", template: "¿Cómo pruebas en [situacion] sin exponerte?", color: "border-purple-500" },
    { heading: "🏆 Testear", template: "¿Qué tácticas dominan el escenario de [situacion]?", color: "border-violet-400" }
  ],

  // ─── SWOT / FODA ─────────────────────────────────────────────────────────────
  [`${MethodType.SWOT}_${ContextType.CHOLA}`]: [
    { heading: "💪 Fortalezas", template: "¿Qué te hace fuerte en la calle pa' enfrentar [situacion]?", color: "border-green-500" },
    { heading: "🚀 Oportunidades", template: "¿Qué chances puedes aprovechar en [situacion]?", color: "border-emerald-500" },
    { heading: "⚠️ Debilidades", template: "¿Qué te frena en [situacion] y cómo lo superas?", color: "border-yellow-500" },
    { heading: "🛡️ Amenazas", template: "¿Qué puede tumbarte en [situacion] y cómo lo esquivas?", color: "border-red-500" }
  ],
  [`${MethodType.SWOT}_${ContextType.FRESA}`]: [
    { heading: "💎 Fortalezas", template: "¿Qué te hace brillar y destacar en [situacion]?", color: "border-pink-400" },
    { heading: "✨ Oportunidades", template: "¿Qué oportunidades glam puedes tomar en [situacion]?", color: "border-rose-400" },
    { heading: "🌸 Debilidades", template: "¿Qué fricciones hay en [situacion] y cómo las pules?", color: "border-yellow-400" },
    { heading: "⚡ Amenazas", template: "¿Qué riesgos afectan tu shine en [situacion] y cómo los evitas?", color: "border-red-400" }
  ],
  [`${MethodType.SWOT}_${ContextType.MALANDRA}`]: [
    { heading: "⚔️ Fortalezas", template: "¿Qué power tienes pa' controlar el game de [situacion]?", color: "border-chala-magenta" },
    { heading: "🎯 Oportunidades", template: "¿Qué huecos puedes explotar en [situacion]?", color: "border-violet-500" },
    { heading: "🔧 Debilidades", template: "¿Qué bloqueos conviertes en ventaja en [situacion]?", color: "border-yellow-500" },
    { heading: "🕵️ Amenazas", template: "¿Qué riesgos hackeas en [situacion] pa' mantener control?", color: "border-red-500" }
  ],

  // ─── STORYTELLING ────────────────────────────────────────────────────────────
  [`${MethodType.STORYTELLING}_${ContextType.CHOLA}`]: [
    { heading: "🌅 Inicio", template: "¿Cómo empieza tu hustle callejero en [situacion]?", color: "border-green-400" },
    { heading: "⚡ Conflicto", template: "¿Qué obstáculos te golpean en [situacion]?", color: "border-yellow-500" },
    { heading: "🔥 Clímax", template: "¿Cómo reaccionas en [situacion] y conviertes caídas en fuerza?", color: "border-red-500" },
    { heading: "🏆 Resolución", template: "¿Qué aprendiste en [situacion] y cómo sigues de pie?", color: "border-emerald-500" }
  ],
  [`${MethodType.STORYTELLING}_${ContextType.FRESA}`]: [
    { heading: "💫 Inicio", template: "¿Cuál es tu presentación glam en [situacion]?", color: "border-pink-300" },
    { heading: "🌪️ Conflicto", template: "¿Qué fricciones amenazan tu shine en [situacion]?", color: "border-yellow-400" },
    { heading: "✨ Clímax", template: "¿Cómo resplandeces en el momento top de [situacion]?", color: "border-rose-400" },
    { heading: "👑 Resolución", template: "¿Qué enseñanzas de [situacion] elevan tu flow elegante?", color: "border-fuchsia-400" }
  ],
  [`${MethodType.STORYTELLING}_${ContextType.MALANDRA}`]: [
    { heading: "🎭 Inicio", template: "¿Cómo entras al juego callejero de [situacion]?", color: "border-purple-400" },
    { heading: "💥 Conflicto", template: "¿Qué caos debes hackear en [situacion]?", color: "border-yellow-500" },
    { heading: "⚡ Clímax", template: "¿Qué tácticas disruptivas activas pa' ganar en [situacion]?", color: "border-chala-magenta" },
    { heading: "🏴 Resolución", template: "¿Cómo sales dominando el game de [situacion]?", color: "border-violet-500" }
  ],

  // ─── ROLE STORMING ────────────────────────────────────────────────────────────
  [`${MethodType.ROLE_STORMING}_${ContextType.CHOLA}`]: [
    { heading: "🦁 El Sobreviviente", template: "¿Qué haría un sobreviviente callejero pa' resolver [situacion]?", color: "border-green-500" },
    { heading: "⚡ Pasos Sin Caer", template: "¿Qué pasos rápidos tomarías en [situacion] pa' no caer?", color: "border-emerald-500" },
    { heading: "📖 Lección de Esquina", template: "¿Qué lecciones de otros en la esquina aplican a [situacion]?", color: "border-teal-500" }
  ],
  [`${MethodType.ROLE_STORMING}_${ContextType.FRESA}`]: [
    { heading: "📸 El Influencer Glam", template: "¿Qué haría un influencer glam pa' resolver [situacion]?", color: "border-pink-400" },
    { heading: "💅 Shine Intacto", template: "¿Qué movimientos mantendrían tu shine intacto en [situacion]?", color: "border-rose-400" },
    { heading: "🌟 Oportunidad de Estilo", template: "¿Qué oportunidades de estilo puedes detectar en [situacion]?", color: "border-fuchsia-400" }
  ],
  [`${MethodType.ROLE_STORMING}_${ContextType.MALANDRA}`]: [
    { heading: "🧠 El Mastermind", template: "¿Qué haría un mastermind del game en [situacion]?", color: "border-chala-magenta" },
    { heading: "🎯 Riesgos y Exploits", template: "¿Qué riesgos evitarías y qué explotarías en [situacion]?", color: "border-purple-500" },
    { heading: "♟️ Control Total", template: "¿Qué pasos estratégicos consolidan tu control sobre [situacion]?", color: "border-violet-500" }
  ]
};

export const METHOD_DESCRIPTIONS: Record<MethodType, string> = {
  [MethodType.SIX_HATS]: "6 Sombreros – Perspectiva Total",
  [MethodType.FIVE_WHYS]: "5 Porqués – Raíz del Problema",
  [MethodType.DISNEY]: "Disney – Soñador / Realista / Crítico",
  [MethodType.COVEY]: "Covey – Priorización de Energía",
  [MethodType.OODA]: "OODA Loop – Reacción Rápida",
  [MethodType.SCAMPER]: "SCAMPER – Hackea tu Hustle",
  [MethodType.MIND_MAP]: "Mind Mapping – Conecta tu Hustle",
  [MethodType.DESIGN_THINKING]: "Design Thinking – Resuelve Street-Smart",
  [MethodType.SWOT]: "SWOT / FODA – Analiza tu Hustle",
  [MethodType.STORYTELLING]: "Storytelling – Cuenta tu Historia",
  [MethodType.ROLE_STORMING]: "Role Storming – Métete en Personajes"
};

export const METHOD_IMAGES: Partial<Record<MethodType, string>> = {
  [MethodType.FIVE_WHYS]: '/method-5whys.png',
  [MethodType.DISNEY]: '/method-disney.png',
};

export const PERSONA_DESCRIPTIONS: Record<string, string> = {
  [ContextType.CHOLA as string]: "Fuerza callejera, resiliencia y hustle real.",
  [ContextType.FRESA as string]: "Estilo, brillo y elegancia estratégica.",
  [ContextType.MALANDRA as string]: "Táctica disruptiva, control y dominio del game."
};
