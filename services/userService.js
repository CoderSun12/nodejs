import User from "../models/userModel.js";

const userService = {
  postLoginUser: async (user) => {
    const loginUser = await User.findOne({
      where: {
        user_account: user.user_account,
        user_password: user.user_password,
      },
    });
    return loginUser;
  },

  postUserInfo: async (user_account) => {
    try {
      const data = await User.findOne({
        where: { user_account },
        attributes: ["user_name", "user_account", "user_avatar"],
      });
      return data;
    } catch (err) {
      return "网络错误";
    }
  },
};

export default userService;
