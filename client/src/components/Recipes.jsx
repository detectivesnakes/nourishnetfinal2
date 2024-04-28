import React, { useState } from 'react';
import background from './kitchen.jpg';
import { NavLink, Link } from 'react-router-dom'; // Importing Link
import axios from 'axios';

const Recipes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('title'); 
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async () => {
        try {
            const params = {
                [searchType]: searchTerm.trim(),
            };
            const response = await axios.get(`http://localhost:3000/recipes`, { params });
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
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
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <select 
                                    className="form-select"
                                    onChange={(e) => setSearchType(e.target.value)}
                                >
                                    <option value="title">By Title</option>
                                    <option value="ingredients">By Ingredients</option>
                                    <option value="tags">By Tags</option>
                                    <option value="Author">By Author</option>
                                </select>
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
                                        <h5>{recipe.title}</h5> {/* Displaying title at the top */}
                                        <p>Summary: <br/>{recipe.description}</p>
                                        <p>Author: {recipe.Author}</p>
                                        <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">View Recipe</Link> {/* View Recipe button at the bottom */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-0 d-flex justify-content-center">
                            <NavLink to="/register" className="btn text-black btn-outline-info rounded-pill mt-4 w-35">
                                Join Us to Submit!
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Recipes;
