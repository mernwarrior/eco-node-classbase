import express from "express";
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent); // Create
router.get("/", getStudents); // Read all
router.get("/:id", getStudentById); // Read by id
router.put("/:id", updateStudent); // Update
router.delete("/:id", deleteStudent); // Delete

export default router;
