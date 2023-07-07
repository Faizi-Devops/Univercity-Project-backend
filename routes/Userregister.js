const express= require ("express")
const router = express.Router();
const {Userregistration,Userlogin,changePassowrd,userLogged,sendEmailForgetPassword,getAllUsers,deleteUser,LoggedinuserData,updateUserWithEmail} = require("../controller/Userregister.js");
const { checkuserAuth } = require("../middleware/authMiddleware.JS");


router.use('/changePassword',checkuserAuth)
router.use('/getloggeduser',checkuserAuth)





router.post('/userRegister',Userregistration)
router.post('/userLogin',Userlogin)
router.post('/forgetPassword',sendEmailForgetPassword)
router.get('/getUsers',getAllUsers)
router.delete('/deleteUser/:id',deleteUser)
router.get('/userData',LoggedinuserData)
router.put('/updateData',updateUserWithEmail)
// router.post('/userUpdate',updateUserDataLogin)




//protected routes
router.post('/changePassword',changePassowrd)
router.get('/getloggeduser',userLogged)
module.exports = router;