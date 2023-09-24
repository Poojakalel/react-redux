const express=require('express')

const router=express.router();
import {getAllProducts} from '../controller/productController'

router.get('/products',getAllProducts)