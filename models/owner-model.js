const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
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
    products : {
        type: Array,
        default : []
    },
    picture : String,
    GST : Number,
});

module.exports = mongoose.model("owner",ownerSchema) 