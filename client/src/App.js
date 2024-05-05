import './App.css';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Dashboard from './components/Dashboard';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import CreateRecipes from './components/CreateRecipes';
import { Routes, Route } from 'react-router-dom';
import RecipeTemplate from './components/RecipeTemplate';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/recipes" element={<Recipes />} />
        <Route path="/createrecipes" element={<CreateRecipes />} />
        <Route path="/recipe/:recipeId" element={<RecipeTemplate />} />

        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;