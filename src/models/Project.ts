import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProject extends Document {
  name: string;
  description?: string;
  user: Schema.Types.ObjectId;
}

const projectSchema = new mongoose.Schema<IProject>(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> = mongoose.model<IProject>("Project", projectSchema);

export default Project;