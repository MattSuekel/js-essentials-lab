import { useState, useEffect } from "react";

const useLocalStorage = (key, initValue) => {
  const [input, setInput] = useState(() => {
    const savedInput = localStorage.getItem(key);
    
    if (savedInput !== null) {
      return JSON.parse(savedInput);
    };

    return initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(input));
  }, [key, input]);

  return[input, setInput];
};

export default useLocalStorage;
