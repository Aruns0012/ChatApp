const mongoose = require("mongoose");

const messageModel = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    reciever:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    },
})

const Message = mongoose.model("Message", messageModel);
module.exports = Message;