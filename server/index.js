// server creation
//1 import express
const express = require("express");
// 5 import cors
const cors = require("cors");
const authService = require("./services/auth.service");

// 2 using express create an app
const app = express();
// 4.use json parser for server application
app.use(express.json());

// using cors specify origin to the server
app.use(
  cors({
    Origin: " http://localhost:4200",
  })
);
//
const dataservice = require("./services/dataservice");
const adminservice=require("./services/admin.service")

app.get("/all-products/", (req, res) => {
  dataservice.getAllProducts().then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.get("/getproduct/:id",(req,res)=>{
  dataservice.getOneProduct(req.params.id).then(
   (result) => {
      res.status(result.statusCode).json(result);
    }
  )
  })

app.post("/addtowishlist", (req, res) => {
  console.log(req.body);
  dataservice
    .addTowishlist(
      req.body.id,
      req.body.title,
      req.body.price,
      req.body.description,
      req.body.brand,
      req.body.image
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});



app.delete("/deletewish/:id",(req,res)=>{
dataservice.deleteWish(req.params.id).then(
 (result) => {
    res.status(result.statusCode).json(result);
  }
)
})

app.post("/login", (req, res) => {
  console.log(req.body);
  authService.login(req.body.email, req.body.password).then((data) => {
    res.status(data.statusCode).json(data);
  });
});

app.post("/register", (req, res) => {
  console.log(req.body);
  authService
    .register(req.body.fname, req.body.lname, req.body.email, req.body.pswd)
    .then((data) => {
      res.status(data.statusCode).json(data);
    });
});

// api for getting wishlist product
app.get("/getwishlist",(req,res)=>{
  dataservice.getWishlist().then(
    (result)=>{
      res.status(result.statusCode).json(result)
  })
})
app.post('/admin/register',(req,res)=>{
  adminservice.adminCreate(req.body.uname,req.body.email)
  .then (user=>{
      if(user){
          res.status(user.statusCode).json(user)
      }
  })
})
app.post('/admin/login',(req,res)=>{
  adminservice.adminLogin(req.body.userid,req.body.pswd)
  .then (user=>{
      if(user){
          res.status(user.statusCode).json(user)
      }
  })
})

app.post("/addProduct", (req, res) => {
  console.log(req.body);
  adminservice
    .addProduct(
      req.body.id,
      req.body.title,
      req.body.price,
      req.body.description,
      req.body.brand,
      req.body.image
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

app.post("/UpdateProduct/", (req, res) => {
  console.log(req.body);
  adminservice
    .UpdateProduct(
      // req.params.id,
      req.body.id,
      req.body.title,
      req.body.price,
      req.body.description,
      req.body.brand,
      req.body.image
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});


app.delete("/deleteProduct/:id",(req,res)=>{
  adminservice.deleteProduct(req.params.id).then(
   (result) => {
      res.status(result.statusCode).json(result);
    }
  )
  })

// app.put("/updateProduct/:id",(req,res)=>{
//   console.log(req.body);
 
//   adminservice.updateProduct(req.params.id,req.body.title,req.body.price).then(
//    (result) => {
//       res.status(result.statusCode).json(result);
//     }
//   )
//   })
// 3 set up port number
app.listen(3000, () => {
  console.log("server listening at port 3000");
});
 