import { useState } from "react";
import Task from "./Task";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-center my-3">Task Manager</h1>
      <Task />
    </div>
  );
}

export default App;
