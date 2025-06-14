import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Message = sequelize.define(
  "message",
  {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message_sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message_receiver: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message_timestamp: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: true, createdAt: "message_timestamp", updatedAt: false }
);

export default Message;
