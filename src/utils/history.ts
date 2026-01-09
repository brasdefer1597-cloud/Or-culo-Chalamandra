import { QuestionTemplate } from "../types";

const HISTORY_KEY = 'chalamandra_history';

export interface HistoryEntry {
    id: number;
    fecha: string;
    metodo: string;
    terreno: string;
    situacion: string;
    srap: Record<string, string>; // Store the analyzed text content
}

export const saveInvocation = (metodo: string, terreno: string, situacion: string, respuestaSRAP: Record<string, string>) => {
    const historyJSON = localStorage.getItem(HISTORY_KEY);
    const history: HistoryEntry[] = historyJSON ? JSON.parse(historyJSON) : [];

    const newEntry: HistoryEntry = {
        id: Date.now(),
        fecha: new Date().toLocaleString(),
        metodo, // Soñador, Realista, Crítico
        terreno,
        situacion,
        srap: respuestaSRAP // El objeto con S, R, A, P
    };

    history.unshift(newEntry); // El más reciente primero
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 20))); // Límite de 20 para ligereza
};

export const getHistory = (): HistoryEntry[] => {
    const historyJSON = localStorage.getItem(HISTORY_KEY);
    return historyJSON ? JSON.parse(historyJSON) : [];
};
