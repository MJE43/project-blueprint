import React from 'react';
import { HelpCircle } from 'lucide-react';

interface AudienceInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function AudienceInput({ value, onChange }: AudienceInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <label className="block text-sm font-medium text-gray-700">
          Who is your target audience?
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="group relative">
          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
          <div className="invisible group-hover:visible absolute left-full ml-2 w-64 p-2 bg-gray-800 text-white text-xs rounded-md">
            Describe your primary users, including their technical expertise, age range, and specific needs
          </div>
        </div>
      </div>

      <textarea
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder="e.g., Fashion-conscious young adults aged 18-25 interested in sustainable clothing"
      />
    </div>
  );
}