import React from 'react';
import { Download } from 'lucide-react';

interface ComicDisplayProps {
  comicImages: string[];
  isLoading: boolean;
}

const ComicDisplay: React.FC<ComicDisplayProps> = ({
  comicImages,
  isLoading
}) => {
  const handleDownload = (imageUrl: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `comic-panel-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Generating your comic...</p>
      </div>
    );
  }

  if (comicImages.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Your Generated Comic</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {comicImages.map((image, index) => (
          <div key={index} className="relative border rounded-lg overflow-hidden group">
            <img 
              src={image} 
              alt={`Comic panel ${index + 1}`} 
              className="w-full h-auto"
            />
            <button
              onClick={() => handleDownload(image, index)}
              className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
              title="Download panel"
            >
              <Download className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
      
      <button
        onClick={() => {
          comicImages.forEach((image, index) => {
            handleDownload(image, index);
          });
        }}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download className="h-5 w-5" />
        Download All Panels
      </button>
    </div>
  );
};

export default ComicDisplay;
