import Message from "../models/messageModel.js";
import { Op } from "sequelize"; // ✅ 添加这一行

const messageService = {
  getMessageInfo: async (message_sender, message_receiver) => {
    const messageInfo = await Message.findAll({
      where: {
        [Op.or]: [
          {
            message_sender: message_sender,
            message_receiver: message_receiver,
          },
          {
            message_sender: message_receiver,
            message_receiver: message_sender,
          },
        ],
      },
      order: [["message_timestamp", "DESC"]],
      attributes: [
        "message_sender",
        "message_receiver",
        "message_content",
        "message_timestamp",
      ],
      limit: 20,
      distinct: true,
    });
    return messageInfo;
  },
};

export default messageService;
