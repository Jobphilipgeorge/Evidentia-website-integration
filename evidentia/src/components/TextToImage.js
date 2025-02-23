import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const TextToImage = () => {
    const [description, setDescription] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setSummary('Summary of the description would appear here...');
        setIsLoading(false);
      }, 1500);
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Text to Image Conversion
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Scene Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-48 p-4 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-400 focus:ring-blue-400 transition"
                placeholder="Enter detailed scene description..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2 disabled:opacity-50"
            >
              {isLoading ? 'Generating...' : 'Generate Image'}
              <ArrowRight className="ml-2" />
            </button>
          </form>
  
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Generated Image</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="bg-gray-700/50 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Generated image will appear here</p>
              </div>
            </div>
          </div>
  
          {summary && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Summary</h3>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <p className="text-gray-300">{summary}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

export default TextToImage;
