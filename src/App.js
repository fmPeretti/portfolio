import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import CV from './components/cv/CV';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Socials from './components/socials/Socials';
import Contact from './components/contact/Contact';
import CustomNav from './components/nav/CustomNav';

import { HashRouter as Router, Routes, Route }
  from 'react-router-dom';
import Origami from './pages/Origami';
import TicTacToe from './pages/TicTacToe';
import Casbot from './pages/Casbot';
import ThumnailGenerator from './pages/ThumnailGenerator';

const Home = () => (
  <>
    <div className="App">
      <Header />
      <About />
      <CV />
      <Experience />
      <Projects />
    </div>
  </>
)
function App() {
  return (
    <div className="appContainer">
      <CustomNav></CustomNav>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about_origami' element={<Origami />} />
            <Route path='/about_casbot' element={<Casbot />} />
            <Route path='/about_ttt' element={<TicTacToe />} />
            <Route path='/about_thumbnail' element={<ThumnailGenerator />} />
          </Routes>
        </Router>

      </div>

      <Socials />
      <Contact />
    </div >
  );
}

export default App;
