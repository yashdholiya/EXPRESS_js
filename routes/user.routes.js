const express = require("express");
const userRoutes = express.Router();
const {registerUser,loginUser,getProfile, UpdateUser, deleteUser, updatePassword}= require('../controller/user.controller');
const { verifyToken } = require("../helpers/verifyToken");


userRoutes.post('/register',registerUser);
userRoutes.post('/login',loginUser);
userRoutes.get('/profile',verifyToken,getProfile);
userRoutes.put('/Update-profile',verifyToken,UpdateUser);
userRoutes.delete('/Delete-User',verifyToken,deleteUser);
userRoutes.put('/Update-password-User',verifyToken,updatePassword);

module.exports= userRoutes;