const express=require('express');
const {sweetController, getAllProducts}=require('../controller/sweetController')
const router=express.Router();


router.post("/",sweetController)

router.get('/product',getAllProducts)




module.exports=router
