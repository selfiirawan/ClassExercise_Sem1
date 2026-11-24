import { useState } from "react";
import Task from "./Task";

function App() {
  // const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    {
      task: "Sweep the floor",
      isDone: false,
    },
    {
      task: "Kill the cockroach",
      isDone: true,
    },
    {
      task: "Buy groceries",
      isDone: false,
    },
    {
      task: "Fix the roof",
      isDone: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskObject = {
      task: newTask,
      isDone: false,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  return (
    <div>
      <h1 className="text-center my-3">Task Manager</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary">Add Task</button>
        </div>
      </form>
      {tasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </div>
  );
}

export default App;
