const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const port=1000;
const server=express();
server.use(express.static(path.join(__dirname,'public')));
server.get('/',(req,res)=>{
       res.sendFile(path.join(__dirname,'views','signUp.html'));
})
server.listen(port,(err)=>{
   if(err){
     console.log(err);
     return;
   }
    console.log(`Server is running on port ${port}`);
})