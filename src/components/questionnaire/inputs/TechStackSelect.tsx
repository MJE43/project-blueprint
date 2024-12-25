import React from 'react';
import { HelpCircle } from 'lucide-react';
import { techStackOptions } from '../../../utils/constants';

interface TechStackSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function TechStackSelect({ value, onChange }: TechStackSelectProps) {
  const [otherTech, setOtherTech] = React.useState('');

  const handleOtherTechAdd = () => {
    if (otherTech.trim()) {
      onChange([...value, otherTech.trim()]);
      setOtherTech('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <label className="block text-sm font-medium text-gray-700">
          Technology Preferences
        </label>
        <div className="group relative">
          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
          <div className="invisible group-hover:visible absolute left-full ml-2 w-64 p-2 bg-gray-800 text-white text-xs rounded-md">
            Select the technologies you prefer to use in your project
          </div>
        </div>
      </div>

      {Object.entries(techStackOptions).map(([category, technologies]) => (
        <div key={category} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">{category}</h4>
          <div className="grid grid-cols-2 gap-2">
            {technologies.map((tech) => (
              <label key={tech.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={value.includes(tech.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onChange([...value, tech.value]);
                    } else {
                      onChange(value.filter((v) => v !== tech.value));
                    }
                  }}
                />
                <span className="text-sm text-gray-700">{tech.label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Add other technology..."
          value={otherTech}
          onChange={(e) => setOtherTech(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleOtherTechAdd()}
        />
        <button
          type="button"
          onClick={handleOtherTechAdd}
          className="px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </div>
    </div>
  );
}