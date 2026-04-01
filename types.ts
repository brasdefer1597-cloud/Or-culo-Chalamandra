export enum MethodType {
  SIX_HATS = "6 Sombreros",
  FIVE_WHYS = "5 Porqués",
  DISNEY = "Disney",
  COVEY = "Covey",
  OODA = "OODA Loop",
  SCAMPER = "SCAMPER",
  MIND_MAP = "Mind Mapping",
  DESIGN_THINKING = "Design Thinking",
  SWOT = "SWOT / FODA",
  STORYTELLING = "Storytelling",
  ROLE_STORMING = "Role Storming"
}

export enum ContextType {
  CHOLA = "La Chola",
  FRESA = "La Fresa",
  MALANDRA = "La Malandra"
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
