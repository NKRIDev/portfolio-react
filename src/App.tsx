import { AppProvider } from "./contexts/AppContext";
import LanguageToggle from "./components/LanguageToggle";
import { HomePage } from "./components/HomePage";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <AppProvider>
      <div className="bg-red-200 dark:bg-black min-h-screen">
        <HomePage />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </AppProvider>
  )
}

export default App
