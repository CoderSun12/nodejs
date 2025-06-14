import messageService from "../services/messageService.js";
import Message from "../models/messageModel.js";

const messageController = {
  getMessageInfo: async (req, res) => {
    const { message_sender, message_receiver } = req.body;
    const messageInfo = await messageService.getMessageInfo(
      message_sender,
      message_receiver
    );
    res.send(messageInfo);
  },
};

export default messageController;
