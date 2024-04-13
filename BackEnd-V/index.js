

const express = require('express');    
const app= express();
const port= 3000;

//middleware
app.use(express.json());

//get request 
app.get('/', (req,res)=>{
    res.send("hello world!");
})

app.post('/test', (req,res)=>{res.send("recieved the request")
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});