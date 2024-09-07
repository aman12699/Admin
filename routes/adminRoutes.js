const express = require("express")
const { forgotPasswordController, loginController, signInController } = require('../controllers/authController');
// import { signInController } from '../controllers/authController.js';
const { createCategoryController, categoryControlller, deleteCategoryController, editCategoryController } = require('../controllers/categoryController');
const { createSubCategoryController, subCategoryController, deleteSubCategoryController, editSubCategoryController, getSubCategoryController } = require("../controllers/subCategoryController");
const { createProductController, categoryProductController, deleteProductController } = require("../controllers/productController");
const { requireSignIn } = require("../middleware/authMiddleware");



//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/sign-up", signInController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//protected Admin route auth
router.get("/admin-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  


router.post("/create-category", createCategoryController);


// //getALl category
router.get("/get-category", categoryControlller);

// //update category
router.put("/edit-category/:id", editCategoryController);

//delete category
router.delete("/delete-category/:id", deleteCategoryController);

//subcreate category
router.post("/subcreate-category", createSubCategoryController);

//getall subcategory
router.get("/get-subcategory", getSubCategoryController )

//update category
router.put("/edit-subcategory/:id", editSubCategoryController);

//delete subcategory
router.delete("/delete-subcategory/:id", deleteSubCategoryController);


//product category

router.post("/productcreate-category", createProductController);

router.get("/get-productcategory", categoryProductController);


//delete subcategory
router.delete("/delete-productcategory/:id", deleteProductController);



module.exports = router



// import express from "express";
// import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
// import {
//   categoryControlller,
//   createCategoryController,
//   deleteCategoryCOntroller,
//   singleCategoryController,
//   updateCategoryController,
// } from "./../controllers/categoryController.js";

// const router = express.Router();

// //routes
// // create category
// router.post(
//   "/create-category",
//   requireSignIn,
//   isAdmin,
//   createCategoryController
// );


// //getALl category
// router.get("/get-category", categoryControlller);

// //single category
// router.get("/single-category/:slug", singleCategoryController);


// export default router;