import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { AuthRouter } from "./routes/auth.js";
import { UserRouter } from "./routes/users.js";
import { QuestionRouter } from "./routes/question.js";
import bodyparser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static("images"));

// app.use(dotenv.config());

app.use("/auth", AuthRouter);
app.use("/users", UserRouter);
app.use("/question", QuestionRouter);
dotenv.config();

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongodb is connected!`);
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(process.env.PORT, console.log(`Server is active!`));
