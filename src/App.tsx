import { AppProvider } from "./contexts/AppContext";
import Header from "./components/Header";

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 font-['Inter',sans-serif] transition-colors duration-300">

        <Header></Header>

        <main>

        </main>
      </div>
    </AppProvider>
  )
}

export default App
