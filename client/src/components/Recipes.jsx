import React, { useState } from 'react';
import background from './kitchen.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';

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


const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    margin-left: 2rem;
    
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
