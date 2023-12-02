const express = require('express');
const router = express.Router();

//Import controllers
const {likePost,unlikePost}= require("../controllers/likeController");
const {createComment}= require("../controllers/commentController")
const{createPost}= require("../controllers/postController")
const{getAllPosts}= require("../controllers/postController")


//Create Mapping

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts/get",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost)

//export
module.exports= router;