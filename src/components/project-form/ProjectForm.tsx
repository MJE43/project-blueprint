import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ObjectiveInput } from './ObjectiveInput';
import type { ProjectDetails } from '../../types';

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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Project Name
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={details.name}
          onChange={e => setDetails(prev => ({ ...prev, name: e.target.value }))}
          placeholder="e.g., My Awesome E-commerce App"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="description"
          required
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={details.description}
          onChange={e => setDetails(prev => ({ ...prev, description: e.target.value }))}
          placeholder="e.g., A web application for selling handmade jewelry online with features for inventory management and order processing."
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Project Type
          <span className="text-red-500 ml-1">*</span>
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

      <ObjectiveInput
        objectives={details.objectives}
        onChange={objectives => setDetails(prev => ({ ...prev, objectives }))}
      />

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Continue to Questionnaire
        <ChevronRight className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}