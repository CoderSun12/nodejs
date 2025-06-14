import loverService from "../services/loverService.js";
import Lover from "../models/loverModel.js";

const loverController = {
  postLoverInfo: async (req, res) => {
    const { user_account } = req.body;
    const loverInfo = await loverService.postLoverInfo(user_account);
    res.send(loverInfo);
  },
};

export default loverController;
