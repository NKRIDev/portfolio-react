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
    },
    home: {
        greeting: string;
        im: string;
        name: string;
        subtitle: string;
        description: string;
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
        },
        home: {
            greeting: "Hey",
            im: "je suis",
            name: "Kilyann",
            subtitle: "Étudiant en BTS CIEL, passionné par la programmation.",
            description: "J'aime créer, résoudre des problèmes techniques et voir mes idées devenir réelles.",
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
        },
        home: {
            greeting: "Hey",
            im: "I'm",
            name: "Kilyann",
            subtitle: 'BTS CIEL student, passionate about programming.',
            description: 'I love creating, solving technical problems and seeing my ideas come to life.',
        }
    }
}