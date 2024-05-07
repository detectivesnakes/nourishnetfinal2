import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeTemplate = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/recipes/${recipeId}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  const handleTagClick = (tag) => {
    // Redirect to TagSearch page with the tag as a query parameter
    window.location.href = `/tagSearch?tag=${tag}`;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4">{recipe ? recipe.title : 'Recipe Not Found'}</h1>
          <p><strong>Description:</strong> {recipe ? recipe.description : 'N/A'}</p>
          <p><strong>Ingredients:</strong> {recipe ? recipe.ingredients : 'N/A'}</p>
          <p>
            <strong>Tags:</strong> 
            {recipe && recipe.tags.length > 0 ? (
              recipe.tags.map((tag, index) => (
                <button 
                  key={index} 
                  className="btn btn-outline-secondary btn-sm mx-1 mb-1"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))
            ) : (
              'N/A'
            )}
          </p>
          <p><strong>Author:</strong> {recipe ? recipe.Author : 'N/A'}</p>
        </div>
        {recipe && recipe.imageURI && (
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={recipe.imageURI} alt={recipe.title} className="img-fluid" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeTemplate;
