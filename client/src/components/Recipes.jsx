import React, { useState } from 'react';
import background from './kitchen.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Recipes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/recipes?title=${searchTerm}`);
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb text-center">Recipe Search</h1>
                            <p className="lead text-center fs-4 mb-5">Let's Cook!</p>
                            <div className="input-group mb-3">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by title..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button 
                                    className="btn btn-outline-secondary" 
                                    type="button"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                            <ul className="list-group">
                                {recipes.map(recipe => (
                                    <li key={recipe._id} className="list-group-item">
                                        <h5>{recipe.title}</h5>
                                        <p>Summary: <br></br>{recipe.description}</p>
                                        <p>Author: {recipe.Author}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <NavLink to="/register" className="btn text-black btn-outline-info rounded-pill mt-4">
                            Register to Create a Recipe
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Recipes;
