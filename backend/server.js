const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const foodModel = require("./models/foodModel")

// Server
const app = express()

// Middlewares
app.use(express.json())
app.use(cors({
    origin:"*"
}))

// Routes
app.post("/upload",async(req,res)=>{
    const {name,imagePreview,category,price,whatYouGet} = req.body

    try{
        const result = await foodModel.create({
            name,
            imagePreview,
            category,
            price,
            whatYouGet,
            createdAt: new Date().getTime()
        })
        res.status(200).json({message:"Success"})
    }catch(error){
        res.json(error.message)
    }
})




// Connecting to DataBase
const DB = process.env.DB
mongoose.connect(DB,(err)=>{
    if(err) console.log("Error Connecting")
    else {
        console.log("Database is OK")}
})


// PORT
const PORT = process.env.PORT || 5000
// LOCALHOST
const HOST = process.env.HOST
app.listen(PORT,()=>{
    console.log(`Server live on ${HOST}:${PORT}...`)
})
