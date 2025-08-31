import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

/**
 * Language system, either French or English
 */
export type Language = "fr" | "en";

/**
 * Dark mod system, in default web site is 
 * in dark mod.
 */
export type Theme = "dark" | "light";

interface AppContextType {
    language: Language;
    setLanguage: (lang: Language) => void;

    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    //Language system, in default in french
    const [language, setLanguageState] = useState<Language>("fr");

    //Them system, in default is in dark mod
    const [theme, setThemeState] = useState<Theme>("dark");

    /**
     * Executed on component mount, updates components
     */
    useEffect(() => {
        /**
         * Language and theme data is stock in navigator local storage
         */
        const saveLanguage = localStorage.getItem("language") as Language;

        if (saveLanguage && ["fr", "en"].includes(saveLanguage)) {
            setLanguageState(saveLanguage);
        }

        const saveTheme = localStorage.getItem("theme") as Theme;

        if (saveTheme && ["light", "dark"].includes(saveTheme)) {
            setThemeState(saveTheme);
        }
    }, []);

    /**
     * Update when theme state changed.
     */
    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);


    //Set a languague for web site
    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        /*
        console.log("language", lang);
        console.log("local-storage", localStorage.getItem("language"));
        */
    }

    //Set a theme for web site
    const setTheme = (theme: Theme) => {
        setThemeState(theme);
        localStorage.setItem("theme", theme);
        console.log("theme", theme);
        console.log("local-storage", localStorage.getItem("theme"));
    }

    //change theme mod (auto)
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <AppContext.Provider
            value={{
                language,
                setLanguage,
                theme,
                setTheme,
                toggleTheme,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
