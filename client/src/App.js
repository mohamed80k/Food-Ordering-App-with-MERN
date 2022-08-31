import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Components/Navbar';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Homescreen from './Screens/Homescreen';
import Cartscreen from './Screens/Cartscreen';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Router>
        <Routes>
       <Route path="/" element={<Homescreen/>} />
       <Route path="/cart" element={<Cartscreen/>}/>
       </Routes>
     </Router>
    
    </div>
  );
}

export default App;
