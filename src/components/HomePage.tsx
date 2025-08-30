import { useTranslation } from "../hooks/useTranslations";

/**
 * for test
 */
export const HomePage = () => {

    const { transalation } = useTranslation();

    return (
        <h1>{transalation.test.title}</h1>
    )
}