const mongoose =  require("mongoose");

const categorySchema = new mongoose.Schema({
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

    // sequence: {
    //     type: Number,
    //     // required: true
    //   },
    },

    // { timestamps: true }


)
module.exports = mongoose.model("Category", categorySchema)
