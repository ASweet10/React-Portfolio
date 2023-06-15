import './App.css'
import Home from './components/Home'
import Tools from './components/Tools'
import Projects from 'components/Projects'
import Contact from 'components/Contact'
import Navbar from 'components/Navbar'

function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <Projects />
        <Tools />
        <Contact />
      </div>
  );
}

export default App;
