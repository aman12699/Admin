const subCategoryModel = require("../models/subCategoryModel.js");

//create category
exports.createSubCategoryController = async (req, res) => {
    try {
        const { subname, name,  status, sequence } = req.body;
        const { photo } = req.body;
        if(!subname){
            return res.status(401).send({message: "subname is required"})
        }
        if (!name) {
            return res.status(401).send({ message: "Name is required" });
        }

        // if (!sequence) {
        //   return res.status(401).send({ message: "Name is sequence" });
        // }

        const subcategory = await new subCategoryModel({
            subname,
            name,
            status,
            sequence
        })
        if (photo) {
            category.photo.data = fs.readFileSync(photo.path);
            category.photo.contentType = photo.type;
        }
        await subcategory.save();
        // res.status(204).send({
        //     success: true,
        //     message: "new subcategory created",
        //     subcategory
        // });
        res.status(200).send({
            success: true,
            message: "new subcategory created",
            subcategory
        })
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
exports.editSubCategoryController = async (req, res) => {
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
exports.getSubCategoryController = async (req, res) => {
    try {
        const subcategory = await subCategoryModel.find({});
        res.status(200).send({
            success: true,
            message: "All Categories List",
            subcategory,
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
exports.deleteSubCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await subCategoryModel.findByIdAndDelete(id);
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