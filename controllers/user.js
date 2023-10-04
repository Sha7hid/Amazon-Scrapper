const { User } = require("../models/schema");
const { ProductLink } = require("../models/schema");
const getAllUser = (req, res, next) => {
  User.find().then(function(data){
      res.send(data);
    }).catch(function(err) {
      console.log(err);
    });

};
const getAllLink = (req, res, next) => {
    ProductLink.find().then(function(data){
        res.send(data);
      }).catch(function(err) {
        console.log(err);
      });
  
  };

  const saveUser = (req, res, next) => {
    const user= new User({
      email: req.body.email
    });
    user.save().then(function(data){
        res
          .status(200)
          .json({
            code: 200,
            message: "User Added Successfully",
            adduser: data,
          });
          
         }).catch(function(err) {
            console.log(err);
          });
  
  };


const saveLink = (req, res, next) => {
  const link = new ProductLink({
    link: req.body.link,
    user:req.body.user
  });
  link.save().then(function(data){
      res
        .status(200)
        .json({
          code: 200,
          message: "link Added Successfully",
          addlink: data,
        });
        
       }).catch(function(err) {
          console.log(err);
        });

};

const getUser = (req, res, next) => {
  User.findById(req.params.id).then(function(data) {
      res.send(data);
    }).catch(function(err){ 
      console.log(err);
    });
  
};
const getLink = (req, res, next) => {
    ProductLink.findById(req.params.id).then(function(data) {
        res.send(data);
      }).catch(function(err){ 
        console.log(err);
      });
    
  };
  

const updateUser = (req, res, next) => {
  const user = {
     email: req.body.email,
  };
  User.findByIdAndUpdate(
    req.params.id,
    { $set: user },
    { new: true }).then(function(data)  {
     
        res
          .status(200)
          .json({
            code: 200,
            message: "User Updated Successfully ",
            updateuser: data,
          });
      }).catch(function(err) {
        console.log(err);
      })
  
};
const updateLink = (req, res, next) => {
    const link = {
       link: req.body.link,
    };
    ProductLink.findByIdAndUpdate(
      req.params.id,
      { $set: link },
      { new: true }).then(function(data)  {
       
          res
            .status(200)
            .json({
              code: 200,
              message: "Link Updated Successfully ",
              updatelink: data,
            });
        }).catch(function(err) {
          console.log(err);
        })
    
  };

const deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.params.id).then(function(data) {
      res
        .status(200)
        .json({
          code: 200,
          message: "User Deleted Successfully",
          deleteuser: data,
        });
    }).catch(function(err) {
      console.log(err);
    })

};
const deleteLink = (req, res, next) => {
    ProductLink.findByIdAndDelete(req.params.id).then(function(data) {
        res
          .status(200)
          .json({
            code: 200,
            message: "Link Deleted Successfully",
            deleteuser: data,
          });
      }).catch(function(err) {
        console.log(err);
      })
  
  };
  const getProductLinksByUserId = (req, res, next) => {
    const userId = req.params.id; // Get the user ID from the request parameters
  
    ProductLink.find({ user: userId })
      .then(function (data) {
        res.status(200).json({
          code: 200,
          productLinks: data,
        });
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).json({
          code: 500,
          message: "Error fetching product links for the user",
        });
      });
  };
  

module.exports = {
  getAllUser,
  getAllLink,
  saveUser,
  saveLink,
  getUser,
  getLink,
  updateUser,
  updateLink,
  deleteUser,
  deleteLink,
  getProductLinksByUserId
};