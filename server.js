const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

const app= express();
app.use(cors())

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`The App is listen on the ${port} port`)
})