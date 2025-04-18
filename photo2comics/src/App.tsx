import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import StyleSelection from './components/StyleSelection';
import ScriptInput from './components/ScriptInput';
import ComicDisplay from './components/ComicDisplay';
import { convertImageToBase64 } from './utils/imageUtils';
import { generateComic } from './services/api';
import { COMIC_STYLES, SCRIPT_TEMPLATES } from './constants';

function App() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState(COMIC_STYLES[0].id);
  const [script, setScript] = useState(SCRIPT_TEMPLATES[0].content);
  const [generatedComic, setGeneratedComic] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImagesSelected = async (files: File[]) => {
    setSelectedFiles(files);
    
    const previews = await Promise.all(
      files.map(file => convertImageToBase64(file))
    );
    
    setPreviewImages(previews);
  };

  const handleStyleChange = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleScriptChange = (newScript: string) => {
    setScript(newScript);
  };

  const handleGenerateComic = async () => {
    if (selectedFiles.length === 0) {
      setError('Please upload at least one image');
      return;
    }
    
    if (!script) {
      setError('Please enter a script or select a template');
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    try {
      const base64Images = await Promise.all(
        selectedFiles.map(file => convertImageToBase64(file))
      );
      
      const response = await generateComic({
        images: base64Images,
        style: selectedStyle,
        script
      });
      
      setGeneratedComic(response.content ? [response.content] : []);
    } catch (err) {
      console.error('Error generating comic:', err);
      setError('Failed to generate comic. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Photo to Comics Generator</h1>
        <p className="text-gray-600">
          Transform your photos into comic strips using AI
        </p>
      </header>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-medium mb-4">Upload Images</h2>
          <ImageUpload onImagesSelected={handleImagesSelected} />
          
          {previewImages.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Uploaded Images</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {previewImages.map((preview, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <img 
                      src={preview} 
                      alt={`Uploaded ${index + 1}`} 
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
        
        <StyleSelection 
          selectedStyle={selectedStyle} 
          onStyleChange={handleStyleChange} 
        />
        
        <ScriptInput 
          script={script} 
          onScriptChange={handleScriptChange} 
        />
        
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        <button
          onClick={handleGenerateComic}
          disabled={isLoading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
        >
          {isLoading ? 'Generating...' : 'Generate Comic'}
        </button>
        
        <ComicDisplay 
          comicImages={generatedComic} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
}

export default App;
