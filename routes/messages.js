import messageController from "../controllers/messageController.js";
import express from "express";
import Message from "../models/messageModel.js";
import fs from "fs";

const MessageRouter = express.Router();

MessageRouter.post("/messageInfo", messageController.getMessageInfo);

export default MessageRouter;
