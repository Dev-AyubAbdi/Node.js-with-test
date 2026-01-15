import mongoose from "mongoose";

const taskScheme = new mongoose.Schema({
  title: { type: String, 
    required: true },
  discription: String,
  status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
  },
  dueDate: Date,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
},{
    timestamps: true
}
);


export default mongoose.model('task', taskScheme)