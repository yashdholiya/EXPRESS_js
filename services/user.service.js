const User = require('../models/user.model');

module.exports= class userServices{
    //Create User /  Regester

    async addNewUser(body)
    {
        try {
            return await User.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };


    // login 

    async getUser(body)
    {
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
     
    //get user ny id
    async getUserById(id)
    {
        try {
            return await User.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }


    //Update  user 
    async UpdateUser(id,body)
    {
        try {
            return await User.findByIdAndUpdate(id , { $set: body}, {new : true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

};