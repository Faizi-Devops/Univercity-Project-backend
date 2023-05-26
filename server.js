const express = require("express");
const dotenv = require("dotenv")

const cors = require("cors");
const connectiondb = require("./config/connectdb");

dotenv.config()

const app= express();
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())
connectiondb(process.env.DATABASE_URL)
app.listen(port,()=>{
    console.log(`The app is listening on the ${port} port`)
})




