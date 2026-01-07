import React from 'react';
import { BuyMeCoffee } from './BuyMeCoffee';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-gray-800 text-center">
      <div className="mb-6">
        <BuyMeCoffee />
      </div>
      <p className="text-gray-500 text-xs font-mono">
        Chalamandra Magistral © 2025 | DecoX Architecture
      </p>
      <p className="text-gray-700 text-[10px] mt-1 uppercase tracking-widest">
        SRAP Methodology: Resilience & Strategy
      </p>
    </footer>
  );
};