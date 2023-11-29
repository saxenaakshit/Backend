const express = require('express');
const router = express.Router();

//Import controllers
const {dummyLink}= require("../controllers/likeController");
const {createComment}= require("../controllers/commentController")


//Create Mapping
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);


//export
module.exports= router;