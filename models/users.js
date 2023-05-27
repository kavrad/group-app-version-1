const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/database');
const Users=sequelize.define('userdetails',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
 
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        
        
    },
    phoneNumber:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
    
})
module.exports=Users;