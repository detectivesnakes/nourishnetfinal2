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
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import TagSearch from './components/TagSearch';

function App() {

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 200){
        setauth(true);
        setauth(false);
      }

      if (res.status === 401){
        setauth(false);
        setauth(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div className='App'>
      <Navbar auth={auth}/>
      <Routes>
        
        <Route path="/tagSearch" element={<TagSearch />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/recipes" element={<Recipes />} />
        <Route path="/createrecipes" element={<CreateRecipes />} />

        <Route path="/recipe/:recipeId" element={<RecipeTemplate />} />

        <Route path="/login"     element={<Login />}     auth={false}/>
        <Route path="/register"  element={<Register />}  auth={false}/>
        <Route path="/dashboard" element={<Dashboard />} auth={true}/>
        <Route path="/logout"    element={<Logout />}    auth={true}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;