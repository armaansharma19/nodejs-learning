const express=require('express');
const path=require('path');

const route=express.Router();



route.use('/users',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./htm2.html'));
})
route.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./htm1.html'));
})

module.exports=route;