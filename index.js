import express from "express";
const app = express();
import dotenv from 'dotenv'
const PORT = process.env.PORT || 2000
import mongoose from "mongoose";
dotenv.config()
import getUser from './routes/user.js'

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello world");
});
app.use('/create', getUser )

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("✅ Connected Locally"))
    .catch((err)=> console.log("❌ Error Connection", err))

app.listen(PORT, () => {
  console.log(`server runing:http://localhost:${PORT}`);
});
