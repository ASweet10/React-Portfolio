import './App.css'
import Home from './components/Home'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <Projects />
        <Tech />
        <Contact />
      </div>
  );
}

export default App;
