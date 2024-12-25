import React from 'react';
import { HelpCircle } from 'lucide-react';
import { timelineOptions } from '../../../utils/constants';

interface TimelineSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function TimelineSelect({ value, onChange }: TimelineSelectProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <label className="block text-sm font-medium text-gray-700">
          What is your expected timeline for the first release?
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="group relative">
          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
          <div className="invisible group-hover:visible absolute left-full ml-2 w-64 p-2 bg-gray-800 text-white text-xs rounded-md">
            Choose the timeframe that best matches your project goals
          </div>
        </div>
      </div>

      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select timeline</option>
        {timelineOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}