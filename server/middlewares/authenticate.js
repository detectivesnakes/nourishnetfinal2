const Users = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).send("No JWT Found")
        }else{
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await Users.findOne({_id: verifyToken._id, "tokens.token": token});

            if(!rootUser){
                res.status(401).send("User Not Found");
            }else{
                res.status(200).send("Auth Successful")
            }
        }
        next()
    } catch (err) {
        res.status(401).send("error")
        console.log(err);
    }
}

module.exports = authenticate;