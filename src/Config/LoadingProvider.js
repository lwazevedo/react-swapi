import React, { useState } from 'react';
import LoadingContext from './LoadingContext';

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewSubHeader, setViewSubHeader] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, viewSubHeader, setViewSubHeader }}>
      {children}
    </LoadingContext.Provider>
  )
};

export default LoadingProvider;