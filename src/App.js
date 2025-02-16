import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;
