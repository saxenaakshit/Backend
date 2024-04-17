//app create
const express= require("express");
const app = express();

//Find PORT
require("dotenv").config();
const PORT= process.env.PORT || 3000;
//Add Middleware
app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload());
//Connect to DB
const db= require("./config/database");
db.connect();

// Connect to cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();
//Mount API route
const Upload=require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);
//Activate Server
app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})