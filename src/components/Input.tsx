import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-bold text-chala-green mb-2 uppercase tracking-wide">
    {children}
  </label>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const Select: React.FC<SelectProps> = ({ label, children, id, ...props }) => {
  const selectId = id || label.replace(/\s+/g, '-').toLowerCase();
  return (
    <div className="mb-6">
      <Label htmlFor={selectId}>{label}</Label>
      <div className="relative">
        <select
          id={selectId}
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
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  const textareaId = id || label.replace(/\s+/g, '-').toLowerCase();
  return (
    <div className="mb-6">
      <Label htmlFor={textareaId}>{label}</Label>
      <textarea
        id={textareaId}
        className="block w-full bg-chala-darkgray border border-gray-700 text-white py-3 px-4 rounded leading-tight focus:outline-none focus:bg-black focus:border-chala-magenta transition-colors min-h-[100px]"
        {...props}
      />
    </div>
  );
};
