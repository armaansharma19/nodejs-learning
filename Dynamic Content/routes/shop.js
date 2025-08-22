const express=require('express');
const path = require('path');

const adminData=require('./admin');
const route=express.Router();

route.get('/',(req,res,next)=>{
   // console.log('shop.js',adminData.products);
   // res.sendFile(path.join(__dirname, '../views', 'shop.html'));
   res.render('shop')
})

module.exports=route;