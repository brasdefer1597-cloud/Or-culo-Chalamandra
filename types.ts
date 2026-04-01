// ─────────────────────────────────────────────────────────────────────────────
// TYPES — Oráculo Chalamandra
// Fuente única de verdad para todos los modelos de datos del sistema.
// ─────────────────────────────────────────────────────────────────────────────

export enum MethodType {
  SIX_HATS       = '6 Sombreros',
  FIVE_WHYS      = '5 Porqués',
  DISNEY         = 'Disney',
  COVEY          = 'Covey',
  OODA           = 'OODA Loop',
  SCAMPER        = 'SCAMPER',
  MIND_MAP       = 'Mind Mapping',
  DESIGN_THINKING = 'Design Thinking',
  SWOT           = 'SWOT / FODA',
  STORYTELLING   = 'Storytelling',
  ROLE_STORMING  = 'Role Storming',
}

export enum ContextType {
  CHOLA    = 'La Chola',
  FRESA    = 'La Fresa',
  MALANDRA = 'La Malandra',
}

/**
 * QuestionTemplate — Unidad mínima de pregunta/insight del Oráculo.
 *
 * - template: texto raw con placeholder [situacion]
 * - text:     texto procesado (placeholder reemplazado). Opcional: lo genera el runtime.
 * - color:    clase Tailwind de borde (e.g. "border-red-500")
 *             El texto del heading usa la misma paleta via `parseBorderToText()`.
 */
export interface QuestionTemplate {
  heading:  string;
  template: string;
  text?:    string;
  color?:   string;
}

export interface OracleData {
  [key: string]: QuestionTemplate[];
}

export interface FormData {
  method:   MethodType;
  context:  ContextType;
  situation: string;
  useAI:    boolean;
}
