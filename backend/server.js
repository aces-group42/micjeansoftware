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
//Post food to the Database
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

//Get One food Item
app.get("/food/get/:id",async(req,res)=>{
    try{
        const result = await foodModel.findOne({id:req.params.id});
        res.status(200).json(result);
    }catch(error){
        res.status(404).json({message:"Food not found"})
    }
})

//Get Categories
app.get("/category/:category",async(req,res)=>{
    try {
        const result = await foodModel.find({category:req.params.category})
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({message:"Invalid Category"})
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
