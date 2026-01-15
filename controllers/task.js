
import Task from "../models/task.js";

export const CreateTask = async (req, res, next) => {
     console.log("REQ BODY 👉", req.body);
   try {
    const {title, discription, status} = req.body
    const task = await Task.create({title, discription, status,  createdBy: req.user._id });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};
