const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const fileSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

//post middleware
fileSchema.post("save", async function(doc){
try{
    console.log("DOC",doc);

    //transporter
    let transporter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        },
    });

    //send mail
    let info = await transporter.sendMail({
        from:`AkshitTheHelper`,
        to: doc.email,
        subject: "New file has been uploaded to CLoudinary",
        html:`<h2>Hello Sir,</h2> <p>File upload krne kaa try kr rhe ho kya View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`
    })

    console.log(info);

}
catch(error){
    console.error(error);
}
})

const File= mongoose.model("File", fileSchema);
module.exports=File;