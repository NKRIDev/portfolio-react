import { useTranslation } from "../hooks/useTranslations";

/**
 * for test
 */
export const HomePage = () => {

    const { transalation } = useTranslation();

    return (
        <h1 className="text-black dark:text-white">{transalation.test.title}</h1>
    )
}