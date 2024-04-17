const File= require("../models/File");
const cloudinary = require("cloudinary").v2;
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

 function isFileTypeSupported(type, supportedType){
    return supportedType.includes(type);
 }

 async function uploadFileToCloudinary(file,folder){
    const options= {folder};
    options.resource_type="auto";
return await cloudinary.uploader.upload(file.tempFilePath);
 }

 //handeler of the image upload

 exports.imageUpload = async(req,res) =>{

    try{
        //data fetch
        const { name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType=file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "Invalid File Type"
            });
        }
        //if file format is supported
        const response = await uploadFileToCloudinary(file,"AkshitFolder");
        console.log(response);
        //save entry in db
        const fileData= await File.create({
            name,
            tags,
            email,
            imageurl:response.secure_url
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })
    }
    
    catch(err){
        console.error(err);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
 }

 //video upload handler
exports.videoUpload = async (req,res)=>{
    try{
        //fetch data
        const {name, tags, email}=req.body;
        console.log(name,tags,email);
        
        const file= req.files.videoFile;

        //validation
        const supportedTypes = ["mp4","mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);


        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'FIle format not supported',
            })
        }

        //file format supported 
        console.log("Uploading to AkshitFolder");
        const response = await uploadFileToCloudinary(file,"Codehelp");
        console.log(response);


        //save entry in db
        const fileData= await File.create({
            name,
            tags,
            email,
            videourl:response.secure_url
        })

        res.json({
            success:true,
            videourl:response.secure_url,
            message:'Video Successfully Uploaded',
        })
    }

    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}
