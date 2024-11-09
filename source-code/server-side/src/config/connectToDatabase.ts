import mongoose from "mongoose";

async function connectToDatabase() {
  const dbUri = "mongodb://0.0.0.0:27017/food-delivery";
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Failed to connect to the database!");
  }
}

export default connectToDatabase;
