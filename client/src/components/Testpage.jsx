import React from 'react';
import {NavLink} from 'react-router-dom';

const Testpage = () => {
  return (
    <div>
      FOR ADMIN ONLY
      <div className="col-0 width: 150">
        <NavLink to="/recipeform" className="btn text-black btn-outline-info rounded-pill pb-2 w-50 m-2 mb-2">
          Create Recipe
        </NavLink>
      </div>
    </div>
  );
}

export default Testpage;