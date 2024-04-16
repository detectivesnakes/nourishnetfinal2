import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateRecipes = () => {
    const [recipeData, setRecipeData] = useState({
        title: "",
        description: "",
        ingredients: "",
        tags: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipeData({
            ...recipeData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/createrecipes", recipeData);
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
                        <button type="submit" className="btn btn-primary my-2 mb-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateRecipes;