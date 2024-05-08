const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    directions: [{
        type: String,
        required: true
    }],
    tags: [{
        type: String,
        required: true
    }],
    imageURI: {
        type: String,
        
    },
    Author: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    dislikes: {
        type: Number,
        required: true
    }
});


const RecipeModel = mongoose.model("Recipe", recipeSchema);
module.exports = RecipeModel;