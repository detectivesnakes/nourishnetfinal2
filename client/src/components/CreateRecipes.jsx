import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateRecipes = () => {
    const navigate = useNavigate();
    const [recipeData, setRecipeData] = useState({
        title: "",
        description: "",
        ingredients: "",
        tags: "",
        imageURI: ""
    });

    const [picturedAdded, setPicturedAdded] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // If the name is 'tags', split the value by commas to create an array of tags
        if (name === 'tags') {
            const tagsArray = value.split(',').map(tag => tag.trim());
            setRecipeData({
                ...recipeData,
                [name]: tagsArray
            });
        } else if (name === 'imageURI' && value && !picturedAdded) {
            // If the name is 'imageURI' and there is a value, and 'Pictured' tag hasn't been added yet
            setRecipeData({
                ...recipeData,
                [name]: value,
                tags: [...recipeData.tags, 'Image'] // Automatically add 'Image' tag
            });
            setPicturedAdded(true); // Set picturedAdded to true
        } else {
            setRecipeData({
                ...recipeData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Retrieve the username from local storage
            const username = localStorage.getItem('username');
            
            // Include the username in the recipe data
            const dataToSend = {
                ...recipeData,
                Author: username 
            };

            // Send the recipe creation request to the server
            await axios.post("http://localhost:3000/createrecipes", dataToSend);
            navigate('/');
        } catch (error) {
            console.error("Error submitting recipe:", error);
        }
    };

    return (
        <div className="container shadow-lg my-5">
            <div className="row justify-content-end">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form order-2">
                    <h1 className="display-4 fw-bolder my-2">Add Recipe</h1>
                </div>
                <div className="col-md-6 p-5">
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="mb-2">
                            <label htmlFor="title" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Enter Recipe Name"
                                value={recipeData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="description" className="form-label">
                                Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                placeholder="Enter Recipe Description"
                                value={recipeData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="ingredients" className="form-label">
                                Ingredients
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ingredients"
                                name="ingredients"
                                placeholder="Enter Recipe Ingredients (comma-separated)"
                                value={recipeData.ingredients}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="tags" className="form-label">
                                Tags
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="tags"
                                name="tags"
                                placeholder="Enter Recipe Tags (comma-separated)"
                                value={recipeData.tags}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="imageURI" className="form-label">
                                Image URI
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="imageURI"
                                name="imageURI"
                                placeholder="Enter Image URI"
                                value={recipeData.imageURI}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary my-2 mb-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateRecipes;
