/*
    -server ko start krna
    -database se connect krna
*/
require("dotenv").config()
const app=require('./src/app.js')
const mongoose = require("mongoose")
const connectToDb=require('./src/config/database.js')

connectToDb()

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})