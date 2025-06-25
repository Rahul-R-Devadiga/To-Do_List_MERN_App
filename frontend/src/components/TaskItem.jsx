const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task">
      <span className={task.completed ? "completed" : ""}>{task.title}</span>
      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
