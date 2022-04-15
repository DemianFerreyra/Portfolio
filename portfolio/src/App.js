import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Orbit } from './components/Orbit';

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route exact path="/" element = {[<Navbar />, <Home />, <Orbit />]}/>
      </Routes>
    </div>
  );
}

export default App;
