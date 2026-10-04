const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports.isLoggedIn = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        if (!token) {
            return res.status(401).flash("You are not logged in").redirect("/");
        }

        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        let user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(401).flash("Invalid token").redirect("/");
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).flash("Invalid token").redirect("/");
    }
};