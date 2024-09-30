import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
  );
}

export default App