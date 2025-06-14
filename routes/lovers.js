import loverController from "../controllers/loverController.js";
import express from "express";
import Lover from "../models/loverModel.js";
import fs from "fs";

const LoverRouter = express.Router();

LoverRouter.post("/loverInfo", loverController.postLoverInfo);

export default LoverRouter;
