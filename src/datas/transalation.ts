/**
 * Skate
 */
export interface Translations {
    test: {
        title: string;
    }
}

/**
 * Map associating a language with its site pattern
 * 
 * @key lang
 * @value skate the text content of the site
 */
export const translations: Record<"fr" | "en", Translations> = {
    fr: {
        test: {
            title: "Bonjour !"
        }
    },
    en: {
        test: {
            title: "Hello !"
        }
    }
}