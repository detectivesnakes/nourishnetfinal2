// imports
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const RecipeModel = require('./models/recipeSchema')

const app = express();

// config env
dotenv.config({path: './config.env'});
require('./db/conn');
const port = process.env.PORT;

// req model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const Recipes = require('./models/recipeSchema');
const authenticate = require('./middlewares/authenticate');

// frontend cookie grab
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("hi squidward");
})

// register
app.post('/register', async (req, res)=>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("registered user");

    } catch (err) {
        res.status(400).send(err);
    }
})

// login user
app.post('/login', async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Users.findOne({email : email});
        if(user) {
            // bcrypt pass hash check
            const isMatch = await bcryptjs.compare(password, user.password);
            if(isMatch) {
                const token = await user.generateToken();

                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                })

                console.log("\nYoung Metro Trusts You"); // <<-- doesn't get to this point
                res.status(200).send("Logged In");
            } else {
                res.status(400).send("Bad Credentials");
            }
        } else {
            res.status(400).send("Bad Credentials");
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

// Recipe Database
app.post("/createrecipes", async (req, res) => {
    try {
        const recipe = new RecipeModel(req.body);
        const savedRecipe = await recipe.save();
        res.status(201).json(savedRecipe);
    } catch (err) {
        res.status(400).json(err);
    }
});

app.get("/recipes", async (req, res) => {
    try {
        const { title, ingredients, tags, Author } = req.query;
        let recipes;

        if (title && ingredients && tags && Author) {
            // Search by title, ingredients, tags, and Author
            recipes = await RecipeModel.find({
                $or: [
                    { title: { $regex: new RegExp(title, "i") } },
                    { ingredients: { $regex: new RegExp(ingredients, "i") } },
                    { tags: { $regex: new RegExp(tags, "i") } },
                    { Author: { $regex: new RegExp(Author, "i") } }
                ]
            });
        } else if (title && ingredients) {
            // Search by title and ingredients
            recipes = await RecipeModel.find({
                $or: [
                    { title: { $regex: new RegExp(title, "i") } },
                    { ingredients: { $regex: new RegExp(ingredients, "i") } }
                ]
            });
        } else if (title) {
            // Search by title
            recipes = await RecipeModel.find({ title: { $regex: new RegExp(title, "i") } });
        } else if (ingredients) {
            // Search by ingredients
            recipes = await RecipeModel.find({ ingredients: { $regex: new RegExp(ingredients, "i") } });
        } else if (tags) {
            // Search by tags
            recipes = await RecipeModel.find({ tags: { $regex: new RegExp(tags, "i") } });
        } else if (Author) {
            // Search by Author
            recipes = await RecipeModel.find({ Author: { $regex: new RegExp(Author, "i") } });
        } else {
            // If no query parameters, fetch all recipes
            recipes = await RecipeModel.find();
        }

        res.json(recipes);
    } catch (err) {
        console.error("Error fetching recipes:", err);
        res.status(500).json({ message: "Server Error" });
    }
});


//Gets the recipe info from the search bar when the recipe is clicked on
app.get('/recipes/:recipeId', async (req, res) => {
    try {
      const recipe = await RecipeModel.findById(req.params.recipeId);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

// question to us
app.post('/message', async (req, res)=>{
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name: name,
            email: email,
            message: message
        });

        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("message sent");

    } catch (err) {
        res.status(400).send(err);
    }
})

// logout
app.get('/logout', (req, res)=>{
    res.clearCookie("jwt", {path: '/'})
    res.status(200).send("User Logged Out")
})

// auth
app.get('/auth', authenticate, (req, res)=>{

})
  
// run server
app.listen(port, ()=>{
    console.log("Server Listening");
})

// backend complete
// npm run dev