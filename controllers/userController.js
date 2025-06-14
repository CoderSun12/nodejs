import userService from "../services/userService.js";
import User from "../models/userModel.js";

const userController = {
  postLoginUser: async (req, res) => {
    try {
      const user = await userService.postLoginUser(req.body);
      if (!user) {
        res.status(401).json({
          status: 401,
          message: "账号或密码有误！",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "登录成功！",
          data: user.user_avatar,
        });
      }
    } catch (error) {
      console.log("Error logging in user");
    }
  },
  postUserInfo: async (req, res) => {
    try {
      const { user_account } = req.body;
      const userInfo = await userService.postUserInfo(user_account);
      res.status(200).json({
        status: 200,
        data: userInfo,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error,
      });
    }
  },
};

export default userController;
