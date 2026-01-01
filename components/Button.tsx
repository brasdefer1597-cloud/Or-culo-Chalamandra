import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyle = "font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-chala-black disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-chala-magenta hover:bg-pink-700 text-white shadow-[0_0_15px_rgba(213,0,108,0.4)] focus:ring-chala-magenta",
    secondary: "bg-chala-green hover:bg-green-700 text-white shadow-[0_0_15px_rgba(0,142,74,0.4)] focus:ring-chala-green",
    outline: "bg-transparent border-2 border-chala-gold text-chala-gold hover:bg-chala-gold hover:text-black shadow-[0_0_10px_rgba(255,179,0,0.2)] focus:ring-chala-gold"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};