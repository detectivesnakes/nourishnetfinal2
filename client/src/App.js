import './App.css';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Dashboard from './components/Dashboard';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import CreateRecipes from './components/CreateRecipes';
//import Testpage from './components/Testpage';

import { Routes, Route } from 'react-router-dom';
import RecipeTemplate from './components/RecipeTemplate';

//import ProtectedRoute from './ProtectedRoute';
import { useState, useEffect } from 'react';


function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json"
        }, credentials: "include"
      });
      if (res.status === 200) {
        setauth(true)
        setauth1(false)
      }
      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Navbar auth={auth}/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/services" Component={Services} />
        <Route exact path="/contact" Component={Contact} />

        <Route exact path="/recipes" Component={Recipes} />
        <Route exact path="/createrecipes" Component={CreateRecipes} />
        <Route exact path="/testpage" Component={Testpage} />
        <Route path="/recipe/:recipeId" element={<RecipeTemplate />} />

        <Route exact path="/login" element={<Login />} auth={auth} />
        <Route exact path="/register" element={<Register />} auth={auth1} />
        <Route exact path="/dashboard" element={<Dashboard />} auth={auth} />
        <Route exact path="/logout" element={<Logout />} auth={auth1} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;