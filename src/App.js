import './App.css'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Tools from './components/Tools'
import Projects from 'components/Projects'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
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
