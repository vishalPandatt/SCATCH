const express = require("express");
const router = express.Router();
const {registerUser,
    loginUser,
    logout
} = require("../controller/authController");

router.get("/", (req, res) => {
    res.send("hey");
});

router.post("/register", registerUser);

module.exports = router;