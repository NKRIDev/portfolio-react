import { useApp } from "../contexts/AppContext";

export const ThemeToggle = () => {

    const { theme, toggleTheme } = useApp();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 group"
        >
            <div>
                <div
                    className={`absolute inset-0 text-blue-400 transition-all duration-300 
                ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
                >
                    ☀️
                </div>

                <div
                    className={`absolute inset-0 text-blue-400 transition-all duration-300
                    ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
                >
                    🌙
                </div>
            </div>
        </button>
    );

};