import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SkipPage from './components/SkipPage';
import { SkipProvider } from './context/SkipContext';

function App() {
  return (
    <SkipProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Navigation />
          <main className="content">
            <Routes>
              <Route path="/" element={<SkipPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SkipProvider>
  );
}

export default App;
