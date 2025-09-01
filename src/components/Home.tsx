import { useTransition } from "react";
import { translations } from "../datas/transalation";
import { useTranslation } from "../hooks/useTranslations";

const Home = () => {
    //Traduction
    const { transalation } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Degraded background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-slate-200 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800"></div>

            {/* Animated dot */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full opacity-20 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
                        {transalation.home.greeting}<span className="wave">👋</span>, {transalation.home.im}{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                            {transalation.home.name}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {transalation.home.subtitle}
                    </p>

                    <p className="text-lg md:text-xl text-slate-500 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                        {transalation.home.description}
                    </p>
                </div>
            </div>
        </section>

    );
};

export default Home;