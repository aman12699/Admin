const productModel = require("../models/productModel.js");

//create category
exports.createProductController = async (req, res) => {
    try {
        const {productname, subname, name,  status } = req.body;
         const { photo } = req.body;
         if(!productname){
            return res.status(401).send({message: "productname is required"})
         }
        if(!subname){
            return res.status(401).send({message: "subname is required"})
        }
        if (!name) {
            return res.status(401).send({ message: "Name is required" });
        }

        // if (!sequence) {
        //   return res.status(401).send({ message: "Name is sequence" });
        // }

       
        const productcategory = await new productModel({
            productname,
            subname,
            name,
            photo,
            status,
            // sequence
        })
        if (photo) {
            category.photo.data = fs.readFileSync(photo.path);
            category.photo.contentType = photo.type;
        }
        await productcategory.save();
        res.status(201).send({
            success: true,
            message: "new category created",
            productcategory,
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
exports.categoryProductController = async (req, res) => {
    try {
        const productcategory = await productModel.find({});
        res.status(200).send({
            success: true,
            message: "All Categories List",
            productcategory,
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
exports.deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.findByIdAndDelete(id);
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