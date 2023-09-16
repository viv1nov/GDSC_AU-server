import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyparser from "body-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors()
);
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


// app.use(dotenv.config());

import { AuthRouter } from "./routes/auth.js";
import { UserRouter } from "./routes/users.js";
import { QuestionRouter } from "./routes/question.js";
app.use("/auth", AuthRouter);
app.use("/users", UserRouter);
app.use("/question", QuestionRouter);

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
