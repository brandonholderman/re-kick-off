import React, { useState, useEffect } from "react";
import Search from './Search';
// import '../../unused/App.css';
import './App.css';

const SunIcon = () => (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
);

const MoonIcon = () => (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);


const App = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("koff-theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("koff-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        <div className="App">
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
                <span className="theme-toggle-label">
                    {theme === "light" ? "Dark mode" : "Light mode"}
                </span>
            </button>
            <Search />
        </div>
    );
}

export default App;