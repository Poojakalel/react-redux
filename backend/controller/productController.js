import sweetModel from '../models/sweetModel'

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


export {getAllProducts}
