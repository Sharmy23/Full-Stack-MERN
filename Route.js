const express=require('express');
const userschema=require('../schema/userschema');
const routerr=express.Router();

//add
routerr.post('/add',async(req,res)=>{
const{name,mail,pass}=req.body;
if(name!==""&& mail!=="" && pass!==""){
    try{
        const newuser=new userschema({name,mail,pass});
        await newuser.save();
        res.status(200).json({message:"data add sucess"});
    }
    catch(err){
        console.error("error saving user:",err);
        res.status(500).json({
            message:"Failed to save data",err
        });
    }
}
else{
    req.status(400).json({message:"invalid"});
}
});

//get
routerr.get('/users',async(req,res)=>{
    const alluser=await userschema.find({});
    res.send(alluser);
})


//update
routerr.put('/update/:id',async(req,res)=>{
    const _id=req.params.id;
    const updateuser=await userschema.findByIdAndUpdate({_id},req.body);
    if(updateuser){
            res.status(200).json({message:"update user"});
    }
    else{
        req.status(400).json({message:"not found"});
    }
    })

//delete
routerr.delete('/delete/:id',async(req,res)=>{
    const _id=req.params.id;
    const deleteuser=await userschema.findByIdAndDelete({_id});
    if(deleteuser){
            res.status(200).json({message:"delete user"});
    }
    else{
        req.status(400).json({message:"not found"});
    }
    })

    module.exports=routerr;

