const mongoose = require('mongoose');
const db = process.env.DATABASE

mongoose.connect(db, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongo Connected");
}).catch((err)=>{
    console.log("Mongo Error: ")
    console.log(err)
})