const mongoose = require("mongoose");

const subCategorySchema =  new mongoose.Schema({

    subname:{
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    photo: {
        data: Buffer,
        contentType: String,
    },
    
    status:{
        type: String,
    },

    sequence:{
        type: Number
    }
    

})
   

module.exports = mongoose.model("subcategory", subCategorySchema);