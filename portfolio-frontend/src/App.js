import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import CV from './components/cv/CV';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Socials from './components/socials/Socials';
import Contact from './components/contact/Contact';
import CustomNav from './components/nav/CustomNav';

function App() {
  return (
    <div className="appContainer">
      <CustomNav></CustomNav>
      <div className="App">
        <Header />
        <About />
        <CV/>
        <Experience />
        <Projects />
      </div>
      <Socials />
      <div className="contactBar"><Contact/></div>
    </div>
  );
}

export default App;
