import React from 'react';
import { DeploymentSelect } from '../inputs/DeploymentSelect';
import { TechStackSelect } from '../inputs/TechStackSelect';
import type { Question } from '../types';

interface TechnicalSectionProps {
  questions: Question[];
  values: Record<string, string | string[]>;
  onChange: (id: string, value: string | string[]) => void;
}

export function TechnicalSection({ questions, values, onChange }: TechnicalSectionProps) {
  return (
    <div className="space-y-6">
      <DeploymentSelect
        value={values['deployment'] as string}
        onChange={(value) => onChange('deployment', value)}
      />
      
      <TechStackSelect
        value={values['tech-preferences'] as string[]}
        onChange={(value) => onChange('tech-preferences', value)}
      />
    </div>
  );
}