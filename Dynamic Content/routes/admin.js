const express=require('express');
const path = require('path');

const route=express.Router();

route.use(express.urlencoded({extended:false}));


route.use('/add-products',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','addproduct.html'));
})

route.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
module.exports=route;