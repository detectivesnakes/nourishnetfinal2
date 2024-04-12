import React from 'react';
import background from './kitchen.jpg';

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
                </div>
            </div>
        </section>
    </div>
);
}

export default Recipes;