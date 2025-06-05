import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import { Element } from 'react-scroll'

function App() {
  return (
      <div>
        <ParticleBackground />
        <Navbar />
        <Home />
        <Element name="about"><About /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </div>
  );
}

export default App