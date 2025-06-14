import { Sequelize } from "sequelize";

const sequelize = new Sequelize("chat", "root", "Aa123456aA@", {
  host: "47.116.121.111",
  port: 3307,
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
