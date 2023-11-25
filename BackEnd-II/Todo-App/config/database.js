const mongoose= require('mongoose');

//all the things defined under .env loaded
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("DB connection Successful"))
    .catch((error)=>{
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);

    });
}

module.exports=dbConnect;