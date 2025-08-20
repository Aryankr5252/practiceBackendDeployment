import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      enum: {
        values: ["Finance", "HR", "IT", "Marketing", "Operations", "Sales"],
        message: "Department must be one of: Finance, HR, IT, Marketing, Operations, Sales",
      },
    },
  });

const users = mongoose.model("user", userSchema);

export default users;