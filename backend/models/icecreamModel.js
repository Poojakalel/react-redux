const mongoose=require('mongoose')

const icecreamSchema=new mongoose.Schema({
    category:{
        type:String,
        required:[true,'category is required']
    },

    Iname:{
        type:String,
        required:[true,'Iname is required']
    },

    Price:{
        type:Number,
        
    },

    Image:{

        type:String

    }

})

// module.exports=mongoose.model('dairy',icecreamSchema)

const model=new mongoose.model('dairy',icecreamSchema)

module.exports=model