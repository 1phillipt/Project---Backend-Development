

import express from "express";
import type { Request, Response } from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/db";
   
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("TaskMaster API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});