const express = require("express");
const router= express.Router();


//import controller
const {createTodo}= require("../controllers/CreateTodo");

//define API routes
router.post("/createTodo",createTodo);

module.export=router;