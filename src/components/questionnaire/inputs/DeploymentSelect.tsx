import React from 'react';
import { HelpCircle } from 'lucide-react';
import { deploymentOptions } from '../../../utils/constants';

interface DeploymentSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function DeploymentSelect({ value, onChange }: DeploymentSelectProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <label className="block text-sm font-medium text-gray-700">
          Where will the application be deployed (production environment)?
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="group relative">
          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
          <div className="invisible group-hover:visible absolute left-full ml-2 w-64 p-2 bg-gray-800 text-white text-xs rounded-md">
            Choose the deployment platform that best suits your project's needs and scale
          </div>
        </div>
      </div>

      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select deployment platform</option>
        {Object.entries(deploymentOptions).map(([category, options]) => (
          <optgroup key={category} label={category}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}