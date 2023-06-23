const express= require ("express")
const router = express.Router();
const {Userregistration,Userlogin,changePassowrd,userLogged,sendEmailForgetPassword} = require("../controller/Userregister.js");
const { checkuserAuth } = require("../middleware/authMiddleware.JS");


router.use('/changePassword',checkuserAuth)
router.use('/getloggeduser',checkuserAuth)





router.post('/userRegister',Userregistration)
router.post('/userLogin',Userlogin)
router.post('/forgetPassword',sendEmailForgetPassword)

//protected routes
router.post('/changePassword',changePassowrd)
router.get('/getloggeduser',userLogged)
module.exports = router;