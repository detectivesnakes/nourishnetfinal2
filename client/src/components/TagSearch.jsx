import React, { useState, useEffect } from 'react';
import background from './kitchen.jpg';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'; 

const TagSearch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const tag = searchParams.get('tag');

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipesByTag = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/recipes`);
                const filteredRecipes = response.data.filter(recipe => recipe.tags.includes(tag));
                setRecipes(filteredRecipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        if (tag) {
            fetchRecipesByTag();
        }
    }, [tag]);

    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb text-center">Recipes with similar tags</h1>
                            <p className="lead text-center fs-4 mb-5">Let's Cook!</p>
                            <ul className="list-group">
                                {recipes.map(recipe => (
                                    <li key={recipe._id} className="list-group-item">
                                        <h5>{recipe.title}</h5>
                                        <p>Summary: {recipe.description}</p>
                                        <p>Author: {recipe.Author}</p>
                                        <p>Tags: {Array.isArray(recipe.tags) ? recipe.tags.map(tag => <span key={tag} className="badge bg-secondary me-1">{tag}</span>) : recipe.tags}</p>
                                        <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">View Recipe</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TagSearch;
