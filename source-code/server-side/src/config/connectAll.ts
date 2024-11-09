import connectToDatabase from "./connectToDatabase";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRouter from "../routes/auth.route";

const app = express();
async function connectAll(): Promise<void> {
  await connectToDatabase();
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  dotenv.config();
  app.use("/api/auth", authRouter);
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default connectAll;
