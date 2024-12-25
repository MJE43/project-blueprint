import React from 'react';
import { AudienceInput } from '../inputs/AudienceInput';
import { ScaleSelect } from '../inputs/ScaleSelect';
import { TimelineSelect } from '../inputs/TimelineSelect';
import type { Question } from '../types';

interface ProjectFundamentalsSectionProps {
  questions: Question[];
  values: Record<string, string | string[]>;
  onChange: (id: string, value: string | string[]) => void;
}

export function ProjectFundamentalsSection({ questions, values, onChange }: ProjectFundamentalsSectionProps) {
  return (
    <div className="space-y-6">
      <AudienceInput
        value={values['target-audience'] as string}
        onChange={(value) => onChange('target-audience', value)}
      />
      
      <ScaleSelect
        value={values['expected-scale'] as string}
        onChange={(value) => onChange('expected-scale', value)}
      />
      
      <TimelineSelect
        value={values['timeline'] as string}
        onChange={(value) => onChange('timeline', value)}
      />
    </div>
  );
}