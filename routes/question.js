import express from "express";
import {
  fetchRespones,
  fetchSingleResponse,
  submitQuestions,
} from "../controllers/question.js";

const router = express.Router();

router.post("/submit", submitQuestions);
router.get("/responses", fetchRespones);
router.get("/singleResponse/:resID", fetchSingleResponse);

export { router as QuestionRouter };
