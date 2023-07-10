const express = require("express");
const dotenv = require("dotenv")
const multer = require("multer")

const cors = require("cors");
const connectiondb = require("./config/connectdb");
const userRegisterroute = require("./routes/Userregister")
const addStating = require("./routes/AddState")
const addCatogy = require("./routes/AddCategory")
const subSubcategory = require("./routes/AddSub")
const logindetail = require('./routes/Logindetail')
const changePassword = require('./routes/Password')
const complain = require('./routes/Complain')

dotenv.config()

const app= express();
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())
app.use('/api',userRegisterroute)
app.use('/new',addStating)
app.use('/cat',addCatogy)
app.use('/sub',subSubcategory)
app.use('/log',logindetail)
app.use('/sub',changePassword)
app.use('/comp',complain)
app.use('/uploads',express.static('uploads'))
app.use('/complaints', express.static('complaints'));

connectiondb(process.env.DATABASE_URL)


app.listen(port,()=>{
    console.log(`The app is listening on the ${port} port`)
})





