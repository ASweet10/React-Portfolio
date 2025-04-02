import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
      <div>
        <ParticleBackground />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
  );
}

export default App