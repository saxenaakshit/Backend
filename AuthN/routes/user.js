const express = require("express");
const route = express.Router();

const {login,signup}= require("./controllers/Auth");

//Router.post("/login",login);
Router.post("/signup",signup);

module.exports = router;