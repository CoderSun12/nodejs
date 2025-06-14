import express from "express";
import cors from "cors";
import UserRouter from "./routes/users.js";
import LoverRouter from "./routes/lovers.js";
import MessageRouter from "./routes/messages.js";
import path from "path";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", UserRouter);
app.use("/api/lover", LoverRouter);
app.use("/api/message", MessageRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
