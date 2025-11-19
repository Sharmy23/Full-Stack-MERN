const mongoose=require('mongoose');
const userdata = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  mail:{
        type:String,
        required:true
    },
  pass:{
        type:String,
        required:true
    
    }
})
module.exports=mongoose.model('userschema',userdata,'data1');
