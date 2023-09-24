const express=require('express');
const {dataController}=require('../controller/authController')
const router=express.Router();

router.post("/",dataController)



module.exports=router
