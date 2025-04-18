import React from 'react';
import { COMIC_STYLES } from '../constants';

interface StyleSelectionProps {
  selectedStyle: string;
  onStyleChange: (styleId: string) => void;
}

const StyleSelection: React.FC<StyleSelectionProps> = ({
  selectedStyle,
  onStyleChange
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Select Comic Style</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {COMIC_STYLES.map((style) => (
          <div 
            key={style.id}
            onClick={() => onStyleChange(style.id)}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedStyle === style.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <h3 className="font-medium">{style.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{style.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelection;
