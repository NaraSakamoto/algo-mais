import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <section className="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Navbar></Navbar>
      </section>
    </Router>
  );
}

export default App;
