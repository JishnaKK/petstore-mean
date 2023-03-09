const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('mongo connected successfully');
})

const User=mongoose.model('User',{
    firstName:String,
    lastName:String,
    email:String,
    password:String
})


module.exports={User}