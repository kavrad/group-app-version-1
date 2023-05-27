const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const signUpRoutes=require('./routes/signUpRoute');
const sequelize=require('./utils/database');
const port=1000;
const server=express();

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname,'public')));

server.use(signUpRoutes);

sequelize.sync({force:true}).then((result)=>{
    console.log(result);
    
    server.listen(port,function(err){
        try{
            if(err){
                throw err;
            }
            console.log(`Server is running on port ${port}`);
        }catch(err){
            console.log(err);
        }
    })
}).catch(err => console.log(err));

