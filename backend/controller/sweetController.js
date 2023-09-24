const sweetModel=require('../models/sweetModel')

const getAllProducts=async(req,res)=>{
    try{
        const product=await sweetModel.find();

        res.send({
            success:true,
            product
        })
    }
    catch(error){
        res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

const sweetController=async(req,res)=>{

    try{

        const {category,Stype,Price,Image}=req.body
        if(!category||!Stype){
            return res.status(404).send({sucess:false,message:'Invalid'})

        }

        
        const product=await new sweetModel({category,Stype,Price,Image}).save()

        res.send({success:true,message:'success',product})

        

    }

    catch(error){
        console.log(error)
    }
}

module.exports={sweetController,getAllProducts}