const express=require('express')
const sweetModel=require('../backend/models/sweetModel')

const dotenv=require('dotenv')
dotenv.config()
const colors=require('colors')
var cors = require('cors')



const morgan=require('morgan')

const connectDB = require('./config/db')
connectDB();

const app=express()

app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/data",require("../backend/Routes/authRoute"))

app.use("/api/v1/sweet",require("../backend/Routes/sweetRoute"))

 app.use('/api/v1/sweet',require('../backend/Routes/sweetRoute'))






app.get('/',(req,res)=>{
    res.send('api is working')
})

// app.post('/data',async(req,res)=>{
//     console.log(req.body)
//     let data=await connectDB()

//     let result=await data.insert(req.body)
//     res.send(result)
// })

app.post('/add-product',async(req,res)=>{
    let product=new sweetModel(req.body)
    let result=await product.save();
    res.send(result)
})

app.delete("/sweets/:id",async(req,res)=>{
    const result= await sweetModel.deleteOne({_id:req.params.id})
    res.send(result)

})

app.get("/sweets/:id",async(req,res)=>{
    let result=await sweetModel.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }
    else{
        res.send({result:"NO record found"})
    }
})

app.put('/sweets/:id',async(req,res)=>{
    let result=await sweetModel.updateOne(
        {_id:req.params.id},
        {
        $set:req.body
        }
    )

    res.send(result)
})

app.listen(4000)