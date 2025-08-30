import { AppProvider } from "./contexts/AppContext";
import LanguageToggle from "./components/LanguageToggle";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <AppProvider>
      <div>
        {/* TODO : to testing language system */}
        <HomePage></HomePage>
        <LanguageToggle></LanguageToggle>
      </div>
    </AppProvider>
  )
}

export default App
