const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model")

router.get("/", (req, res) => {
    res.send("hey");
});

router.post("/register", async(req, res)=>{
    try{
    let {fullname, email, password} = req.body;
    
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
