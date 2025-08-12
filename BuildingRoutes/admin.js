const express=require('express');

const adminR=require('./routes/admin');
const shopR=require('./routes/shop');

const app=express();

app.use(adminR);
app.use(shopR);


app.listen(3000);