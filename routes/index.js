const express = require("express");
const userModel = require("../models/owner-model");
const { isLoggedIn } = require("../middleware/isLoggedIn");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { error: "" });
});

router.post("/shop", isLoggedIn, async (req, res) => {
    res.render("shop", { user: req.user });
});


module.exports = router;