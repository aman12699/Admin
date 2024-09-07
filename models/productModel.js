const mongoose =  require("mongoose");

const productSchema = new mongoose.Schema({
    productname:{
        type: String,
        required: true
    },

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

    // sequence: {
    //     type: Number,
    //     // required: true
    //   },
    },

    // { timestamps: true }


)
module.exports = mongoose.model("Product", productSchema)