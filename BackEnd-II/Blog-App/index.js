const express = require('express');
const app= express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

//import routes
const blog = require("./routes/blog");

//mount
app.use("/api/v1",blog);

//establish connection with DB
const connectWithDb=require("./config/database");
connectWithDb();

//start with server
app.listen(PORT,()=>{
    console.log(`App is started at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>HELlo there</h1>");
})