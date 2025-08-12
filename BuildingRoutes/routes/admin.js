//const bodyParser = require('body-parser');
const express=require('express');
const route=express.Router();

route.use(express.urlencoded({extended:false}));

route.get('/add-products',(req,res,next)=>{
    res.send(`
  <form action="/products" method="POST">
    <input type="text" name="productName" placeholder="Enter product name" />
    <button type="submit">Submit</button>
  </form>
`);
})

route.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports=route;