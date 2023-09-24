const mongoose=require('mongoose')

const sweetSchema=new mongoose.Schema({

    category:{
        type:String,
        required:[true,'category is required']
    },

    Stype:{
        type:String,
        required:[true,'type is required']
    },

    Price:{
        type:Number
    },

    Image:{
        type:String
    },




})


const model=new mongoose.model('sweet',sweetSchema)

module.exports=model

