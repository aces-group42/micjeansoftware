const mongoose = require("mongoose")

const foodModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imagePreview:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    whatYouGet:{
        type:String
    },
    createdAt:{
        type:Number,
    }
})

module.exports=  mongoose.model("foodModel",foodModel)