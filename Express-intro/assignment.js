const express=require('express');

const app=express();

app.use('/',(req,res,next)=>{
    console.log('/ route');
    next();
})
app.use('/add',(req,res,next)=>{
    res.send('<h1>Hellloooo</h1>')
})

app.listen(3000);