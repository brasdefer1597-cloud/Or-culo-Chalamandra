import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children }) => (
  <label className="block text-sm font-bold text-chala-green mb-2 uppercase tracking-wide">
    {children}
  </label>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const Select: React.FC<SelectProps> = ({ label, children, ...props }) => (
  <div className="mb-6">
    <Label>{label}</Label>
    <div className="relative">
      <select 
        className="block w-full bg-chala-darkgray border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-chala-magenta transition-colors appearance-none"
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-chala-magenta">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  </div>
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => (
  <div className="mb-6">
    <Label>{label}</Label>
    <textarea 
      className="block w-full bg-chala-darkgray border border-gray-700 text-white py-3 px-4 rounded leading-tight focus:outline-none focus:bg-black focus:border-chala-magenta transition-colors min-h-[100px]"
      {...props}
    />
  </div>
);