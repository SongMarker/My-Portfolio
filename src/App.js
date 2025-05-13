import './App.css';
import Nav from './nav/Nav';
import Introduce from './introduce/Introduce';
import AboutMe from './aboutMe/AboutMe';
import Skills from './skills/Skills';
import Project from './project/Project';
import Archiving from './archiving/Archiving';
import End from './end/End';

function App() {
  return (
  <div className='app-wrapper'>
      <div className='top'>
        <Nav />
        <Introduce />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Archiving />
      </div>
      <div>
        <End />
      </div>
  </div>
   
  );
}

export default App;
