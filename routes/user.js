const express = require("express");

const router = express.Router();
const userController = require("../controllers/user");

// Get All Users
router.get("/", userController.getAllUser);
// Get All Links
router.get("/link", userController.getAllLink);
// Save a User
router.post("/add", userController.saveUser);
// Save a Link
router.post("/link/add", userController.saveLink);
// GEt a Single User
router.get("/user/:id", userController.getUser);
// GEt a Single Link
router.get("/link/:id", userController.getLink);
// get product links for the user id given
router.get("/link/userid/:id", userController.getProductLinksByUserId);
// Update a User
router.put("/user/edit/:id", userController.updateUser);
// Update a Link
router.put("/link/edit/:id", userController.updateLink);
// Delete a User
router.delete("/user/:id", userController.deleteUser);
// Delete a Link
router.delete("/link/:id", userController.deleteLink);
module.exports = router;