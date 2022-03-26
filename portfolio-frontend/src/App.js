import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import CV from './components/cv/CV';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Socials from './components/socials/Socials';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <CV/>
      <Experience />
      <Projects />
      <Socials />
      <Contact />
    </div>
  );
}

export default App;
