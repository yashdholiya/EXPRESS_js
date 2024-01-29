const jwt = require('jsonwebtoken');
const User= require('../models/user.model');

exports.verifyToken = async (req,res,next)=>
{
    try {
        const authorized = req.headers['authorization'];
        if(typeof authorized !=='undefined')
        {
            let token = authorized.split(" ")[1];
            // console.log(toekn)
            const {userId}= jwt.verify(token,'darshan');
            // console.log(userId);
            req.user= await  User.findOne({_id : userId,isDelete : false});
            // console.log(req.user);
            req.user? next(): res.json({message:'Invalid user'});
        }
    } catch (error) {
        console.log(error);
        res.json({message:"Internal Server Error "})
    }
}