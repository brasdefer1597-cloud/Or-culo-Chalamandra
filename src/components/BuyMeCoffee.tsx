import React from 'react';
import { Coffee } from 'lucide-react';
import { BUY_ME_COFFEE_URL } from '../utils/constants';

export const BuyMeCoffee: React.FC = () => {
  return (
    <a
      href={BUY_ME_COFFEE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-[#FFDD00] text-black font-bold rounded-lg hover:bg-[#FFEA00] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
    >
      <Coffee size={20} className="stroke-2" />
      <span>Invítame un café</span>
    </a>
  );
};
