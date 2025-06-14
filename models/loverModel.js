import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Lover = sequelize.define(
  "lover",
  {
    lovers_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lovers_user_account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Lover;
