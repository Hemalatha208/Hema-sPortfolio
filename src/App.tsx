import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import CustomCursor from "./components/CustomCursor";
import { Certifications } from './components/Certifications';

function App() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <>
         <CustomCursor />  
      </>
    </div>
  );
}

export default App;
