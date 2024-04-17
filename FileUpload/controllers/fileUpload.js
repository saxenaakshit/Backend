const File= require("../models/File");

//localFileUpload --> Handler function

 exports.localFileUpload = async (req,res)=>{

    try{
//fetch file from request
const file= req.files.file;
console.log("FILE READ",file);

//create path where file needs to be stored
let path= __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
console.log("Path is-->"+path);
//add path to the move function
file.mv(path , (err)=>{
    console.log(err);
});

//create a successful response
res.json({
    success:true,
    messgae:'Local File Uploaded Seccessfully'
})
    }
    catch(err){
        console.log(err);
    }
 }