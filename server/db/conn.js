const mongoose = require('mongoose');
const db = process.env.DATABASE

mongoose.connect(db)
.then(()=>{console.log("Mongo Connected");})
.catch((err)=>{console.log("Mongo Error: ", err)})