const express=require('express');

const app=express();

app.use('/',(req,res,next)=>{
    console.log('m1');
    next();
})

app.use('/add',(req,res,next)=>{
    console.log('m1');
    res.send('<h1>prodcuts</h1>')
})

app.use('/',(req,res,next)=>{
    console.log('m1');
    res.send('heloo')
})





app.listen(3000);