import { useState } from "react";
import Task from "./Task";

function App() {
  // const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Sweep the floor",
      isDone: false,
    },
    {
      id: 2,
      task: "Kill the cockroach",
      isDone: true,
    },
    {
      id: 3,
      task: "Buy groceries",
      isDone: false,
    },
    {
      id: 4,
      task: "Fix the roof",
      isDone: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  let displayedTask;
  switch (filter) {
    case "done":
      displayedTask = tasks.filter((task) => task.isDone);
      break;
    case "undone":
      displayedTask = tasks.filter((task) => !task.isDone);
      break;
    default:
      displayedTask = tasks;
  }

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getLastId = tasks[tasks.length - 1].id;
    const newTaskObject = {
      id: getLastId + 1,
      task: newTask,
      isDone: false,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  return (
    <div>
      <h1 className="text-center my-3">Task Manager</h1>

      <div className="d-flex justify-content-center mb-3">
        <div className="btn-group" role="group">
          <button
            onClick={() => handleFilterChange("all")}
            className="btn btn-primary"
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("done")}
            className="btn btn-success"
          >
            Done
          </button>
          <button
            onClick={() => handleFilterChange("undone")}
            className="btn btn-danger"
          >
            Undone
          </button>
        </div>
      </div>

      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="btn btn-secondary mb-3"
      >
        {isFormVisible ? "Hide Form" : "Show Form"}
      </button>

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
      {displayedTask.map((task, key) => (
        <Task key={task.id} {...task} toggleTaskButton={toggleTaskStatus} />
      ))}
    </div>
  );
}

export default App;
