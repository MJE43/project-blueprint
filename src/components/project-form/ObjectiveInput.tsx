import React, { useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';

interface ObjectiveInputProps {
  objectives: string[];
  onChange: (objectives: string[]) => void;
}

export function ObjectiveInput({ objectives, onChange }: ObjectiveInputProps) {
  const lastInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (lastInputRef.current) {
      lastInputRef.current.focus();
    }
  }, [objectives.length]);

  const handleObjectiveChange = (index: number, value: string) => {
    const newObjectives = [...objectives];
    newObjectives[index] = value;
    onChange(newObjectives);
  };

  const addObjective = () => {
    onChange([...objectives, '']);
  };

  const removeObjective = (index: number) => {
    onChange(objectives.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Project Objectives
        <span className="text-red-500 ml-1">*</span>
      </label>
      
      {objectives.map((objective, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            ref={index === objectives.length - 1 ? lastInputRef : null}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={objective}
            onChange={(e) => handleObjectiveChange(index, e.target.value)}
            placeholder="e.g., Increase development speed by 30%"
          />
          {objectives.length > 1 && (
            <button
              type="button"
              onClick={() => removeObjective(index)}
              className="p-2 text-gray-400 hover:text-red-500"
            >
              ×
            </button>
          )}
        </div>
      ))}
      
      <button
        type="button"
        onClick={addObjective}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Objective
      </button>
    </div>
  );
}