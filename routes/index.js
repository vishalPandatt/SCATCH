const express = require("express");
const userModel = require("../models/owner-model")

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { error: "" });
});

router.post("/register", async (req, res) => {
    let {fullname ,email, password} = req.body; 


});


module.exports = router;