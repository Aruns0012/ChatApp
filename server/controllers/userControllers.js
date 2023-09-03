const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const loginController = async (req,res)=>{
    // res.send("inside login");
    const {email, name, password} = req.body;
    if(!email || !name || !password){
        res.json({message:"field empty"});
    }

    let status = await User.findOne({email});
    if(status){
        const passwordCompare = await bcrypt.compare(password, status.password);
        if(passwordCompare){
            res.send("logged in");
        }else{
            res.send("incorrect password")
        }
    }
    
}
const registerController = async (req, res)=>{
    // res.send("inside registration");
    try{
        const {email, name, password,cnfPassword} = req.body;

        if(!email || !name || !password || !cnfPassword){
            res.send("fields empty");
        }


        const status = await User.findOne({email:email});
        const prevName = await User.findOne({name});
        console.log(status);
        if(status){
            res.send("email already exists");
        }else if(password != cnfPassword){
            res.send("password not match")
        }else if (prevName){
            if(prevName){
                res.send("username already taken");
            }
        }else{
            // These are the two ways to create user in database

            // const user = new User({email, name, password});
            // const result = await user.save();
            // res.send(result)
            // ==================================================================
            const user = await User.create({name, email, password});
            res.send(user);
        }

    }catch(err){
        console.log(err.message);
    }

}

module.exports = {
    loginController,
    registerController
}