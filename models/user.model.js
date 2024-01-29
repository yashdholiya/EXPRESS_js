const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname :{
        type : String
    },
    lastname :{
        type : String
    },
    email :{
        type : String,
        unique : true,
        required: true
    },
    password :{
        type : String
    },
    mobileNo: {
        type : String
    },
    isDelete :
    {
        type : Boolean,
        default : false
    }
},
    
    

{
    versionKey : false,
    timestamps: true
})

module.exports= mongoose.model('users',userSchema);