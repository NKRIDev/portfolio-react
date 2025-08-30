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
                onClick={() => setLanguage("fr")}>
                FR
            </button>

            {/*EN language */}
            <button
                onClick={() => setLanguage("en")}>
                EN
            </button>
        </>
    );
}

export default LanguageToggle;