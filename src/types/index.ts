export interface ProjectDetails {
  name: string;
  description: string;
  type: 'web' | 'mobile' | 'desktop' | 'other';
  objectives: string[];
}

export interface QuestionnaireSection {
  title: string;
  questions: {
    id: string;
    question: string;
    type: 'text' | 'select' | 'multiselect' | 'textarea';
    options?: string[];
    required: boolean;
  }[];
}

export interface Document {
  id: keyof typeof DocumentTypes;
  title: string;
  status: 'pending' | 'generating' | 'completed';
  content: string;
  dependencies: (keyof typeof DocumentTypes)[];
}

export const DocumentTypes = {
  projectRequirements: 'Project Requirements',
  techStack: 'Technology Stack',
  backendStructure: 'Backend Structure',
  frontendGuidelines: 'Frontend Guidelines',
  fileStructure: 'File Structure',
  appFlow: 'Application Flow',
  systemPrompts: 'System Prompts'
} as const;