import mongoose from "mongoose";

const AllowanceRequestSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: {
        values: ["Pending", "Approved", "Rejected"],
        message: "Status must be either Pending, Approved, or Rejected",
      },
      default: "Pending",
    },
  });

const Allowance = mongoose.model("Allowance", AllowanceRequestSchema);

export default Allowance;