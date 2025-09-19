import express from "express";
import {
  createBook,
  findbook,
  getfindbyid,
  updatebooks,
  deletebook,
} from "../controllers/bookController.js";

const router = express.Router();
//console.log("test");
router.post("/", createBook);
router.get("/", findbook);
router.get("/:id", getfindbyid);
router.put("/:id", updatebooks);
router.delete("/:id", deletebook);

export default router;
