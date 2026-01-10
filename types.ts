export enum MethodType {
  SIX_HATS = "6 Sombreros",
  FIVE_WHYS = "5 Porqués",
  DISNEY = "Disney",
  COVEY = "Covey",
  OODA = "OODA Loop"
}

export enum ContextType {
  WORK = "Decisión Laboral",
  LOVE = "Relación de Pareja",
  PARENTING = "Parentalidad / Crianza",
  CYBER = "Riesgo Digital / Ciberseguridad",
  FREELANCE = "Cliente Freelancer"
}

export interface QuestionTemplate {
  heading: string;
  template: string;
  text?: string;
  icon?: string;
  color?: string;
}

export interface OracleData {
  [key: string]: QuestionTemplate[];
}

export interface FormData {
  method: MethodType;
  context: ContextType;
  situation: string;
  useAI: boolean;
}