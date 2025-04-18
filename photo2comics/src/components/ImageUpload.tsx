import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { validateImageFile } from '../utils/imageUtils';

interface ImageUploadProps {
  onImagesSelected: (files: File[]) => void;
  maxFiles?: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onImagesSelected, 
  maxFiles = 4 
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(validateImageFile);
    if (validFiles.length > 0) {
      onImagesSelected(validFiles.slice(0, maxFiles));
    }
  }, [onImagesSelected, maxFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    maxFiles
  });

  return (
    <div 
      {...getRootProps()} 
      className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Drag &amp; drop images here, or click to select files
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Supports JPG, PNG (max {maxFiles} files)
      </p>
    </div>
  );
};

export default ImageUpload;
