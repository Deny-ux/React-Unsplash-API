import { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export const useGlobalContext = () => {
  return useContext(Context);
};

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    'prefers-color-scheme:dark'
  ).matches;
  const storedDarkMode = JSON.parse(localStorage.getItem('darkTheme'));
  return storedDarkMode || prefersDarkMode;
};

export function GlobalContext({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);
  const [searchTerm, setSearchTerm] = useState('cat');
  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // const body = document.querySelector('body');
    // body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  }

  return (
    <Context.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </Context.Provider>
  );
}
