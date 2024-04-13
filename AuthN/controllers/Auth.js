const bcrypt= require("bcrypt");
const User = require("../models/user");
const { response } = require("express");

exports.signup = async (rrq,res)=>{
    try{
        //get dataa
        const {name, email, password, role}= req.body;
        //check if user already exits
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already exists',
            });
        }
        let hashedPassword;
        //secure password
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:'Error while hashing password'
            })
        }

        //create entry for User
        const user = await User.create({
            name, enmail, passoword:hashedPassword,role
        })

        return res.status(200).json({
            success:true,
            message:'User Created Suceessfully',
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be registered, pleaase try again later'
        });

    }
}


