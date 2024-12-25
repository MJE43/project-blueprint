import { QuestionnaireSection } from './types';

export const questionnaireSections: QuestionnaireSection[] = [
  {
    title: 'Project Fundamentals',
    description: 'Let\'s start with the basic information about your project and its goals.',
    questions: [
      {
        id: 'target-audience',
        question: 'Who is your target audience?',
        type: 'textarea',
        required: true,
        helpText: 'Describe the primary users of your application. Consider their technical expertise, age range, and specific needs.',
        placeholder: 'e.g., Small business owners aged 30-50 who need help managing their inventory',
        example: 'Software developers working in enterprise companies who need to automate their deployment process'
      },
      {
        id: 'expected-scale',
        question: 'What is the expected scale of your application?',
        type: 'select',
        options: ['Small (< 1000 users)', 'Medium (1000-10000 users)', 'Large (> 10000 users)'],
        required: true,
        helpText: 'This helps determine the architecture and infrastructure requirements'
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline for the first release?',
        type: 'select',
        options: [
          '1-2 months',
          '3-6 months',
          '6-12 months',
          'More than 12 months'
        ],
        required: true,
        helpText: 'Choose the timeframe that best matches your project goals'
      }
    ]
  },
  {
    title: 'Technical Requirements',
    description: 'Help us understand your technical needs and preferences.',
    questions: [
      {
        id: 'deployment',
        question: 'Where will the application be deployed?',
        type: 'select',
        options: ['Cloud', 'On-premise', 'Hybrid'],
        required: true,
        helpText: 'This affects the infrastructure and deployment strategy'
      },
      {
        id: 'tech-preferences',
        question: 'Do you have any specific technology preferences?',
        type: 'multiselect',
        options: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'GCP'],
        required: false,
        helpText: 'Select any technologies you prefer to use in your project'
      }
    ]
  }
];