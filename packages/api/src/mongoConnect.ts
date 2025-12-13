import mongoose from "mongoose";
import { config } from "./config";

const MONGO_URI = config.mongoUrl;

export async function connectMongoDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // stop the app if connection fails
  }
}
