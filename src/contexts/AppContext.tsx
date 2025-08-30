import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

/**
 * Language system, either French or English
 */
export type Language = "fr" | "en";

interface AppContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    //Language system, in default in french
    const [language, setLanguageState] = useState<Language>("fr");

    /**
     * Executed on component mount, updates components
     */
    useEffect(() => {
        /**
         * Language data is stock in navigator local storage
         */
        const saveLanguage = localStorage.getItem("language") as Language;

        if (saveLanguage && ["fr", "en"].includes(saveLanguage)) {
            setLanguageState(saveLanguage);
        }
    }, []);

    //Set a languague for web site
    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        /*
        console.log("language", lang);
        console.log("local-storage", localStorage.getItem("language"));
        */
    }

    return (
        <AppContext.Provider
            value={{
                language,
                setLanguage
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
