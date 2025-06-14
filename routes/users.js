import userController from "../controllers/userController.js";
import express from "express";
import User from "../models/userModel.js";
import fs from "fs";

const UserRouter = express.Router();

UserRouter.post("/login", userController.postLoginUser);
UserRouter.post("/userInfo", userController.postUserInfo);

export default UserRouter;
