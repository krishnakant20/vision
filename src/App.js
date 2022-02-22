import './App.css';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import OnlineEye from './components/OnlineEye/OnlineEye';
import AIEye from './components/aieye/AIEye';
import ColourfullEye from './components/colourful/ColourfullEye';

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <div className='container'>

          <Routes >

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/onlineEye' element={<OnlineEye />} />
            <Route path='/aiEye' element={<AIEye />} />
            <Route path='/colourfullEye' element={<ColourfullEye />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
