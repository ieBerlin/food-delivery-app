import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
