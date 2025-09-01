import { useApp } from "../contexts/AppContext"

/**
 * Component to change the site language
 */
const LanguageToggle = () => {

    const { language, setLanguage } = useApp();

    return (
        <div className="flex items-center bg-slate-200 dark:bg-slate-700 rounded-lg p-1">

            {/*Language frnçais*/}
            <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${language === 'fr'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
            >
                🇫🇷 FR
            </button>


            {/*Language english*/}
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${language === 'en'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
            >
                🇬🇧 EN
            </button>
        </div>
    );
}

export default LanguageToggle;