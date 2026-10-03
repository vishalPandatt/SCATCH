const {generateToken} = require("../utils/generateToken")

const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.registerUser = ()=>{
    async (req, res) => {
        try {
            const { fullname, email, password } = req.body;
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).send("User already exists");
            }
            

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const user = await userModel.create({
                fullname,
                email,
                password: hash
            });
            let token = generateToken(user);
            res.cookie("token", token, { httpOnly: true });
            res.send(token);
            console.log(token);
            console.log(user);
            res.status(201).send("User registered successfully");
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Something went wrong");
        }
    }
}

module.exports.loginUser = async (req, res) => {
    let { email, password } = req.body;

    let user = await userModel.findOne({email: email});
    if(!user) {
      return res.send("Email or password is incorrect");
    }
}