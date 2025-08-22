const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData=require('./routes/admin.js')
const shopRoute=require('./routes/shop.js')
const app=express();


app.set('view engine','pug');
//app.set('views','views')//to set the templating engine folder (it is set to /views by default)


app.use(adminData.routes);
app.use(shopRoute);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000,()=>{
    console.log("Server running on 3000");
})