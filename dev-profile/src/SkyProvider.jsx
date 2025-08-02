import { createContext, useState, useEffect, useLayoutEffect, useRef } from 'react';

const SkyContext = createContext();

const SkyProvider = ({ children }) => {
  const [mediaMessage, setMediaMessage] = useState('');
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setServerMessage('');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [serverMessage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMediaMessage('');
    }, 2100);
    return () => clearTimeout(timeout);
  }, [mediaMessage]);

  const contextValue = {
    mediaMessage,
    setMediaMessage,
    serverMessage,
    setServerMessage,
  };

  return (
    <SkyContext.Provider value={contextValue}>
      {children}
    </SkyContext.Provider>
  );
}

export { SkyProvider };
export default SkyContext;  