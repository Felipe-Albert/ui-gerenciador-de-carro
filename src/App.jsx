import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ListCar from './pages/ListCar.jsx';
import SaveCar from './pages/SaveCar.jsx';

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<ListCar />} />
          <Route path="/home" element={<ListCar />} />
          <Route path="/cadastrar" element={<SaveCar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;