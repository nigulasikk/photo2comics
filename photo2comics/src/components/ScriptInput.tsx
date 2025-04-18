import React, { useState } from 'react';
import { SCRIPT_TEMPLATES } from '../constants';

interface ScriptInputProps {
  script: string;
  onScriptChange: (script: string) => void;
}

const ScriptInput: React.FC<ScriptInputProps> = ({
  script,
  onScriptChange
}) => {
  const [showTemplates, setShowTemplates] = useState(false);

  const handleTemplateSelect = (templateContent: string) => {
    onScriptChange(templateContent);
    setShowTemplates(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Comic Script</h2>
        <button
          type="button"
          onClick={() => setShowTemplates(!showTemplates)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {showTemplates ? 'Hide Templates' : 'Show Templates'}
        </button>
      </div>
      
      {showTemplates && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {SCRIPT_TEMPLATES.map((template) => (
            <div 
              key={template.id}
              onClick={() => handleTemplateSelect(template.content)}
              className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <h3 className="font-medium text-sm">{template.name}</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{template.content}</p>
            </div>
          ))}
        </div>
      )}
      
      <textarea
        value={script}
        onChange={(e) => onScriptChange(e.target.value)}
        placeholder="Enter your comic script here or select a template above..."
        className="w-full h-40 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ScriptInput;
