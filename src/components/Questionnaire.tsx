import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { QuestionInput } from './questionnaire/QuestionInput';
import { ProgressBar } from './questionnaire/ProgressBar';
import { questionnaireSections } from './questionnaire/sections';

interface QuestionnaireProps {
  onComplete: (answers: Record<string, string | string[]>) => void;
  onBack: () => void;
}

export function Questionnaire({ onComplete, onBack }: QuestionnaireProps) {
  const [currentSection, setCurrentSection] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string | string[]>>({});

  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentSection === questionnaireSections.length - 1) {
      onComplete(answers);
    } else {
      setCurrentSection(prev => prev + 1);
    }
  };

  const section = questionnaireSections[currentSection];
  const isComplete = section.questions.every(q => 
    !q.required || answers[q.id]
  );

  return (
    <div className="space-y-6">
      <ProgressBar
        currentStep={currentSection}
        totalSteps={questionnaireSections.length}
      />
      
      <div>
        <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
        <p className="mt-1 text-sm text-gray-500">{section.description}</p>
      </div>

      <div className="space-y-6">
        {section.questions.map(q => (
          <QuestionInput
            key={q.id}
            question={q}
            value={answers[q.id] || ''}
            onChange={value => handleAnswer(q.id, value)}
          />
        ))}
      </div>

      <div className="flex justify-between pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!isComplete}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentSection === questionnaireSections.length - 1 ? 'Complete' : 'Next'}
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}