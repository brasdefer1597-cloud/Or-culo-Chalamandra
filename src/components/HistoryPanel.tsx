import React from 'react';
import { descargarDossierMagistral } from '../utils/exporter';
import { HistoryEntry } from '../utils/history';

interface HistoryPanelProps {
    history: HistoryEntry[];
    onLoadEntry: (entry: HistoryEntry) => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ history, onLoadEntry }) => {
  if (history.length === 0) return null;

  return (
    <div className="mt-12 p-6 bg-chala-blue/10 border-t border-chala-gold/30 rounded-xl backdrop-blur-sm animate-fade-in">
      <h3 className="text-chala-gold font-black uppercase tracking-tighter mb-6">
        📜 Archivo de Invocaciones Pasadas
      </h3>
      <div className="grid gap-4">
        {history.map((item) => (
          <div key={item.id} className="bg-black/40 p-4 rounded-xl border border-white/10 flex justify-between items-center group hover:border-chala-magenta transition-all">
            <div className="overflow-hidden mr-4">
              <p className="text-chala-green text-xs font-bold uppercase truncate">{item.metodo} | {item.fecha}</p>
              <p className="text-white/80 text-sm line-clamp-1 italic">"{item.situacion}"</p>
            </div>
            <div className="flex space-x-2 shrink-0">
              <button
                onClick={() => onLoadEntry(item)}
                className="p-2 text-white hover:text-chala-gold hover:bg-white/10 rounded-full transition-colors"
                title="Releer"
              >
                👁️
              </button>
              <button
                onClick={() => descargarDossierMagistral(item.srap, item.situacion, item.metodo)}
                className="p-2 text-white hover:text-chala-magenta hover:bg-white/10 rounded-full transition-colors"
                title="Descargar Dossier"
              >
                📥
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;
