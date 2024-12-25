import React from 'react';
import { FileText, CheckCircle, Loader2 } from 'lucide-react';
import type { Document } from '../types';
import { DocumentTypes } from '../types';

interface DocumentGeneratorProps {
  documents: Document[];
  onComplete: () => void;
}

export function DocumentGenerator({ documents, onComplete }: DocumentGeneratorProps) {
  const [currentDoc, setCurrentDoc] = React.useState<Document | null>(null);

  React.useEffect(() => {
    const doc = documents.find(d => d.status === 'pending');
    if (doc && (!currentDoc || currentDoc.status === 'completed')) {
      setCurrentDoc(doc);
      // Simulate document generation
      setTimeout(() => {
        doc.status = 'completed';
        doc.content = `Generated content for ${doc.title}`;
        if (documents.every(d => d.status === 'completed')) {
          onComplete();
        }
      }, 2000);
    }
  }, [documents, currentDoc, onComplete]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Generating Documents</h2>
      
      <div className="space-y-4">
        {documents.map(doc => (
          <div
            key={doc.id}
            className="flex items-center p-4 bg-white rounded-lg border border-gray-200"
          >
            <div className="flex-shrink-0">
              {doc.status === 'completed' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : doc.status === 'generating' ? (
                <Loader2 className="h-5 w-5 text-indigo-500 animate-spin" />
              ) : (
                <FileText className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium text-gray-900">{doc.title}</h3>
              <p className="text-sm text-gray-500">
                Dependencies: {doc.dependencies.map(d => DocumentTypes[d]).join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}