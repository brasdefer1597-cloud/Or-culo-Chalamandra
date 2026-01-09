import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-chala-black/80 border-b border-chala-magenta/30">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-chala-magenta w-6 h-6 animate-pulse-slow" />
          <h1 className="text-xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-chala-magenta via-white to-chala-gold">
            Oráculo Chalamandra
          </h1>
        </div>
        <div className="text-xs font-mono text-chala-green hidden sm:block">
          // SYS: ONLINE //
        </div>
      </div>
    </header>
  );
};