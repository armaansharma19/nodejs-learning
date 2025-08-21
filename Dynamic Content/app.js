const express=require('express');

const adminRoute=require('./routes/admin.js')
const shopRoute=require('./routes/shop.js')
const app=express();


app.use(adminRoute);
app.use(shopRoute);


app.listen(3000,()=>{
    console.log("Server running on 3000");
})