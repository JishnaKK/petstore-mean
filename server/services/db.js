// import mongoose
const mongoose =require('mongoose')
// define connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('mongo connected successfully');
})


// create a model to store all product
const Product=mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    brand:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

const Wishlist=mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    brand:String,
    image:String,
})
// to use Product in other files-we have to export it
const Admin=mongoose.model('Admin',{
    UniqueId:String,
    Name:String,
    Email:String,
    Password:String,
    RegisteredTime:Date,


})
module.exports={
    Product,Wishlist,Admin
}