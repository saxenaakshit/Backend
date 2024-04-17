const express= require('express');
const router = express.Router();

//imageUpload, videoUpload, imageReducerUpload,
const { localFileUpload,imageUpload,videoUpload}= require("../controllers/fileUpload");

//api route
router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload);

module.exports=router;