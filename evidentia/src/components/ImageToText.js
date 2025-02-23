import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ImageToText = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleImageUpload = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]));
    };
  
    const generateDescription = () => {
      setIsLoading(true);
      setTimeout(() => {
        setDescription('Generated description would appear here...');
        setIsLoading(false);
      }, 1500);
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-green-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            Image to Text Conversion
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Upload Image
              </label>
              <input
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                className="w-full p-4 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-green-400 focus:ring-green-400 transition"
              />
            </div>
  
            {image && (
              <div className="mt-4">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <img src={image} alt="Uploaded scene" className="max-w-full h-64 object-cover rounded-lg" />
                </div>
                <button
                  onClick={generateDescription}
                  disabled={isLoading}
                  className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition flex items-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? 'Generating...' : 'Generate Description'}
                  <ArrowRight className="ml-2" />
                </button>
              </div>
            )}
  
            {description && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Generated Description</h3>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <p className="text-gray-300">{description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

export default ImageToText;
