import express from "express";
import {
  deleteUser,
  getAllUsers,
  getCurrentUser,
  singleUser,
  updatePoints,
  updateUser,
} from "../controllers/users.js";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

router.get("/currentUser/:userID", getCurrentUser);
router.get("/singleUser/:resID", singleUser);
router.get("/getAllUsers", getAllUsers);
router.patch("/updateUser/:userID", upload.single("file"), updateUser);
router.put("/updatePoints/:resID", updatePoints);

router.delete("/deleteUser/:userID", deleteUser);

export { router as UserRouter };
