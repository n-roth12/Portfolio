import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <main>
      <div className="content">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}

export default App
