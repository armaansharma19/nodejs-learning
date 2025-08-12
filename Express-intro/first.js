const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("M1");
    next();
})
app.use((req,res,next)=>{
    res.send('<h1>Heyyy</h1>')
})

app.listen(3000);
