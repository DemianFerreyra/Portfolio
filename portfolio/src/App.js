import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route exact path="/" element = {[<Navbar />, <Background />, <Home />]}/>
      </Routes>
    </div>
  );
}

export default App;
