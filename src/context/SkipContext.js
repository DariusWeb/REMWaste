import React, { createContext, useState, useContext } from 'react';

// Create the context
const SkipContext = createContext();

// Create provider component
export function SkipProvider({ children }) {
  const [selectedSkip, setSelectedSkip] = useState(null);

  // Function to select a skip
  const selectSkip = (skip) => {
    setSelectedSkip(skip);
  };

  // Values to be provided
  const value = {
    selectedSkip,
    selectSkip,
  };

  return (
    <SkipContext.Provider value={value}>
      {children}
    </SkipContext.Provider>
  );
}

// Custom hook for using this context
export function useSkipContext() {
  const context = useContext(SkipContext);
  if (context === undefined) {
    throw new Error('useSkipContext must be used within a SkipProvider');
  }
  return context;
}
