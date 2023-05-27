const Users=require('../models/users');
const path=require('path');
const bcrypt=require('bcrypt');

exports.signUp= async function(req,res,next){
   console.log(req.body.password);
   const response=await Users.findOne({where:{email:req.body.email}});
   console.log(response);
   if(response === null){
    bcrypt.hash(req.body.password,10,function(err,hash){
        if(err){
            console.log(err);
            return;
        }
        Users.create({
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            password:hash,
            
        }).then((value)=>{
           console.log(value); 
        res.status(200).json({success:true,message:'Sucessfully signed in'});
        }).catch(err => console.log(err))
    })
   }else{
    res.send("The user already exists");
   }
  
   }
   
  

