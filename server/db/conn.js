const mongoose = require('mongoose');
const db = process.env.DATABASE

mongoose.connect(db, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log("Mongo Connection Error")
    console.log(err)
})