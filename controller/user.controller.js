const  userServices= require('../services/user.service');
const jwt = require('jsonwebtoken');
const userService = new userServices();


exports.registerUser= async (req,res)=>
{
   try {
        let user = await userService.getUser({email:req.body.email});
      //   console.log(user);
        if(user)
        {
            return res.json({message: "User is already register"})
        }

        let hashpassword= await bcrypt.hash(req.body.password,10);

        user = await userService.addNewUser({...req.body,password:hashpassword});
        res.status(201).json({user,message:"User create a new account.."})
   } catch (error) {
    console.log(error)
    res.json({message: "Internal Server Error"});
   } 
};


exports.loginUser= async (req,res)=>
{
   try {
        let user = await userService.getUser({email: req.body.email,isDelete : false});
        if(!user)
        {
            return res.json({message: "User is not t found "});
        }

        const comparepassword= await bcrypt.compare(req.body.password, user.password);
        if(!comparepassword)
        {
           return  res.json({message:"password invalid"})
        }
        let payLoad = {
         userId : user._id
        };
        let token = jwt.sign(payLoad,'darshan');
        console.log(token);
        res.status(201).json({token,message:"Login successfull.."})
   } catch (error) {
    console.log(error)
    res.json({message: "Internal Server Error"});
   } 
};


exports.getProfile = async (req,res)=>
{
   try {
      let user = req.user;
      res.status(200).json(user);
   } catch (error) {
      console.log(error);
      res.json({message : "Internal Server Error"})
   }
};


exports.UpdateUser = async(req,res) =>{
 try{
   
   let user = await userService.getUserById(req.user._id);
if(!user)
{
   return res.json({message:'User is not Found !!!'});
}
   user = await  userService.UpdateUser(user._id,{...req.body});
   res.json({ message:'User Update sucess !!'})
} catch (Error){
   console.log(error);
   res.json({message :'Inter server error'})
}
};


exports.deleteUser = async(req,res) =>{
 try{
   
   let user = await userService.getUserById(req.user._id);
if(!user)
{
   return res.json({message:'User is not Found !!!'});
}
   user = await  userService.UpdateUser(user._id,{isDelete:true});
   res.json({user , message:'User delete sucess !!'})
} catch (Error){
   console.log(error);
   res.json({message :'Inter server error'})
}
};
// const bcrypt = require('bcrypt');
// const userService = require('path/to/userService'); // Make sure to provide the correct path

exports.updatePassword = async (req, res) => {
   try {
      const userId = req.user._id;
      const { oldPassword, newPassword, confirmPassword } = req.body;

      const user = await userService.getUserById(userId);
      if (!user) return res.json({ message: "User is not found.." });

      const isSamePassword = await bcrypt.compare(oldPassword, user.password);
      if (!isSamePassword) return res.json({ message: "Invalid old password" });

      if (oldPassword === newPassword) {
         return res.json({ message: "Old password and new password are the same" });
      }

      if (newPassword !== confirmPassword) {
         return res.json({ message: "New password and confirm password do not match" });
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      await userService.updateUser(userId, { password: hashedNewPassword });

      res.json({ message: "Password updated successfully!" });
   } catch (error) {
      console.error(error);
      res.json({ message: "Internal Server Error" });
   }
};
