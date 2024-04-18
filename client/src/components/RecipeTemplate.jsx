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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container my-5 py-5">
      <h1 className="display-4">{recipe ? recipe.title : 'Recipe Not Found'}</h1>
      <p><strong>Description:</strong> {recipe ? recipe.description : 'N/A'}</p>
      <p><strong>Ingredients:</strong> {recipe ? recipe.ingredients : 'N/A'}</p>
      <p>
        <strong>Tags:</strong> 
        {recipe && recipe.tags.length > 0 ? (
          recipe.tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary mx-1">{tag}</span>
          ))
        ) : (
          'N/A'
        )}
      </p>
      <p><strong>Author:</strong> {recipe ? recipe.Author : 'N/A'}</p>
    </div>
  );
};

export default RecipeTemplate;
