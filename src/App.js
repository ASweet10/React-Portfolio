import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ParticlesComponent from 'components/Particles'

function App() {
  return (
      <div>
        <ParticlesComponent id="particles" />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
  );
}

export default App