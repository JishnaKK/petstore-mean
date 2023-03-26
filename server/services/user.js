const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://jishnakk:jishna8086@cluster0.4vycihm.mongodb.net/PETSTORE',()=>{
    console.log('mongo connected successfully');
})

const User=mongoose.model('User',{
    firstName:String,
    lastName:String,
    email:String,
    password:String
})


module.exports={User}