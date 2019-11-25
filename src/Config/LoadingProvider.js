import React, { useState } from 'react';
import LoadingContext from './LoadingContext';

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  )
};

export default LoadingProvider;