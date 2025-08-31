import { useApp } from "../contexts/AppContext"

/**
 * Component to change the site language
 */
const LanguageToggle = () => {

    const { language, setLanguage } = useApp();

    return (
        <>

            {/*FR language */}
            <button
                onClick={() => setLanguage("fr")}
                className="text-black dark:text-white">
                FR
            </button>

            {/*EN language */}
            <button
                onClick={() => setLanguage("en")}
                className="text-black dark:text-white">
                EN
            </button>
        </>
    );
}

export default LanguageToggle;