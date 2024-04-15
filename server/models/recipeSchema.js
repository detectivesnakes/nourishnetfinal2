const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// recipe schema struct for docs
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: [{
        ingredient: {
            type: String,
            required: true
        }
    }]
})

const Recipes = new mongoose.model("RECIPE", recipeSchema);
module.exports = Recipes;