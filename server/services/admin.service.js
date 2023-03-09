const db = require("./db");

const adminCreate = (name, email) => {
  return db.Admin.findOne({ Email: email }).then((admin) => {
    if (admin) {
      return {
        status: false,
        statusCode: 403,
        message: "Already registered!",
      };
    } else {
      const newAdmin = new db.Admin({
        UniqueId: "EAdmin002",
        Name: name,
        Email: email,
        Password: name + "@EAdmin002",
        RegisteredTime: new Date(),
      });
      newAdmin.save();
      return {
        status: true,
        statusCode: 203,
        message: "Registered successfully!",
      };
    }
  });
};

const adminLogin = (userid, pswd) => {
  return db.Admin.findOne({ UniqueId: userid, Password: pswd }).then(
    (admin) => {
      if (admin) {
        adminname=admin.Name
        return {
          status: true,
          statusCode: 203,
          message: "login successfully!",
          adminname
        };
      } else {
        return {
          status: false,
          statusCode: 403,
          message: "wrong user id or password!",
        };
      }
    }
  );
};

const addProduct = (id, title, price, description, brand, image) => {
  return db.Product.findOne({ id }).then((result) => {
    console.log("result:", result);
    if (result) {
      return {
        status: false,
        statusCode: 401,
        message: "product already exist",
      };
    } else {
      const newProduct = new db.Product({
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
  });
};

const UpdateProduct = (id, title, price, description, brand, image) => {
  return db.Product.findOne({
   id
  }).then((result) => {
    console.log("result:", result);
    if (result) {
      result.id = id;
      result.title = title;
      result.price = price;
      result.description = description;
      result.brand = brand;
      result.image = image;
      result.save();
      return {
        status: true,
        statusCode: 200,
        message: "product updated successfully",
      };
    } else {
      return {
        status: false,
        statusCode: 403,
        message: "failed",
      };
    }
  });
};

const deleteProduct = (id) => {
  return db.Product.deleteOne({ id }).then((result) => {
    console.log(result);
    if (result) {
      return {
        status: true,
        statusCode: 200,
        message: ` product is deleted successfully`,
      };
    } else {
      return {
        status: false,
        statusCode: 401,
        message: "failed",
      };
    }
  });
};
module.exports = {
  adminCreate,
  adminLogin,
  addProduct,
  UpdateProduct,
  deleteProduct,
};
