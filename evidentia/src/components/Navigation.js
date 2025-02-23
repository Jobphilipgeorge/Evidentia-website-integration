import React from 'react';
import { Home } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => (
  <nav className="bg-gray-900 text-white py-4 px-6">
    <button onClick={() => setCurrentPage('landing')} className="flex items-center space-x-2">
      <Home size={20} /> <span>Home</span>
    </button>
    <span className="ml-4">{currentPage.replace('-', ' ').toUpperCase()}</span>
  </nav>
);

export default Navigation;
