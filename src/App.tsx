import React from 'react';
import { Header } from './components/Header';
import { ProjectForm } from './components/project-form/ProjectForm';
import { Questionnaire } from './components/Questionnaire';
import { DocumentGenerator } from './components/DocumentGenerator';
import type { ProjectDetails, Document } from './types';
import { DocumentTypes } from './types';

function App() {
  const [step, setStep] = React.useState<'project' | 'questionnaire' | 'generating' | 'complete'>('project');
  const [projectDetails, setProjectDetails] = React.useState<ProjectDetails | null>(null);
  const [questionnaireAnswers, setQuestionnaireAnswers] = React.useState<Record<string, string | string[]> | null>(null);
  const [documents, setDocuments] = React.useState<Document[]>([]);

  const handleProjectSubmit = (details: ProjectDetails) => {
    setProjectDetails(details);
    setStep('questionnaire');
  };

  const handleQuestionnaireComplete = (answers: Record<string, string | string[]>) => {
    setQuestionnaireAnswers(answers);
    
    // Initialize documents with dependencies
    const docs: Document[] = [
      {
        id: 'projectRequirements',
        title: DocumentTypes.projectRequirements,
        status: 'pending',
        content: '',
        dependencies: []
      },
      {
        id: 'techStack',
        title: DocumentTypes.techStack,
        status: 'pending',
        content: '',
        dependencies: ['projectRequirements']
      },
      {
        id: 'backendStructure',
        title: DocumentTypes.backendStructure,
        status: 'pending',
        content: '',
        dependencies: ['projectRequirements', 'techStack']
      },
      {
        id: 'frontendGuidelines',
        title: DocumentTypes.frontendGuidelines,
        status: 'pending',
        content: '',
        dependencies: ['projectRequirements', 'techStack']
      },
      {
        id: 'fileStructure',
        title: DocumentTypes.fileStructure,
        status: 'pending',
        content: '',
        dependencies: ['frontendGuidelines', 'techStack']
      },
      {
        id: 'appFlow',
        title: DocumentTypes.appFlow,
        status: 'pending',
        content: '',
        dependencies: ['projectRequirements', 'backendStructure', 'frontendGuidelines']
      },
      {
        id: 'systemPrompts',
        title: DocumentTypes.systemPrompts,
        status: 'pending',
        content: '',
        dependencies: ['projectRequirements', 'techStack', 'backendStructure', 'frontendGuidelines', 'fileStructure', 'appFlow']
      }
    ];
    
    setDocuments(docs);
    setStep('generating');
  };

  const handleGenerationComplete = () => {
    setStep('complete');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Header />

        <div className="bg-white shadow-lg rounded-lg p-8">
          {step === 'project' && (
            <ProjectForm onSubmit={handleProjectSubmit} />
          )}
          
          {step === 'questionnaire' && (
            <Questionnaire
              onComplete={handleQuestionnaireComplete}
              onBack={() => setStep('project')}
            />
          )}
          
          {step === 'generating' && (
            <DocumentGenerator
              documents={documents}
              onComplete={handleGenerationComplete}
            />
          )}
          
          {step === 'complete' && (
            <div className="text-center">
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                Documentation Generated Successfully
              </h2>
              <p className="mt-2 text-gray-600">
                Your project documentation is ready for AI-assisted development
              </p>
              <button
                onClick={() => setStep('project')}
                className="mt-6 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start New Project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;