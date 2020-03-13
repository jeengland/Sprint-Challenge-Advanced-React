import { useState, useEffect } from 'react';

const useDarkMode = (initialState) => {
    const [darkMode, setDarkMode] = useState(initialState);
    useEffect(() => {
        darkMode && document.body.classList.add('dark-mode');
        !darkMode && document.body.classList.remove('dark-mode');
    }, [darkMode])
    return [darkMode, setDarkMode];
}

export default useDarkMode;