import React from 'react';
import { FileText, Image, FileSearch, ChevronRight } from 'lucide-react';

const LandingPage = ({ onNavigate }) => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <FileSearch size={64} className="text-blue-400" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Evidentia
          </h1>
          <p className="text-xl text-gray-300 mb-8">Advanced Crime Scene Analysis Through AI</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div onClick={() => onNavigate('text-to-image')} 
               className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-700/50 transition cursor-pointer border border-gray-700 hover:border-blue-400">
            <FileText size={48} className="mb-4 text-blue-400 group-hover:scale-110 transition" />
            <h2 className="text-2xl font-bold mb-4">Text to Image</h2>
            <p className="text-gray-300">Convert detailed textual descriptions into visual crime scene representations</p>
            <ChevronRight className="mt-4 text-blue-400 group-hover:translate-x-2 transition" />
          </div>
          
          <div onClick={() => onNavigate('image-to-text')}
               className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-700/50 transition cursor-pointer border border-gray-700 hover:border-green-400">
            <Image size={48} className="mb-4 text-green-400 group-hover:scale-110 transition" />
            <h2 className="text-2xl font-bold mb-4">Image to Text</h2>
            <p className="text-gray-300">Generate comprehensive descriptions from crime scene images</p>
            <ChevronRight className="mt-4 text-green-400 group-hover:translate-x-2 transition" />
          </div>
  
          <div onClick={() => onNavigate('fir-summary')}
               className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-700/50 transition cursor-pointer border border-gray-700 hover:border-purple-400">
            <FileText size={48} className="mb-4 text-purple-400 group-hover:scale-110 transition" />
            <h2 className="text-2xl font-bold mb-4">FIR Summary</h2>
            <p className="text-gray-300">Generate concise summaries from First Information Reports</p>
            <ChevronRight className="mt-4 text-purple-400 group-hover:translate-x-2 transition" />
          </div>
        </div>
      </div>
    </div>
  );

export default LandingPage;
