import React from 'react';
import { Coffee } from 'lucide-react';
import { BUY_ME_COFFEE_URL } from '../utils/constants';

export const BuyMeCoffee: React.FC = () => {
  return (
    <a
      href={BUY_ME_COFFEE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-chala-gold text-chala-black font-black text-lg rounded-lg hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
    >
      <Coffee size={24} className="stroke-3" />
      <span>DESBLOQUEAR ORÁCULO</span>
    </a>
  );
};
