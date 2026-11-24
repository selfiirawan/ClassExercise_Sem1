import { useState } from "react";
import Task from "./Task";

function App() {
  // const [count, setCount] = useState(0);
  const allTheTasks = [
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
  ];

  return (
    <div>
      <h1 className="text-center my-3">Task Manager</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add a task..."
            value={task}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary">Add Task</button>
        </div>
      </form>
      {allTheTasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </div>
  );
}

export default App;
