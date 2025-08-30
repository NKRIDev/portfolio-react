import { useApp } from "../contexts/AppContext"
import { translations } from "../datas/transalation";

/**
 * retrieve the correct list of words/phrases
 * translated into the correct language
 */
export const useTranslation = () => {
    const { language } = useApp();

    return {
        transalation: translations[language],
        language
    }
}