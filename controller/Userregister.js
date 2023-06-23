const UserregisterModel = require("../models/Userregistration");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Userregistration = async (req, res) => {
  const { fullName, email, password,  contactNumber } = req.body;
  const user = await UserregisterModel.findOne({ email: email });
  if (user) {
    res.send({
      status: "Failed",
      message: "User email already exists",
    });
  } else {
    if (fullName && email && password && contactNumber !== "") {
      try {
        const salt = await bcrypt.genSalt(12);
        const hashpassword = await bcrypt.hash(password, salt);
        let newUser = new UserregisterModel({
        fullName: fullName,
          email: email,
          password: hashpassword,
          contactNumber: contactNumber,
        });
        await newUser.save();
        const saved_user = await UserregisterModel.findOne({
          email:email
        })
        const token = jwt.sign({userID:saved_user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})
        res.status(201).send({
          status: "Success",
          message: "User registered successfully",
          token:token
        });
      } catch (error) {
        console.log(error); // Log the error for debugging
        res.send({
          status: "Failed",
          message: "Unable to register",
        });
      }
    } else {
      res.send({
        status: "Failed",
        message: "All fields are required",
      });
    }
  }
};

const Userlogin = async(req,res) =>{
    try {
        const {email,password} = req.body;
        if(email && password){
            const user = await UserregisterModel.findOne({email:email})
            if(user != null){
                const isMatch = await bcrypt.compare(password,user.password)
                if((user.email === email) && isMatch){
                  
                  const token = jwt.sign({userID:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})
                    res.status(200).send({
                        "status":"success",
                        "message":"User login successfully",
                        "Token":token
                    })

                }
                else{
                  res.send({
                    status: "failed",
                    message: "Email or password is not correct",
                  });

                }

            }
            else{
                res.send({
                    "status":"failed",
                    "message":"You are not a register User"
                })
            }
        }else{
            res.send({
                "status":"failed",
                "message":"Alld fields are required"
            })
        }
    } catch (error) {
        
    }

}
const changePassowrd = async(req,res) =>{
  const {password,password_confirmation} = req.body;
  if(password && password_confirmation){
    if(password === password_confirmation){
      const salt  = await bcrypt.genSalt(12);
      const hashPassword = await bcrypt.hash(password,salt)

      await UserregisterModel.findByIdAndUpdate(req.user._id,{
        $set:{
          password:hashPassword
        }
      })
      res.send({
        "status":"success",
        "message":"change password successfully"
      })

    }
    else{
      res.send({
        "status":"failed",
        "message":"Password and confirm password does not matched"
      })
    }

  }
  else{
    res.send({
      "status":"failed",
      "message":"All fields are required"
    })
  }

}

const userLogged = async (req,res)=>{
  res.send({
    "user":req.user 
  })

}
const sendEmailForgetPassword  = async(req,res)=>{
  const {email} = req.body;
  if(email){
    const user = await UserregisterModel.findOne({email:email})
    const  secret = user._id + process.env.JWT_SECRET_KEY
    if(user){
      const token = jwt.sign({userID:user._id}, secret,{expiresIn:"3m"})
      


    }
    else{
      res.send({
        "status":"failed",
        "message":"Email doesn't exist"
      })
    }

  }
  else{
    res.send({
      "status":"failed",
      "message":"Email not found"
    })
  }


}
module.exports = { Userregistration, Userlogin,changePassowrd,userLogged,sendEmailForgetPassword };
  
  
