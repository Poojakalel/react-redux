const mongoose=require('mongoose')
const colors=require('colors')
const connectDB=async()=>{

    try{

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to MOngo database ${mongoose.connection.host}`)

       
        

    }

    catch(error){
        console.log(`MongoDB database error ${error}`.bgRed.white)
    }

}

module.exports=connectDB