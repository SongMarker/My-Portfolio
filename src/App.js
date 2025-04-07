import './App.css';
import Nav from './Nav';
import Introduce from './introduce/Introduce';

function App() {
  return (
  <div className='app-wrapper'>
      <div className='top'>
        <Nav />
        <Introduce />
      </div>
  </div>
   
  );
}

export default App;
