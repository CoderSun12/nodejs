import Lover from "../models/loverModel.js";
import axios from "axios";
import { Op } from "sequelize";

const loverService = {
  postLoverInfo: async (user_account) => {
    try {
      const loverInfo = await Lover.findAll({
        Where: {
          [Op.or]: [
            { user_account: user_account },
            { lover_user_account: user_account },
          ],
        },
        distinct: true,
        attributes: ["user_account", "lovers_user_account"],
      });
      const uniqueAccounts = new Set();
      for (let i = 0; i < loverInfo.length; i++) {
        uniqueAccounts.add(loverInfo[i].user_account);
        uniqueAccounts.add(loverInfo[i].lovers_user_account);
      }
      const FinalAccounts = Array.from(uniqueAccounts).filter(
        (acc) => acc !== user_account
      );
      const results = [];
      for (let i = 0; i < FinalAccounts.length; i++) {
        const response = await axios.post(
          "http://47.116.121.111:3000/api/user/userInfo",
          { user_account: FinalAccounts[i] }
        );
        results.push(response.data);
      }
      return results;
    } catch (err) {
      console.log(err);
    }
  },
};

export default loverService;
