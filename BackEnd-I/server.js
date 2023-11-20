//SERVER INSTANTIATE
const express = require('express')
const app = express();

//ACTIVATE THE SERVER ON 3000 PORT
app.listen(3000, ()=>{
console.log("Server Started at port no. 3000")
});

//ROUTES
//get request
app.get('/',(request, response)=>{
    response.send("hello Hi Guys")
})

//used to parse req.body in express -> PUT or POST
const bodyParser= require("body-parser");

//used to parse JSON data and add it to request.Body object
app.use(bodyParser.json());


//post request
app.post('/api/cars',(request,response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted Successfully")
})