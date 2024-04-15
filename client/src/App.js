import './App.css';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Dashboard from './components/Dashboard';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './components/About';
import Services from './components/Services';

import Login from './components/Login';
import Register from './components/Register';

import {Routes, Route} from 'react-router-dom';
import CreateRecipes from './components/CreateRecipes';

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
        <Route exact path="/recipes" Component={Recipes}/>
        <Route exact path="/createrecipes" Component={CreateRecipes}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;