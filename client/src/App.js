import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/services" Component={Services}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/register" Component={Register}/>
        <Route exact path="/dashboard" Component={Dashboard}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;