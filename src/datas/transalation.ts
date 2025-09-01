/**
 * Skate
 */
export interface Translations {
    nav: {
        home: string;
        about: string;
        timeline: string;
        projects: string;
        skills: string;
        contact: string;
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
        nav: {
            home: 'Accueil',
            about: 'À propos',
            timeline: 'Parcours',
            projects: 'Projets',
            skills: 'Compétences',
            contact: 'Contact'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            timeline: 'Journey',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        }
    }
}