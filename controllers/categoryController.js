const categoryModel = require("../models/categoryModel.js");
const fs = require("fs");

//create category
exports.createCategoryController = async (req, res) => {
  try {
    const { name, status, sequence } = req.body;
    const {photo} = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    
    // if (!sequence) {
    //   return res.status(401).send({ message: "Name is sequence" });
    // }

    // const products = new productModel({ ...req.fields, slug: slugify(name) });


    
      const category =  new categoryModel({
        name,
        status,
        sequence
      })
      if (photo) {
          category.photo.data = fs.readFileSync(photo.path);
          category.photo.contentType = photo.type;
        }
        await category.save();
      res.status(201).send({
        success: true,
        message: "new category created",
        category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro in Category",
    });
  }
};



//edit category
exports.editCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};

// get all category
exports.categoryControlller = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};


//delete category
exports.deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Categry Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting category",
      error,
    });
  }
};