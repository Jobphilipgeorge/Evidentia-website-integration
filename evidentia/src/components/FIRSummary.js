import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FIRSummary = () => {
  const [firText, setFirText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firText.trim()) {
      alert("Please enter FIR content.");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setSummary("This is the summarized version of the FIR text.");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          FIR Summary Generator
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              FIR Content
            </label>
            <textarea
              value={firText}
              onChange={(e) => setFirText(e.target.value)}
              className="w-full h-48 p-4 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-purple-400 focus:ring-purple-400 transition"
              placeholder="Enter FIR text here..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2 disabled:opacity-50"
          >
            {isLoading ? 'Generating...' : 'Generate Summary'}
            <ArrowRight className="ml-2" />
          </button>
        </form>

        {summary && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Generated Summary</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300">{summary}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FIRSummary;
