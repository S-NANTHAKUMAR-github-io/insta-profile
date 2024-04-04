import { createContext, useContext, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Loader from './Loader';


//useContext for accessing the loader globally for every page by calling the function name
const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateLoading = () => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1500);
  };

  const handleRouteChange = () => {
    setProgress(20);
    simulateLoading();
  };


  const startLoading = () => {
    setProgress(30);
    setIsLoading(true);
  };

  const stopLoading = () => {
    setProgress(100);
    setIsLoading(false);
  };

  return (
    //returing the function to acccess every page
    <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading, progress, handleRouteChange }}>
      <LoadingBar
        color='#ff416c'
        height={4}
        progress={progress}
      />
      <Loader></Loader>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
};
