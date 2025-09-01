import { useTranslation } from "../hooks/useTranslations";
import LanguageToggle from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
    //traduction
    const { transalation } = useTranslation();

    /**
     * Items in my navbar
     */
    const navItems = [
        { label: transalation.nav.home, id: "home" },
        { label: transalation.nav.about, id: "about" },
        { label: transalation.nav.timeline, id: "timeline" },
        { label: transalation.nav.projects, id: "projects" },
        { label: transalation.nav.skills, id: "skills" },
        { label: transalation.nav.contact, id: "contact" }
    ];

    return (
        <header className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"}>

            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">
                        <span className="text-blue-500">K</span>ilyann
                    </div>

                    {/*Desktop items */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/*Language and Theme items */}
                    <div className="hidden md:flex items-center space-x-3">
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;