 const icecremModel=require('../models/icecreamModel')

 const dataController=async(req,res)=>{

    try{

        const {category,Iname,Price,Image}=req.body
        if(!category||!Iname){
            return res.status(404).send({sucess:false,message:'Invalid'})

        }

        const product=await new icecremModel({category,Iname,Price,Image}).save()

        res.send({success:true,message:'success',product})




    }

    catch(error){

        console.log(error)

        res.send(error)

    }

 }

module.exports={dataController}