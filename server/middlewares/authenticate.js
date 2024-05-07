const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            res.status(401).send("No Token Found")
        }else{
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await Users.findOne({_id : verifyToken._id, "tokens.token" : token});

            if (!rootUser) {
                res.status(401).send("User Not Found")
                console.log("No JWT");
            }else{
                res.status(200).send("Authorized")
                console.log("JWT found");
            }
        }
    } catch (e) {
        res.status(401).send("Error");
        console.log(e);
    }
}

module.exports = authenticate;