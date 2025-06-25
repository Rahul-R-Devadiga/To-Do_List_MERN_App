import tasks from "../tasksData.js";
import { v4 as uuidv4 } from "uuid";

export const getTasks = (req, res) => {
  res.json(tasks);
};

export const addTask = (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: uuidv4(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.completed = !task.completed;
  res.json(task);
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  tasks.splice(index, 1);
  res.status(204).send();
};
