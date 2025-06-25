import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const API = import.meta.env.VITE_API_URL;

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (title) => {
    await axios.post(API, { title });
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await axios.put(`${API}/${id}`);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
