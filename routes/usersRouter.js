const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
    res.send("hey");
});

router.post("/register", async(req, res)=>{
    try{
    let {fullname, email, password} = req.body;

    bcrypt.genSalt(10, function (err, salt){
        bcrypt.hash(password, salt, async function (err, hash){
            if(err){
                return res.send(err.message);
            }
            else{
                let user = await userModel.create({
                    email,
                     password,
                    fullname
                })
                console.log(user);
            }
            }
        } );
    })
    
    let user = await userModel.create({
        email,
        password,
        fullname
    })
    console.log(user);
    }
    catch(err){
        console.log(err.message)
    }
})

module.exports = router;
