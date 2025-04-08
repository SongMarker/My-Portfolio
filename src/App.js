import './App.css';
import Nav from './Nav';
import Introduce from './introduce/Introduce';
import AboutMe from './aboutMe/AboutMe';

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
  </div>
   
  );
}

export default App;
