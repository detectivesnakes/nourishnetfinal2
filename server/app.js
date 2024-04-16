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
const Recipes = require('./models/recipeSchema');

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
                // gen cookie for user upon match
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    expires: new Date(Date.now + 86400000),
                    httpOnly: true
                })
                res.status(200).send("logged in")
            } else {
                res.status(400).send("bad pass");
            }
        } else {
            res.status(400).send("bad email");
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

// run server
app.listen(port, ()=>{
    console.log("Server Listening");
})

// npm run dev


