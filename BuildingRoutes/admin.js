const express=require('express');
const path=require('path');
const adminR=require('./routes/admin');
const shopR=require('./routes/shop');

const app=express();

app.use(adminR);
app.use(shopR);

app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','notF.html'));
})
app.listen(3000);