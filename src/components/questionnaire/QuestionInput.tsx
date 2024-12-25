import React from 'react';
import { HelpCircle } from 'lucide-react';
import { QuestionProps } from './types';

export function QuestionInput({ question, value, onChange, className = '' }: QuestionProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-start gap-2">
        <label className="block text-sm font-medium text-gray-700">
          {question.question}
          {question.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {question.helpText && (
          <div className="group relative">
            <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
            <div className="invisible group-hover:visible absolute left-full ml-2 w-64 p-2 bg-gray-800 text-white text-sm rounded-md">
              {question.helpText}
            </div>
          </div>
        )}
      </div>
      
      {question.type === 'textarea' && (
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={value as string || ''}
          onChange={e => onChange(e.target.value)}
          rows={3}
          placeholder={question.placeholder}
        />
      )}
      
      {question.type === 'text' && (
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={value as string || ''}
          onChange={e => onChange(e.target.value)}
          placeholder={question.placeholder}
        />
      )}
      
      {question.type === 'select' && (
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={value as string || ''}
          onChange={e => onChange(e.target.value)}
        >
          <option value="">Select an option</option>
          {question.options?.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )}
      
      {question.type === 'multiselect' && (
        <div className="mt-1 space-y-2">
          {question.options?.map(opt => (
            <label key={opt} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={(value as string[] || []).includes(opt)}
                onChange={e => {
                  const current = value as string[] || [];
                  if (e.target.checked) {
                    onChange([...current, opt]);
                  } else {
                    onChange(current.filter(x => x !== opt));
                  }
                }}
              />
              <span className="ml-2">{opt}</span>
            </label>
          ))}
        </div>
      )}
      
      {question.example && (
        <p className="mt-1 text-sm text-gray-500">Example: {question.example}</p>
      )}
    </div>
  );
}