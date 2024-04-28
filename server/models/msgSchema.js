const mongoose = require('mongoose');

// user schema struct for docs
const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Message = new mongoose.model("QUESTION", msgSchema);
module.exports = Message;