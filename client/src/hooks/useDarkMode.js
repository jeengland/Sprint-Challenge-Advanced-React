import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (initialState) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', initialState)
    useEffect(() => {
        darkMode && document.body.classList.add('dark-mode');
        !darkMode && document.body.classList.remove('dark-mode');
    }, [darkMode])
    return [darkMode, setDarkMode];
}

export default useDarkMode;