const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    item:[{
        cartItem {
        type:mongoose.Schema.Types. ObjectId,
        ref:'products'
        },
        quentity:{
            type:Number,
            default: 1
        },
        

    }]
})