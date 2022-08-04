const mongoose = require("mongoose");

const extrasModel = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    itemAndPrice:{
        type:[String],
        required:true
    }
})

module.exports=mongoose.model("extrasModel",extrasModel);