import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

//Function that Grabs each Event (Input data) and sets each input into a useState where our data will be stored for creating new Recipes
function CreateRecipes  () {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [ingredients, setIngredients] = useState()
    const [tags, setTags] = useState()
    const navigate = useNavigate()

    //Once the User clicks submit each Event (e) gets posted to the database and get's loged whether it succesfully succeded for failed.
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createRecipe", {title, description, ingredients, tags})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }


    return (
        //Page Elements and Structure
        <div className = "d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Recipe</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder='Enter Recipe Name' className='form-control' 
                        onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder='Enter Recipe Description' className='form-control' 
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Ingredients</label>
                        <input type="text" placeholder='Enter Recipe Ingredients' className='form-control' 
                        onChange={(e) => setIngredients(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Tags</label>
                        <input type="text" placeholder='Enter Recipe Tags' className='form-control' 
                        onChange={(e) => setTags(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipes;