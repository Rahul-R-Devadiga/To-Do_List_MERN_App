import express from "express";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import validateTask from "../middleware/validateTask.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", validateTask, addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
