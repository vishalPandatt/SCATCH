const express = require("express");
const app = express();

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const indexRoute = require("./routes/index");

const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongoose-connections");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/owner", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/", indexRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});