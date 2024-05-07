import React from 'react'
import About from './About'
import Services from './Services'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-4 mb-2">
                            <h1 className="display-4 fw-bolder mb-2 text-center">NourishNet</h1>
                            <p className="lead text-center fs-4">Take control of your diet!</p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/register" className="btn btn-light me-4 rounded">Get Started</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
        </div>
    );
}

export default Home;