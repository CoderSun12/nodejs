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
  postMessageCreate: async (req, res) => {
    res.send("postMessageCreate");
  },
  hello: async (req, res) => {
    res.send("hello");
  },
};

export default messageController;
