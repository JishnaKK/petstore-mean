// import db
const db = require("./db");
// get all products from the database
const getAllProducts = () => {
  // to fetch all products from mongodb
  return db.Product.find().then((result) => {
    if (result) {
      return {
        status: true,
        statusCode: 200,
        products: result,
      };
    } else {
      return {
        status: false,
        statusCode: 404,
        message: "No product found",
      };
    }
  });
};


const getOneProduct = (id) => {
  // to fetch all products from mongodb
  return db.Product.findOne({id}).then((result) => {
    if (result) {
      return {
        status: true,
        statusCode: 200,
        products: result,
      };
    } else {
      return {
        status: false,
        statusCode: 404,
        message: "No product found",
      };
    }
  });
};

const addTowishlist = (id,title,price,description,brand,image) => {
   
  return db.Wishlist.findOne(
    
    { id }).then((result) => {
     console.log("result:",result);
      if (result) {
        return {
          status: false,
          statusCode: 401,
          message: "product already exist",
        };
      } else {
        const newProduct = new db.Wishlist({
          id,
          title,
          price,
          description,
          brand,
          image,
        });
        newProduct.save();
        console.log(newProduct);
        return {
          status: true,
          statusCode: 200,
          message: "Product added",
        };
      }
    })
};

const getWishlist=()=>{
  return db.Wishlist.find().then(
    (result)=>{
      if(result){
        return{
              status:true,
              statusCode:200,
              // message:"product addes successfully"
              wishlists:result
        }
      }else{
        return{
          status:false,
          statusCode:401,
          message:"your wishlist is empty"
        }
      }
    }
  )
}

const deleteWish=(id)=>{
  return db.Wishlist.deleteOne({id})
  .then((result)=>{
    console.log(result);
    if(result){
      return{
        status:true,
        statusCode:200,
        message:`your wishlist product is deleted successfully`
      }
    }
    else{
      return{
        status:false,
        statusCode:401,
        message:"failed"
      }
    }
  })
}

module.exports = {
  getAllProducts,
  addTowishlist,getWishlist,deleteWish,getOneProduct
};
