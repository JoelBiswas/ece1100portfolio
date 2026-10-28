import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[var(--light)]">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
