const mongoose = require("mongoose");

mongoose.connect("mongodb//127.0.0.1:2701/scatch");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart : {
        type : Array,
        default : []
    },
    isAdmin : Boolean,
    orders : {
        type: Array,
        default : []
    },
    contact : Number,
    picture : String 
});

module.exports = mongoose.model("user",userSchema) 