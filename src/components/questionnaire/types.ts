export interface Question {
  id: string;
  question: string;
  type: 'text' | 'select' | 'multiselect' | 'textarea';
  options?: string[];
  required: boolean;
  helpText?: string;
  placeholder?: string;
  example?: string;
}

export interface QuestionnaireSection {
  title: string;
  description: string;
  questions: Question[];
}

export interface QuestionProps {
  question: Question;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  className?: string;
}