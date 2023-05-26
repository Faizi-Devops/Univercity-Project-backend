const UserreisterModel = require("../models/Userregistration")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const Userregistration = async() =>{
    const {fullname,email,password, contactno} = req.body;
    const user = await UserreisterModel.findOne({email:email})
    if(user){
        res.send({
            "status":"Failed",
            "message":"User email already exist"
        })
    }

}