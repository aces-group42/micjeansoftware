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
        res.json(result)
    }catch(error){
        res.json(error.message)
    }
})




// Connecting to DataBase
const DB = process.env.DB
mongoose.connect(DB,()=>{
    console.log("Database is live...")
})


// PORT
const PORT = process.env.PORT || 5000
// LOCALHOST
const HOST = process.env.HOST
app.listen(PORT,()=>{
    console.log(`Server live on ${HOST}:${PORT}...`)
})
