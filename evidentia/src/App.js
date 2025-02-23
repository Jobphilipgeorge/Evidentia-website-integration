import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import TextToImage from './components/TextToImage';
import ImageToText from './components/ImageToText';
import FIRSummary from './components/FIRSummary';
import Navigation from './components/Navigation';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'text-to-image':
        return <TextToImage />;
      case 'image-to-text':
        return <ImageToText />;
      case 'fir-summary':
        return <FIRSummary />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      {currentPage !== 'landing' && <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {renderPage()}
    </div>
  );
};

export default App;
