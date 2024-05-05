import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">Profile</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/createrecipes">Add</NavLink>
              </li>

              {/*
              <li className="nav-item">
                <NavLink className="nav-link" to="/RecipeTemplate">Template</NavLink>
              </li>
              */}

              <li className="nav-item">
                <NavLink className="nav-link" to="/recipes">Browse</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>
            
            <NavLink to="/login" className="bt btn-outline-primary ms-2 px-4 rounded-pill">
              <i className="fa fa-sign-in"></i>Login</NavLink>
            <NavLink to="/register" className="bt btn-outline-primary ms-2 px-4 rounded-pill">
              <i className="fa fa-user-plus"></i>Register</NavLink>
            <NavLink to="/logout" className="bt btn-outline-primary ms-2 px-4 rounded-pill">
              <i className="fa fa-sign-out"></i>Log Out</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;