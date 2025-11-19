
const express=require('express');
const cors=require('cors');
const routerr=require('./Route/Route');
const mongoose=require('mongoose');
const app=express();
app.use(cors());
app.use(express.json());
app.use(routerr);

mongoose.connect("mongodb://localhost:27017/sample").then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})
app.listen(5000,()=>{
    console.log("http://localhost:5000/");
})

