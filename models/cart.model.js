const mongoose = require('mongoose');


const cartSchema =  mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    cartItem:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'   
    },
    quntity :{
        type : Number,
        default : 1
    },
     isdelete:{
        type : Boolean,
        default : false
    }
    
}, 

{
    versionKey : false,
    timestamps: true
})

module.exports= mongoose.model('carts',cartSchema);