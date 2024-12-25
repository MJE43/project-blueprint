import React from 'react';
import { Rocket } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <Rocket className="h-16 w-16 text-indigo-600 mx-auto" />
      <h1 className="mt-6 text-4xl font-extrabold text-gray-900 tracking-tight">
        AI-Assisted Development Platform
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        Transform your project vision into detailed technical specifications using AI-powered documentation generation.
      </p>
    </div>
  );
}