import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { ProjectDetails } from '../types';

interface ProjectFormProps {
  onSubmit: (details: ProjectDetails) => void;
}

export function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [details, setDetails] = React.useState<ProjectDetails>({
    name: '',
    description: '',
    type: 'web',
    objectives: ['']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  const addObjective = () => {
    setDetails(prev => ({
      ...prev,
      objectives: [...prev.objectives, '']
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Project Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={details.name}
          onChange={e => setDetails(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          required
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={details.description}
          onChange={e => setDetails(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Project Type
        </label>
        <select
          id="type"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={details.type}
          onChange={e => setDetails(prev => ({ ...prev, type: e.target.value as ProjectDetails['type'] }))}
        >
          <option value="web">Web Application</option>
          <option value="mobile">Mobile Application</option>
          <option value="desktop">Desktop Application</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Project Objectives
        </label>
        <div className="space-y-2">
          {details.objectives.map((objective, index) => (
            <input
              key={index}
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={objective}
              onChange={e => {
                const newObjectives = [...details.objectives];
                newObjectives[index] = e.target.value;
                setDetails(prev => ({ ...prev, objectives: newObjectives }));
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={addObjective}
          className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
        >
          Add another objective
        </button>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Continue
        <ChevronRight className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}