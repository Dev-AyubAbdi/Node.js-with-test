import express from "express";
const app = express();
import dotenv from "dotenv";
const PORT = process.env.PORT || 2000;
import mongoose from "mongoose";
dotenv.config();
import getUser from "./routes/user.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";

import userAuth from "./routes/authRegister.js";
import UserLoggin from "./routes/authRegister.js";
import AdminDashboard from './routes/authorized.js'
import uploadFile from './routes/upload.js'

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello world");
});
app.use("/create", getUser);
app.use("/user", userAuth);
app.use("/sigin", UserLoggin);
app.use("/admin", AdminDashboard);
app.use("/upload", uploadFile);
app.use(notFound);

app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected Locally"))
  .catch((err) => console.log("❌ Error Connection", err));

app.listen(PORT, () => {
  console.log(`server runing:http://localhost:${PORT}`);
});
