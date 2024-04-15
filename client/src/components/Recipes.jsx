import React from 'react';
import background from './kitchen.jpg';
import {NavLink} from 'react-router-dom';

const Recipes = () => {
  return (
    <div style={{backgroundImage: `url(${background})`}}>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb text-center">Recipe Search</h1>
                        <p className="lead text-center fs-4 mb-5">Let's Cook!</p>
                        <input 
                            /*value="Search your favorite food!"*/
                            type="text"
                            class="form-control"
                            name="userSearch"
                        />        
                    </div>
                    <NavLink to="/register" className="btn text-black btn-outline-info rounded-pill mt-4 width: 100">
                        Register to Create a Recipe
                    </NavLink>
                </div>
            </div>
        </section>
    </div>
);
}

export default Recipes;