const express=require('express');

const adminData=require('./routes/admin.js')
const shopRoute=require('./routes/shop.js')
const app=express();

app.set('view engine','pug');
app.set('views','views')//to set the templating engine folder (it is set to /views by default)

app.use(adminData.routes);
app.use(shopRoute);


app.listen(3000,()=>{
    console.log("Server running on 3000");
})