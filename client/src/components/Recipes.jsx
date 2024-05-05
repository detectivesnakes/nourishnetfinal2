import React, { useState } from 'react';
import background from './kitchen.jpg';
import { NavLink, Link } from 'react-router-dom'; // Importing Link
import axios from 'axios';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import Trending from "../components/Trending";


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
                            <List>
                                <SLink to={'/cuisine/Italian'}>
                                <FaPizzaSlice />
                                <h4>Italian</h4>
                                </SLink>
                                <SLink to={'/cuisine/American'}>
                                    <FaHamburger />
                                    <h4>American</h4>
                                </SLink>
                                <SLink to={'/cuisine/Thai'}>
                                    <GiNoodles />
                                    <h4>Thai</h4>
                                </SLink>
                                <SLink to={'/cuisine/Japanese'}>
                                    <GiChopsticks />
                                    <h4>Japanese</h4>
                                </SLink>

                            </List>

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
                        <Trending />
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


const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
    
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;

    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;

        }
        h4{
            color: white;
        }

    }


`;

export default Recipes;
