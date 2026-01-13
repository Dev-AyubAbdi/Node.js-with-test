import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(2000, () => {
  console.log("server runing:http://localhost:6000");
});
