
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: String,
    price: Number,
    category: [{
    }],
    isDelete :
    {
        type : Boolean,
        default : false
    }
     
},
    {
        versionKey: false,
        timestamps: true
    });
module.exports = mongoose.model('products', productSchema);